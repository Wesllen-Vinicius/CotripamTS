import cors from "cors";
import express from "express";
const userRoutes = require("./routes/userRoute");
const unidadeRoutes = require("./routes/unidadeRoute");
const abateRoutes = require("./routes/abateRoute");
let app = express();
let helmet = require("helmet");
app.use(helmet.hidePoweredBy());
app.disable("x-powered-by");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/users", userRoutes);
app.use("/abates", abateRoutes);
app.use("/unidades", unidadeRoutes);

app.listen(4500, () =>
  console.log("REST API Server Iniciado: http://localhost:4500")
);
