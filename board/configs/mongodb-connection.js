const {MongoClient} = require("mongodb");
const uri = "mongodb+srv://ckdoli2:cdgkl28337@cluster0.eyvd0py.mongodb.net/?retryWrites=true";
//"mongodb+srv://ckdoli2:cdgkl28337@cluster0.eyvd0py.mongodb.net/?retryWrites=true&w=majority/test";
module.exports = function (callback) {
    return MongoClient.connect(uri,callback);
};