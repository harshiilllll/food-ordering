import { getAllMenuItems, getMenuItemById } from "../controllers/menu.js";

import express from "express";
const router = express.Router();

router.get("/menu", getAllMenuItems);
router.get("/menu/:id", getMenuItemById);

export default router;
