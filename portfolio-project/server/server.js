require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const supabase = require("./supabaseClient");

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Supabase Status
if (supabase) {
  console.log("Database: Supabase configured ✅");
} else {
  console.warn("⚠️ Database: Supabase not configured (SUPABASE_URL / SUPABASE_KEY missing).");
}

app.get("/", (req, res) => {
  res.send("Backend working ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});