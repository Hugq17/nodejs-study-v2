import express from "express";
import bcryt from "bcrypt";
const router = express.Router();
import { User } from "../models/User.js";

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = User.find({ email });
  if (user) {
    return res.json({ message: "user already exists" });
  }

  const hashpassword = await bcryt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });

  await newUser.save();
  return res.json({ message: "record registered" });
});

export { router as UserRouter };
