import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from 'bcrypt';

const LoginSchema = new mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, require: true},
});
const LoginModel = mongoose.model('Login', LoginSchema);

export class Login{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }
    async login(){
       this.valida();
       if(this.errors.length > 0) return;
       this.user = await LoginModel.findOne({email: this.body.email});
       if(!this.user) {
         this.errors.push('Usuário ou senha inválidos.')
         return;
       };
       if(!bcryptjs.compareSync(this.body.password, this.user.password)){
        this.errors.push('Usuário ou senha inválidos.');
        this.user = null
        return;
       };
    }
    async register() {
        this.valida();
        if(this.errors.length > 0) return;
        await this.userExists();
        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSalt();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);
        this.user = await LoginModel.create(this.body);
    };

    async userExists() {
        this.cleanUp(this.body);
        this.user= await LoginModel.findOne({email: this.body.email,});
        if(this.user) this.errors.push('Este e-mail já esta sendo utilizado.');
    }

    valida(body){
        this.cleanUp(body);
        if(!validator.isEmail(this.body.email)) this.errors.push('e-mail inválido')
        if(this.body.password.length < 3 || this.body.password.length >= 50){
          this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
        };
    }
    cleanUp(body){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
        }}
        this.body = { email: this.body.email, password: this.body.password,};
    }
}
