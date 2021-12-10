const User = require("../Model/User");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
module.exports = (passport) => {
  console.log("In Config>>>>>>>");
  passport.use(
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      (email, password, done) => {
        User.findOne({ email: email }, (err, user) => {
          if (err) {
            throw err;
          }
          if (!user) {
            return done(null, false);
          }
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              throw err;
            }
            if (!result) {
              return done(null, false);
            } else {
              return done(null, user);
            }
          });
        });
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findOne({ _id: id }, (err, user) => {
      done(err, {
        email: user.email,
        name: user.name,
        phone: user.phone,
        orders: user.orders,
        subscirbed: user.subscirbed,
        admin: user.admin,
      });
    });
  });
};
