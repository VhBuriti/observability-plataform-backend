import { Router } from "express";
import fs, { write } from 'fs';

async function writeFile(text) {
    try {
        await fs.appendFileSync("data/heatmap.json", JSON.stringify(text));

        return 'File written sucessefully'
    } catch (error) {
        console.log(error);
    }
}




const router = Router();

router.post("/", (req, res) => {
    const { page, events } = req.body;


    writeFile({ page, events })
    
})


export default router;