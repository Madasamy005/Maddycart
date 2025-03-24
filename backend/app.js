const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors=require('cors');
const connectDatabase=require('./config/ConnectDatabase')

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const app = express();

app.use(express.json());
app.use(cors());


// Import routes
const productRoutes = require("./routes/product");
const orders=require("./routes/order")

connectDatabase();

// Mount routes
app.use("/api/v1",productRoutes);
app.use("/api/v1",orders);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV}`);
});
