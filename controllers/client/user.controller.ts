import {Request, Response} from "express";
import User from "../../models/user.model";
import md5 from 'md5';
import { generateRandomString } from "../../helper/generate";

//[GET]/users/register
export const register = async (req: Request, res:Response) => {
    res.render("client/pages/users/register.pug", {
        pageTitle: 'Trang đăng ký',
    }
    )
}
//[POST]/users/register
export const registerPost = async (req: Request, res:Response) => {
    const existEmail = await User.findOne({
        email: req.body.email
    });
    if(existEmail) {
        res.redirect("back");
        console.log("Email đã tồn tại");
        return;
    }
    req.body.password = md5(req.body.password);
    req.body.token = generateRandomString(30);
    const user = new User(req.body);
    await user.save();
    res.redirect("/user/login");
}
//[GET]/users/login
export const login = async (req: Request, res:Response) => {
    res.render("client/pages/users/login.pug", {
        pageTitle: 'Trang đăng nhập',
    }
    )
}
//[POST]/users/login
export const loginPost = async (req: Request, res:Response) => {
    const user = await User.findOne({
        email: req.body.email
    })
    if(!user) {
        console.log("User không tồn tại!");
        res.redirect('back');
        return;
    }
    if(md5(req.body.password ) != user.password ) {
        console.log("Sai mật khẩu!");
        res.redirect('back');
        return;
    }
    if(user.status == "inactive") {
        console.log("Tài khoản đang bị khóa!");
        res.redirect("back");
        return;
    }
    console.log("Đăng nhập thành công!");
    res.cookie("tokenUser", user.token);
    res.redirect("/topics");
}