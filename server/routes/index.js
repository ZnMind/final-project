import * as express from "express";
const router = express.Router();

import chirpsRouter from "./example";

// localhost:3000/api/chirps/
router.use("/example", chirpsRouter);

export default router;