const mongoose = require("mongoose");
const dbConnection = mongoose.connect("mongodb+srv://ritika:nIcna3AVlglBs1fO@cluster0.lcegw.mongodb.net/e-commerce")



module.exports = {dbConnection};
