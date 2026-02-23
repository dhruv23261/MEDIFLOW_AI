const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const doctorModel = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone_number:{type:Number,required:true},
  }
);

docotrModel.methods.matchPassword = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};

doctorModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Doctor = mongoose.model("Doctor", doctorModel);
module.exports = Doctor;