import cloudinary from "../config/cloudinary.config.js";

// ======================
// Upload Single Image
// ======================
export const UploadSingleImage = async (image, storageLocation) => {
  try {
    const b64 = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: storageLocation,
      width: 500,
      height: 500,
      crop: "fill",
    });

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// ======================
// Upload Multiple Images
// ======================
export const uploadMultipleImages = async (images, storageLocation) => {
  try {
    const uploadMultiple = images.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      const dataURI = `data:${image.mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: storageLocation,
        width: 500,
        height: 500,
        crop: "fill",
      });

      return {
        url: result.secure_url,
        publicId: result.public_id,
      };
    });

    return await Promise.all(uploadMultiple);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// ======================
// Delete Single Image
// ======================
export const deleteSingleImage = async (image) => {
  try {
    await cloudinary.uploader.destroy(image.publicId);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// ======================
// Delete Multiple Images
// ======================
export const deleteMultipleImages = async (images) => {
  try {
    const deleteMultiple = images.map(async (image) => {
      await cloudinary.uploader.destroy(image.publicId);
    });

    await Promise.all(deleteMultiple);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
