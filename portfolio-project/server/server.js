
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose =  require('mongoose');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// THEN ROUTES
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

//Routes
app.get('/', (req, res) =>  {
    res.send("Backend is running 🚀");
});

app.get('/about', (req,res) => {
    res.send("This is my portfolio backend");
});

app.get('/name', (req, res) => {
    res.send("My name is Chinmay");
});

app.post('/api/contact', (req, res) => {
  console.log("🔥 SERVER DIRECT HIT");
  res.send("Server route working");
});

// start server
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});