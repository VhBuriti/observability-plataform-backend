import express from "express";
import cors from "cors";
import fs from 'fs';

const app = express();
const port = 8080;
const router = express.Router();

app.use(cors()); // enable CORS
app.use(express.json());
app.use(router);

router.post("/api/event", (req, res) => {
  console.log(req.body);

  fs.writeFile("./data/events.json", JSON.stringify(req.body), (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  res.status(200).json({ message: "Event received successfully" });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
