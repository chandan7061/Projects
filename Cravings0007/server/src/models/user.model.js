import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      url: {
        type: String,
        required: true,
      },
      publicId: {
        type: String,
      },
    },
    addresses: [
      {
        fullName: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        pincode: {
          type: String,
          required: true,
        },
      },
    ],
    userType: {
      type: String,
      enum: ["admin", "customer", "rider", "restaurant"],
      required: true,
      default: "customer",
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("user", UserSchema);

export default User;
