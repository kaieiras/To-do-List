import { Login } from "../models/LoginModel.js";

export function index(req, res) {
    if (req.session.user) {
        return res.redirect('/');
    }
    return res.redirect('/login');
}

// Registro de novo usuário
export async function register(req, res) {
    try {
        const login = new Login(req.body);
        await login.register();
        // Caso haja erros, redirecionar ou renderizar com mensagens de erro
        if (login.errors.length > 0) {
            return res.status(400).json({
                message: 'Erro no registro.',
                errors: login.errors,
            });
        }
        req.session.user = login.user; // Salva o usuário na sessão
        req.session.save(() => {
            res.status(200).json({
                message: 'Login bem-sucedido!',
                user: login.user,
            });
        });
    } catch (e) {
        console.error(e);
        return res.status(500).redirect('/includes/404');
    }
}

// Login de usuário
export async function login(req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        // Caso haja erros, redirecionar ou renderizar com mensagens de erro
        if (login.errors.length > 0) {
            return res.status(400).json({
                message: 'Erro no login.',
                errors: login.errors,
            });
        }

        // Salva o usuário na sessão após login bem-sucedido
        req.session.user = login.user;
        return res.status(200).json({
            message: 'Login bem-sucedido!',
            user: login.user,
        });
    } catch (e) {
        console.error(e);
        return res.status(500).redirect('/includes/404');
    }
}

// Logout de usuário
export function logout(req, res) {
    req.session.destroy(); // Remove a sessão do usuário
    return res.redirect('back'); // Redireciona para a página anterior
}
