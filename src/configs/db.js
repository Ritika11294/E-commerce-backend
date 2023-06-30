const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ritika:nIcna3AVlglBs1fO@cluster0.lcegw.mongodb.net/e-commerce?retryWrites=true&w=majority"
  );
};

module.exports = connect;
