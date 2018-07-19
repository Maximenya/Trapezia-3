import { default as User } from "../models/User";
import { Request, Response } from "express";



export default class UserController {

    public addNewUser(req: Request, res: Response) {
        const newUser = new User(req.body);

        newUser.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getUsers(_req: Request, res: Response) {
        User.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

}