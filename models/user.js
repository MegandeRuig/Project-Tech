const { ServerDescriptionChangedEvent } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
});

module.exports = User = mongoose.model("user", userSchema);
