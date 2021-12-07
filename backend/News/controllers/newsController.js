const News = require("../models/News");
const faker = require("faker");
const addNews = async (req, res) => {
  // console.log(req.body);
  // const data = req.body;
  const data = {
    heading:
      faker.name.findName() +
      faker.finance.transactionDescription() +
      faker.commerce.department(),
    thumbnail: faker.image.imageUrl(),
    desc: faker.lorem.lines(),
    video_link: faker.image.imageUrl(),
    full_story: faker.lorem.paragraphs(),
  };
  try {
    let restaurant = new News(data);
    await restaurant.save();
    return res.json({
      err: false,
      message: "Successfully added",
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went Wrong" });
  }
};

const getNews = async (req, res) => {
  const news = await News.findOne({ id: req.params["id"] });
  if (news) {
    return res.json({ err: false, message: "Success", news: news });
  } else {
    return res
      .status(404)
      .json({ err: true, message: "No news found with this id" });
  }
};

const getAllNews = async (req, res) => {
  try {
    const news = await News.find()
      .sort({ _id: -1 })
      .limit(parseInt(req.params.count));
    if (news) {
      return res.json({ err: false, message: "Success", ...news });
    } else {
      return res.status(404).json({ err: true, message: "Fail No news found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went wrong" });
  }
};

// const filterNesws = async (req, res) => {
//   let { filters, sort } = req.body;
//   for (let key in filters[0]) {
//     if (key == "cuisines") {
//       let reg = new RegExp(filters[0][key], "i");
//       filters = [{ ...filters[0], cuisines: reg }];
//     }
//   }
//   try {
//     const restaurant = await Restaurant.find(...filters).sort(...sort);
//     return res.json({ err: false, message: "Success", restaurant: restaurant });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ err: true, message: "Something went wrong" });
//   }
// };

module.exports = {
  getNews,
  getAllNews,
  addNews,
};
