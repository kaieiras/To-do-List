import 'dotenv/config'

import express from 'express'
import session from 'express-session';
const app = express();

import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import flash from 'connect-flash'

import routes from './routes.js';
import helmet from 'helmet';
// import csrf from 'csurf';

mongoose.connect(process.env.CONNECTIONSTRING)
 .then(() => {
    console.log('Conectei a base de dados')
    app.emit('pronto')
 })
 .catch(e => console.log(e));

const sessionOptions = session({
  secret: 'testeClienteConexao',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})

app.use(express.urlencoded({ extended: true}));
app.use(helmet());
app.use(express.json());
app.use(sessionOptions);

//app.use(csrf());
app.use(routes)

app.on('pronto', () => {
   app.listen(3000, () => {
     console.log('Acessar http://localhost:3000')
     console.log('Servidor executando na porta 3000')
   })
})