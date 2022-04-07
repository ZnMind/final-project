import * as express from 'express';
const router = express.Router();

import db from '../db';

router.get("/:state?", async (req, res) => {
    try {
        let state = req.params.state;
        if (state) {
            const getSen = await db.address.oneSen(state);
            res.json(getSen);
        } else {
            const getSen = await db.address.allSen();
            res.json(getSen);
        }
    } catch(e) {
        console.log(e);
    }
})

router.post("/", async (req, res) => {
    try {
        let body = req.body;
        console.log(body);
        let dbRes = await db.address.insertSen(body.id, body.name, body.state, body.photo, body.contact_form, body.party, body.phone);
        res.status(200).json(dbRes);
    } catch(e) {
        console.log(e);
    }
})

export default router;