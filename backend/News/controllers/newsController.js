const News = require("../models/News");
const faker = require("faker");
const addNews = async (req, res) => {
  if (req.isAuthenticated() && req.user.admin) {
    const data = {
      heading: req.body.heading,
      thumbnail: req.body.thumbnail,
      desc: req.body.desc,
      video_link: req.body.video_link,
      full_story: req.body.full_story,
      date: new Date(),
      sections: req.body.sections,
    };
    // const sections = ["news", "column", "deal_street", "interview"];
    // const data = {
    //   heading: faker.name.findName(),
    //   thumbnail: faker.image.business(),
    //   desc: faker.lorem.paragraphs(),
    //   video_link: faker.image.animals(),
    //   full_story: faker.lorem.paragraphs(),
    //   date: faker.date.past(),
    //   sections: [sections[Math.floor(Math.random() * 4)]],
    //   paid: Math.floor(Math.random() * 10000) % 2 === 0 ? true : false,
    // };
    try {
      let restaurant = new News(data);
      await restaurant.save();
      return res.json({
        err: false,
        success: true,
        message: "Successfully added",
        data: restaurant,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: true, success: false, message: "Something went Wrong" });
    }
  } else {
    res.status(500).json({
      err: false,
      success: false,
      message: "Only Admins have this access....",
    });
  }
};

const getNewsSection = async (req, res) => {
  const news = await News.find({
    sections: { $all: [req.params["section"]] },
    paid:
      req.isAuthenticated() && req.user.subscirbed
        ? { $in: [true, false] }
        : false,
  });
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
    const news = await News.find({
      paid:
        req.isAuthenticated() && req.user.subscirbed
          ? { $in: [true, false] }
          : false,
    })
      .sort({
        _id: -1,
      })
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
  getNewsSection,
  getAllNews,
  addNews,
};
