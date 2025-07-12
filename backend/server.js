const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth");



const app = express();
app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"));

// Routes
app.use("/api/auth", authRoutes);

// Server
app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));


const dashboardRoutes = require("./routes/dashboard");
app.use("/api", dashboardRoutes);
