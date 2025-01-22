import { Login } from "../models/LoginModel.js";
import { toast } from "react-toastify";

export function index(req, res ) {
    if(req.session.user) return res.redirect('/');
    return res.redirect('/login')
}

export async function register(req, res){
    try{
        const login = new Login(req.body);
        await login.register();
        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(function() {
                return res.redirect('index')
            })
        }
        toast.success('Usuário criado com sucesso.');
        req.session.save(function(){
            return res.redirect('index')
        })
        return;
    }catch(e) {
        console.log(e)
        return res.redirect('includes/404');
    }
}


export async function login(req, res){
    try{
        const login = new Login(req.body);
        await login.login();
        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(function(){
                  return res.redirect('index');
               });
            return;
        }

        toast.success('Você entrou no sistema');
        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('/');
        });
    }catch(e){
        console.log(e)
        return res.render('')
    }
}

export function logout(req, res){
    req.session.destroy();
    res.redirect('back');
}