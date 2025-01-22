import mongoose from "mongoose";

const TarefasSchema = new mongoose.Schema({
    titile: {type: String, require: true},
    description: {type: String, require: false, default: ''},
    isCompleted: {type: Boolean, default: false},
    date: {type: Date, default: Date.now},
})

const TarefasModel = mongoose.model('tarefas', TarefasSchema);

export class Tarefas {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.Tarefas = null
    }

    async buscatarefas() {
        const tarefas = await TarefasModel.find()
        .sort({criadoEm: -1});
        return tarefas
    }
}