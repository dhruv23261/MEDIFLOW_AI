// imports
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";




const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://yourdomain.com"
  ],
  credentials: true,
}));
// connect DB
connectDB();

// routes
app.get("/", (req, res) => {
  res.send("hello");
});

// server
app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});
