import { Request, Response } from "express";

function testGet(req: Request, res: Response) {
    res.send("testGet");
}

export { testGet };
