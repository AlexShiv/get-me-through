let mongoose = require('mongoose');

// mongodb+srv://aleksey:<password>@cluster0-ca8gj.azure.mongodb.net/test?retryWrites=true&w=majority
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/GetMeThrough', {useMongoClient: true});

module.exports = {mongoose};