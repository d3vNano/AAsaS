import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "root",
    database: "exercicio_join_encadeado_7a7ce1c6",
});

export default connection;
