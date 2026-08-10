export const GetAddressBook = async (req, res, next) => {
  try {
    const currentUser = req.user;

    const user = await User.findById(currentUser._id).select("addresses");

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      message: "Address book fetched successfully",
      data: user.addresses,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const AddAddress = async (req, res, next) => {
  try {
    const { fullName, phone, address, city, state, pincode } = req.body;

    if (!fullName || !phone || !address || !city || !state || !pincode) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const currentUser = req.user;

    const user = await User.findById(currentUser._id);

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    user.addresses.push({
      fullName,
      phone,
      address,
      city,
      state,
      pincode,
    });

    await user.save();

    res.status(201).json({
      message: "Address added successfully",
      data: user.addresses,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const UpdateAddress = async (req, res, next) => {
  try {
    const { addressId } = req.params;

    const { fullName, phone, address, city, state, pincode } = req.body;

    if (!fullName || !phone || !address || !city || !state || !pincode) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const currentUser = req.user;

    const user = await User.findById(currentUser._id);

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    const addressData = user.addresses.id(addressId);

    if (!addressData) {
      const error = new Error("Address not found");
      error.statusCode = 404;
      return next(error);
    }

    addressData.fullName = fullName;
    addressData.phone = phone;
    addressData.address = address;
    addressData.city = city;
    addressData.state = state;
    addressData.pincode = pincode;

    await user.save();

    res.status(200).json({
      message: "Address updated successfully",
      data: user.addresses,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const DeleteAddress = async (req, res, next) => {
  try {
    const { addressId } = req.params;

    const currentUser = req.user;

    const user = await User.findById(currentUser._id);

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    const addressData = user.addresses.id(addressId);

    if (!addressData) {
      const error = new Error("Address not found");
      error.statusCode = 404;
      return next(error);
    }

    addressData.deleteOne();

    await user.save();

    res.status(200).json({
      message: "Address deleted successfully",
      data: user.addresses,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
