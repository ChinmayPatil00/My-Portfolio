require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: ["https://my-portfolio-theta-sooty-14.vercel.app", "http://localhost:3000", "http://localhost:5173"]
}));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend working ✅");
});

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});