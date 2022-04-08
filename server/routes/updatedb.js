import * as express from 'express';
const router = express.Router();

import db from '../db';

router.get("/:state?", async (req, res) => {
    try {
        let state = req.params.state;
        if (state) {
            const getState = await db.address.oneState(state);
            res.json(getState);
        } else {
            const getState = await db.address.allState();
            res.json(getState);
        }
    } catch(e) {
        console.log(e);
    }
})

router.post("/", async (req, res) => {
    try {
        let body = req.body;
        console.log(body);
        let dbRes = await db.address.insertState(body.id, body.name, body.state, body.photo, body.url, body.party, body.phone, body.district);
        res.status(200).json(dbRes);
    } catch(e) {
        console.log(e);
    }
})


export default router;