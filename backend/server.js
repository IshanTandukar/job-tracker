require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const applicationRoutes = require("./routes/applicationRouter");

connectDB();

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://job-tracker-sand-sigma.vercel.app",
    ],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use("/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("API Running from Express");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
