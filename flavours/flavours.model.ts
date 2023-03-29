import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  taste: String,
  valoration: Number,
});

module.exports = mongoose.model("flavour", schema);
