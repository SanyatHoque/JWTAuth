import mongoose from "mongoose";

const userSchema = mongoose.Schema();
const Program = mongoose.model("Program", userSchema);

export default Program;
