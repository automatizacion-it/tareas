import express from "express";
import morgan from 'morgan';
import authRoutes from "./routes/auth.routes.js";
const app = express();
//app.listen(3000)
//console.log('server on port',3000)
app.use(morgan('dev'));// usa morgan para mantener el servidor arriba
app.use(express.json());
app.use("/api", authRoutes);
export default app;
