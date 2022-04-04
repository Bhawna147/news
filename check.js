let dat = [
  {
    name: "ayush",
    heading: "hello",
    age: "23",
    work: "noida",
    thumbnail: "hulujaj.com",
    _id: "1",
    paid: false,
  },
  {
    name: "ayush",
    heading: "hello",
    age: "23",
    work: "noida",
    thumbnail: "hulujaj.com",
    _id: "2",
    paid: false,
  },
  {
    name: "ayush",
    heading: "hello",
    age: "23",
    work: "noida",
    thumbnail: "hulujaj.com",
    _id: "3",
    paid: true,
  },
  {
    name: "ayush",
    heading: "hello",
    age: "23",
    work: "noida",
    thumbnail: "hulujaj.com",
    _id: "3",
    paid: true,
  },
  {
    name: "ayush",
    heading: "hello",
    age: "23",
    work: "noida",
    thumbnail: "hulujaj.com",
    _id: "6",
    paid: false,
  },
  {
    name: "ayush",
    heading: "hello",
    age: "23",
    work: "noida",
    thumbnail: "hulujaj.com",
    _id: "5",
    paid: false,
  },
  {
    name: "ayush",
    heading: "hello",
    age: "23",
    work: "noida",
    thumbnail: "hulujaj.com",
    _id: "4",
    paid: true,
  },
];

let newData = dat.map((data) => {
  if (data.paid === true) {
    Object.keys(data).forEach(function (itm) {
      if (itm != "heading" && itm != "_id" && itm != "thumbnail") {
        delete data[itm];
      }
    });
  }
  return data;
});

console.log(newData);
