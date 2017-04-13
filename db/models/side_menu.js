var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
    name: String,
    url: String
});

module.exports = mongoose.model('SideMenu', MenuSchema);