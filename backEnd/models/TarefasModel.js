import mongoose from "mongoose";

// Definição do esquema (schema) do Mongoose para tarefas
const TarefasSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Campo obrigatório
    description: { type: String, default: '' }, // Campo opcional com valor padrão
    isCompleted: { type: Boolean, default: false }, // Campo booleano com valor padrão
    date: { type: Date, default: Date.now }, // Data com valor padrão para a data atual
});

// Criação do modelo com base no esquema
const TarefasModel = mongoose.model('tarefas', TarefasSchema);

// Classe para gerenciar tarefas
export class Tarefas {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.tarefa = null; // Objeto para armazenar a tarefa atual
    }

    // Método para buscar todas as tarefas ordenadas por data (mais recente primeiro)
    async buscatarefas() {
        try {
            return await TarefasModel.find().sort({ date: -1 });
        } catch (err) {
            this.errors.push('Erro ao buscar tarefas.');
            console.error(err);
            return [];
        }
    }

    // Método para criar uma nova tarefa
    async criaTarefa() {
        try {
            this.valida(this.body); // Validação dos dados
            if (this.errors.length > 0) return; // Interrompe se houver erros
            this.tarefa = await TarefasModel.create(this.body); // Criação da tarefa no banco de dados
        } catch (err) {
            this.errors.push('Erro ao criar tarefa.');
            console.error(err);
        }
    }

    // Método para editar uma tarefa existente
    async taskEdit(id) {
        try {
            if (typeof id !== 'string') return; // Verifica se o ID é uma string
            this.valida(this.body); // Validação dos dados
            if (this.errors.length > 0) return; // Interrompe se houver erros
            this.tarefa = await TarefasModel.findByIdAndUpdate(id, this.body, { new: true }); // Atualização da tarefa
        } catch (err) {
            this.errors.push('Erro ao editar tarefa.');
            console.error(err);
        }
    }

    // Método para excluir uma tarefa
    async taskDelete(id) {
        try {
            if (typeof id !== 'string') return; // Verifica se o ID é uma string
            await TarefasModel.findOneAndDelete({ _id: id }); // Exclusão da tarefa
        } catch (err) {
            this.errors.push('Erro ao excluir tarefa.');
            console.error(err);
        }
    }

    // Método para validar os dados de entrada
    valida(body) {
        this.cleanUp(body); // Limpeza dos dados
        if (!this.body.title) this.errors.push('Título é obrigatório.');
        if (this.body.isCompleted != null && typeof this.body.isCompleted !== 'boolean') {
            this.errors.push('Valor inválido para "isCompleted".');
        }
        if (this.body.date && isNaN(new Date(this.body.date))) {
            this.errors.push('Data inválida.');
        }
    }

    // Método para limpar e organizar os dados de entrada
    cleanUp(body) {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string' && key !== 'isCompleted' && key !== 'date') {
                this.body[key] = ''; // Converte valores não string para string vazia, exceto isCompleted e date
            }
        }
        this.body = {
            title: body.title || '',
            description: body.description || '',
            isCompleted: typeof body.isCompleted === 'boolean' ? body.isCompleted : false,
            date: body.date || Date.now(),
        };
    }
}
