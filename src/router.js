import express from "express";
const router = express.Router();

router.all("/", (req, res, next) => {
  console.log("got it hit");
  res.send("ok");
});

export default router;
