const express = require("express");

const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 0;
const app = express();
const connectDB = require("./config/db");

app.use(express.json());
connectDB();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.use("/api/teachers", require("./routes/teacherRoute"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
