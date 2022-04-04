const News = require("../models/News");
const addNews = async (req, res) => {
  if (req.isAuthenticated() && req.user.admin) {
    const data = {
      heading: req.body.heading,
      thumbnail: req.body.thumbnail,
      desc: req.body.desc,
      video_link: req.body.video_link,
      full_story: req.body.full_story,
      date: new Date(),
      sections: [req.body.sections],
      paid: false,
    };
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
  // console.log(req.params["section"]);
  const news = await News.find({
    sections: { $all: [req.params["section"]] },
    // paid:
    //   req.isAuthenticated() && req.user.subscirbed
    //     ? { $in: [true, false] }
    //     : false,
  })
    .sort({
      _id: -1,
    })
    .limit(parseInt(req.params.count));
  // console.log(news);

  if (news) {
    return res.json({ err: false, success: true, data: news });
  } else {
    return res.status(404).json({
      err: true,
      success: false,
      message: "No news found with this id",
    });
  }
};

const getAllNews = async (req, res) => {
  try {
    const news = await News.find({
      // paid:
      //   req.isAuthenticated() && req.user.subscirbed
      //     ? { $in: [true, false] }
      //     : false,
    })
      .sort({
        _id: -1,
      })
      .limit(parseInt(req.params.count));

    const xdata = news;
    if (news) {
      const newNews = xdata.map((data) => {
        if (
          data._doc.paid == true &&
          req.isAuthenticated() &&
          req.user.subscirbed
        ) {
          return data;
        }

        if (data._doc.paid == true) {
          Object.keys(data._doc).forEach(function (itm) {
            if (itm === "video_link" || itm == "full_story")
              delete data._doc[itm];
          });
        }
        return data;
      });
      return res.json({ err: false, success: true, data: newNews });
    } else {
      return res
        .status(404)
        .json({ err: true, success: false, message: "Failed! No news found" });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: true, seccess: false, message: "Something went wrong" });
  }
};

module.exports = {
  getNewsSection,
  getAllNews,
  addNews,
};
