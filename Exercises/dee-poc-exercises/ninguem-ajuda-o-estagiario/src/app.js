import express from "express";

import connection from "./database/database.js";

const app = express();
app.use(express.json());

app.get("/products/:id", async (req, res) => {
    try {
        //     // buscando o produto
        //     const product = await connection.query(
        //         `
        //   SELECT * FROM products WHERE id=$1
        // `,
        //         [req.params.id]
        //     );

        //     if (!product.rows[0]) {
        //         return res.sendStatus(404);
        //     }

        //     // buscando a categoria do produto
        //     const category = await connection.query(
        //         `
        //   SELECT * FROM categories WHERE id=$1
        // `,
        //         [product.rows[0].categoryId]
        //     );

        //     // inserindo a propriedade categoryName no produto
        //     product.rows[0].categoryName = category.rows[0].name;

        const product = await connection.query(
            `
            SELECT
              products.*,
              categories.id
                AS "categoryId",
              categories.name
                AS "categoryName"
            FROM
              products
            JOIN
              categories
            ON
              products."categoryId"=categories.id
            WHERE
              products.id=$1
            `,
            [req.params.id]
        );
        res.send(product.rows[0]);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

app.get("/products", async (req, res) => {
    try {
        // // buscando todos os produtos
        // const products = await connection.query(
        //   `SELECT * FROM products`
        // );

        // // iterando em todos os produtos obtidos
        // for (let i = 0; i < products.rows.length; i++) {
        //   const product = products.rows[i];

        //   // buscando a categoria do produto
        //   const category = await connection.query(`
        //     SELECT * FROM categories WHERE id=$1
        //   `, [product.categoryId]);

        //   // inserindo no produto o nome da categoria obtida
        //   product.categoryName = category.rows[0].name;
        // }

        const products = await connection.query(`
    SELECT
      products.*,
      categories.id
        AS "categoryId",
      categories.name
        AS "categoryName"
    FROM
      products
    JOIN
      categories
    ON
      products."categoryId"=categories.id
    `);

        res.send(products.rows);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

app.listen(4000, () => {
    console.log("Server is listening on port 4000.");
});
