import express from "express";
import multer from "multer";
import { EditUserProfile } from "../controllers/user.controller.js";
import { AuthProtect } from "../middlewares/auth.middlewares.js";

const upload = multer();
const router = express.Router();

router.put("/edit-profile", AuthProtect, EditUserProfile);

export default router;
