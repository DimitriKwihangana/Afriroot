const express = require("express");
const mongoose = require("mongoose");
const auth = require("./Routes/auth");
const bodyParser = require("body-parser");

const app = express();
const connectDb = () => {
  mongoose
    .connect(
      "mongodb+srv://dimitrikwihangana:JGwNjbedKgCJQhX3@cluster0.6dkoxmf.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err);
      process.exit(1);
    });
};

connectDb();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
const authRoutes = require("./routes/auth");

app.use("/auth", authRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
