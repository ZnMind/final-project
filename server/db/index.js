import * as mysql from "mysql";

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: "final_project",
    user: 'Team2',
    password: 'Team2rules'
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
}

import address from "./address";

export default {
    address
}