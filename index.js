const express = require("express");

const hotelsRouter = require("./routes/hotels.routes");

const app = express();

require("dotenv").config();

// middleware

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, DELETE, PUT, PATCH, UPDATE"
  );
  next();
});

app.use(express.json());

// routes

app.use("/api/data", hotelsRouter);

app.get("/", (req, res) => {
  res.send("START route");
});

// connection
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
