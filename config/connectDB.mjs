import mongoose from "mongoose";

export function connectDB() {
  mongoose
    .connect("mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/users")
    .then(() => console.log("Connected!"));
}
