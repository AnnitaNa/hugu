import { UserService } from "../services/user.service";
import { Request, Response } from "express";

const userService = new UserService();

export class UserController {
    getAll = async(req: Request, res: Response) => {
        try {
            let filter = req.query;
            let user = await userService.getAll(filter);
            
            return res.json(user);
        }
        catch (e) {
            return res.status(500).json(e);
        }
    };

    getById = async(req: Request, res: Response) => {
        try {
          
            let {id} = req.params;
            let user = await userService.getById(id);

            return res.json(user);
        }
        catch (e) {
            return res.status(500).json(e);
        }
        
    };

    register = async(req: Request, res: Response) => {
        try {
            let fields = req.body;
            let user = await userService.register(fields);

            return res.json(user);
        }
        catch (e) {
            return res.status(500).json(e);
        }
        
    };

    update = async(req: Request, res: Response) => {
        try {
            let {id} = req.params;
            let fields = req.body;
            let user = await userService.update(id, fields);

            return res.json(user);
        }
        catch (e) {
            return res.status(500).json(e);
        }
        
    };

    delete = async(req: Request, res: Response) => {
        try {
            let {id} = req.params;
            let user = await userService.delete(id);

            return res.json(user);
        }
        catch (e) {
            return res.status(500).json(e);
        }
        
    };
}