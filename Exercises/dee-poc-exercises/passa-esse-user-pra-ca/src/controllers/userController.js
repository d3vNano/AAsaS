import db from "../db.js";
import userSchema from "../schemas/userSchema.js";

export async function getUser(req, res) {
    const user = res.locals.user;

    res.send(user);
}

export async function updateUser(req, res) {
    const newUser = req.body;

    const validation = userSchema.validate(newUser);
    if (validation.error) {
        return res.sendStatus(422);
    }

    const session = res.locals.session;

    await db.collection("users").updateOne(
        {
            _id: session.userId,
        },
        {
            $set: newUser,
        }
    );

    res.sendStatus(200);
}

export async function deleteUser(req, res) {
    const session = res.locals.session;

    await db.collection("users").deleteOne({ _id: session.userId });

    res.sendStatus(200);
}
