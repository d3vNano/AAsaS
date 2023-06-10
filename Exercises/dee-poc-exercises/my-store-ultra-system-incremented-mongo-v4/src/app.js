import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import joi from "joi";

const productsSchema = joi.object({
    name: joi.string().required(),
    sku: joi.number().integer().required(),
    price: joi.number().required(),
});

const customerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
});

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect(() => {
    db = mongoClient.db("my_store_ultra_system_incremented");
});

const app = express();
app.use(express.json());

/* Products Routes */
app.get("/products", async (req, res) => {
    try {
        const products = await db.collection("products").find().toArray();
        res.send(products);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.get("/products/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const product = await db
            .collection("products")
            .findOne({ _id: new ObjectId(id) });
        if (!product) {
            return res.sendStatus(404);
        }

        res.send(product);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.post("/products", async (req, res) => {
    const product = req.body;

    const { error } = productsSchema.validate(product, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        res.status(422).send(errors);
        return;
    }

    try {
        await db.collection("products").insertOne(product);
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.delete("/products/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await db.collection("products").deleteOne({ _id: new ObjectId(id) });

        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

/* Customers Routes */
app.get("/customers", async (req, res) => {
    try {
        const customers = await db.collection("customers").find().toArray();
        res.send(customers);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

app.get("/customers/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const customer = await db
            .collection("customers")
            .findOne({ _id: new ObjectId(id) });

        if (!customer) {
            return res.sendStatus(404);
        }

        res.send(customer);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.post("/customers", async (req, res) => {
    const customer = req.body;

    const { error } = customerSchema.validate(customer, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        res.status(422).send(errors);
        return;
    }
    try {
        await db.collection("customers").insertOne(customer);

        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.delete("/customers/:id", async (req, res) => {
    try {
        const id = req.params.id;

        await db.collection("customers").deleteOne({ _id: new ObjectId(id) });

        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.listen(5000, () => {
    console.log("Server is litening on port 5000.");
});