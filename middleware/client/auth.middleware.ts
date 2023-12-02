import {Request, Response, NextFunction} from 'express';
import User from '../../models/user.model';
export const requireAuth = async (req: Request, res: Response, next: NextFunction)
    : Promise<void> => {

    if(!req.cookies.tokenUser) {
        res.redirect(`/user/login`);
        return;
    }
    next();
    
}