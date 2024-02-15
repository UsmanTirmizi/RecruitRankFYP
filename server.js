import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoutes.js";

//configure env
dotenv.config();

//DB connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Dbconnection sucessfull"))
    .catch((err) => {
        console.log(err);
    });


//rest object
const app = express();

//middelwares
app.use(express.json());

//routes
app.use("/api/auth",authRoute);
//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});