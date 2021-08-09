import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      
    },
    lastname: {
      type: String,
      
    },
    preferredname: {
      type: String,
      
    },
    status: {
      type: String,
      
    },
    room: {
      type: String,
      
    },
    levelofcare: {
      type: String,
      
    },
    ambulation: {
      type: String,
      
    },
    birthdate: {
      type: String,
      
    },
    moveindate: {
      type: String,
      
    },
    ID: {
      type: String,
      
    },
    author: {
      type: String,
      
    },
  },
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
