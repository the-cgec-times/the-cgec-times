const express = require("express");
const cors = require("cors");
const app = express();
const pageRoutes = require('./routes/pageRoute');
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/api",pageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
