require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// MongoDB Connection
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected ✅"))
    .catch(err => console.error("MongoDB Connection Error ❌:", err.message));
} else {
  console.warn("⚠️ MONGO_URI is not set. Messages will be emailed, but not saved to MongoDB.");
}

app.get("/", (req, res) => {
  res.send("Backend working ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});