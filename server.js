const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.use(cors());
app.use(express.json());



mongoose.connect(uri)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    console.log(("📂 Using DB:", mongoose.connection.name));
  })
  .catch(err => console.error("❌ DB connection error:", err));

app.use('/api/admin', adminRoutes);



const PORT = 5000;


app.listen(5000, () => console.log("Server running on port 5000"));
