import express from "express";
import cors from "cors";
import heatmapRoutes from "./routes/heatmap.js";


const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use("/heatmap", heatmapRoutes);



app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
