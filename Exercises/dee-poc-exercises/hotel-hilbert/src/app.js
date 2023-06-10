import express from "express";

import connection from "./database/database.js";

const app = express();
app.use(express.json());

app.get("/allocations", async (req, res) => {
    try {
        const allocations = await connection.query(`
      SELECT
        allocations.id, allocations."startDate", allocations."endDate",
        allocations."roomId", rooms.name AS "roomName",
        allocations."guestId", guests.name AS "guestName"
      FROM
        allocations
      JOIN
        rooms
      ON
        allocations."roomId" = rooms.id 
      JOIN
        guests
      ON
        allocations."guestId" = guests.id
    `);

        res.send(allocations.rows);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

app.listen(4000, () => {
    console.log("Server is listening on port 4000.");
});
