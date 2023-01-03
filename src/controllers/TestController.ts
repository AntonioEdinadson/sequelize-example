import { Request, Response } from "express";

import sequelize from "../config/database";

export const get = async (req: Request, res: Response) => {

    try {

        

    } catch (error) {
        res.json({
            code: 500,
            error: error
        });
    } finally {
        sequelize.close();
    }

};