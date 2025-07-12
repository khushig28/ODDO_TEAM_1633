const express = require("express");
const User = require("../models/User");
const Item = require("../models/Item");
const router = express.Router();

router.get("/dashboard-stats", async (req, res) => {
  try {
    const userCount = await User.countDocuments(); // ✅ Counts total users
    const itemCount = await Item.countDocuments(); // This will work once items are added
    res.json({ users: userCount, products: itemCount });
  } catch (err) {
    res.status(500).json({ error: "Error fetching dashboard stats" });
  }
});


module.exports = router;
