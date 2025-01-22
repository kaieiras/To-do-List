import { Router } from "express";
const routes = Router();

import * as loginController from './backEnd/controllers/loginController.js'
import * as tarefasController from './backEnd/controllers/tarefasController.js'

routes.get('/', tarefasController.getTasks)
routes.post('/', tarefasController.criaTarefas)

routes.post('/login/register', loginController.register);
routes.post('/login/login', loginController.login);

export default routes;