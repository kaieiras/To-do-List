import { Router } from "express";
const routes = Router();

import * as loginController from './controllers/loginController.js'
import * as tarefasController from './controllers/tarefasController.js'

//routes.get('/tarefas', tarefasController.index )

routes.post('/login/register', loginController.register);
routes.post('/login/login', loginController.login);

export default routes;