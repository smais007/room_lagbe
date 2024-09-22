import express from "express";
import {
  login,
  logout,
  signup,
  checkAuth,
  social,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/check-auth", checkAuth);

router.post("/signup", signup);
router.post("/social", social);
router.post("/login", login);
router.post("/logout", logout);

export default router;
