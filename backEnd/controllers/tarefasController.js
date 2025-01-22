import { json } from "express";
import { Tarefas } from "../models/TarefasModel.js";

// Rota inicial
export function index(req, res) {
    res.json({ title: 'Olá! Esta é a rota home.' });
}

// Rota para buscar todas as tarefas
export async function getTasks(req, res) {
    try {
        const tarefa = new Tarefas();
        const tarefas = await tarefa.buscatarefas();
        return res.status(200).json({ tarefas });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao buscar tarefas.' });
    }
}

// Rota para criar uma nova tarefa
export async function criaTarefas(req, res) {
    try {
        const tarefa = new Tarefas(req.body);
        await tarefa.criaTarefa();

        // Verifica se houve erros no modelo
        if (tarefa.errors.length > 0) {
            return res.status(400).json({
                message: 'Erro ao criar tarefa.',
                errors: tarefa.errors,
            });
        }

        return res.status(201).json({
            message: 'Tarefa criada com sucesso!',
            tarefa: tarefa.tarefa,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro interno no servidor.' });
    }
}