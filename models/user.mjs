import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userScheme = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    minLength: 6,
  },
  workExperience: {
    type: Array(Object),
  },
  age: { type: Number },
  role: {
    type: String,
    default: "User",
    enum: ["Admin", "User"],
  },
});

const User = mongoose.model("user", userScheme); 

export default User;
