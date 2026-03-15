import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const UserModel = mongoose.model('User', schema);
export default UserModel;