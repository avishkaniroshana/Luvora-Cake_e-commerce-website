import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";


const app = express();
//middleware
app.use(cors()); //enable CORS for incoming requests.
app.use(express.json()); //If a client sends JSON in the request body, automatically convert it into a JavaScript object.

//test route
app.get("/", (req, res) => {
    res.send("Luvora Cake API Running...");
});

app.use(
    "/api/auth",
    authRoutes,
);

export default app;