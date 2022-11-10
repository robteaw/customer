const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mongooses = require("mongoose");
const CustomerModel = require("./models/Customer");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://robteaw:su262n9h5OnVfBgs@cluster0.zjmrpcr.mongodb.net/collection"
);

app.get("/getCustomers", (req, res) => {
  CustomerModel.field({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createCustomer", async (req, res) => {
  const customer = req.body;
  const newCustomer = new CustomerModel(customer);
  await newCustomer.save();
  res.json(customer);
});

app.put("/update", async (req, res) => {
  const newName = req.body.newName;
  const id = req.body.id;

  try {
    await CustomerModel.findById(id, (error, customerToUpdate) => {
      customerToUpdate.name = String(newName);
      customerToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await CustomerModel.findByIdAndRemove(id).exec();
  res.send("itemdeleted");
});

app.listen(3001, () => {
  console.log("Server running!");
});
