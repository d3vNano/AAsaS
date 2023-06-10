import express from "express";

import connection from "./database/database.js";

const app = express();
app.use(express.json());

app.get("/allocations", async (req, res) => {
    try {
        // busque o histórico de hospedagens, junto das informações do cliente e do quarto
        const allocations = await connection.query(`
    SELECT
      allocations.*,
      guests.name AS "guestName",
      rooms.name AS "roomName"
    FROM
      allocations
    JOIN
      guests
    ON
      allocations."guestId" = guests.id
    JOIN
      rooms
    ON
      allocations."roomId" = rooms.id
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
