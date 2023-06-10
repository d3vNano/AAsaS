import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "root",
    database: "exercicio_join_b9908799",
});

export default connection;
