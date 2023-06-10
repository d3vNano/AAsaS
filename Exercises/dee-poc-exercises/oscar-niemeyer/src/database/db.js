import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
    console.log(chalk.bold.green("[MongoDB] Connected!"));
} catch (error) {
    console.log(chalk.bold.red(error.message));
}

const db = mongoClient.db("hub");

export default db;
