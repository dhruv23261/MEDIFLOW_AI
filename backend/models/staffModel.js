const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const staffModel=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
})


staffModel.methods.matchPassword = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};

staffModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Staff = mongoose.model("Staff", staffModel);
module.exports = Staff;