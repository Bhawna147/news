from rest_framework import serializers

from core.models import User
from .models import Customer, News
from rest_framework.validators import UniqueValidator


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['heading', 'thumbnail', 'desc', 'video_link',
                  'full_story', 'date', 'paid', 'section']


class CustomerSerializer(serializers.ModelSerializer):
    email = serializers.SerializerMethodField(method_name='get_email')

    def get_email(self, customer):
        return customer.user.email

    class Meta:
        model = Customer
        fields = ['name', 'gender', 'phone',
                  'country', 'state', 'city', 'email']


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(
        write_only=True, required=True)
    customer = CustomerSerializer()

    class Meta:
        model = User
        fields = ('username', 'password',
                  'email', 'first_name', 'last_name', 'customer')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        customer = Customer.objects.create(
            **validated_data['customer'], user=user)

        user.set_password(validated_data['password'])
        customer.save()
        user.save()

        return user
