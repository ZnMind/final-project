import * as mysql from "mysql";

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: "final_project",
    user: 'Team2',
    password: 'Team2rules'
});

/* connection.query('SELECT * FROM addresses WHERE id=2', (err, results) => {
    if (err) throw err;
    console.log(results);
}) */

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
}

import address from "./address";

//  this becomes db object in routes/chirps.js
export default {
    address
}