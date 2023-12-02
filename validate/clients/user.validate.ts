import {Request, Response, NextFunction } from "express";

export const registerPost = (req: Request, res: Response, next: NextFunction) => {
    if(!req.body.fullName) {
        res.redirect("back");
        console.log("Không được để trống trường fullName");
        return;
    }
    if(!req.body.email) {
        res.redirect("back");
        console.log("Không được để trống trường email");
        return;
    }
    if(!req.body.password) {
        res.redirect("back");
        console.log("Không được để trống trường password");
        return;
    }
    if(req.body.rePassword !== req.body.password) {
        console.log("Mật khẩu và nhập lại mật khẩu không trùng khớp");
        res.redirect("back");
        return;
    }
    next();
}