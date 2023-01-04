import { Request, Response } from "express";

import { initModels } from "../models/init-models";
import sequelize from "../config/database";

export const get = async (req: Request, res: Response) => {

    try {

        const data = await initModels(sequelize).multisoftware_users.findAll();
        res.json({
            code: 200,
            data
        });

    } catch (error:any) {
        res.json({
            code: 500,
            error: error.message
        });
    }
};