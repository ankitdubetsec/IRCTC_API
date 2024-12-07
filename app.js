const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { getUsers } = require("./database.js");
const {
  getAvailability,
  addTrain,
  bookingSeat,
} = require("./controllers/Trains.js");
const allowedOrigins = ["http://localhost:3000"];

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("not allowed by CORS"));
      }
    },
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Something went wrong",
    error: err.stack,
  });
});

// app.get("/", async (req, res) => {
//   try {
//     const user = await getUsers();
//     res.status(200).json({ user });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error adding trains", error: error.message });
//   }
// });

//middlewares
const Authentication = require("./middleware/authentication");

//routers
const authRouters = require("./routes/auth");
const trainRouters = require("./routes/train.js");
const bookingrouters = require("./routes/booking.js");

app.use(express.json());

app.use("/api/v1/auth", authRouters);
app.use("/api/v1/trains", Authentication, trainRouters);
app.use("/api/v1/booking", Authentication, bookingrouters);

const start = async () => {
  try {
    app.listen(5500, () => {
      console.log("server is listening to port 5500");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
