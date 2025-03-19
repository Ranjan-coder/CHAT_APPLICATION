const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email:{
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password:{
    type: String,
    required: [true,"Password is required"],
  },
  firstname:{
    type: String,
    required: false
  },
  lastname:{
    type: String,
    required: false
  },
  image:{
    type: String,
    required: false
  },
  color:{
    type: Number,
    required: false
  },
  profilesetup:{
    type: Boolean,
    default: false
  }
})


userSchema.pre("save", async function (next) {
  if (this.isModified('password')) {  // Ensure password is hashed only when it's modified
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
  }
  next(); // Move to the next middleware or save
});

module.exports = mongoose.model('User', userSchema);
