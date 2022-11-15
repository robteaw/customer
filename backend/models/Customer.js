const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  image: { type: String, required: true },
});

const CustomerModel = mongoose.model("customers", CustomerSchema);
module.exports = CustomerModel;
