const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(cors({ origin: "*" }));
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
const authRoutes = require("./Routes/authentication");

app.use("/auth", authRoutes);

const port = 5179;
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
