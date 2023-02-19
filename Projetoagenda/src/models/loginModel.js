const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: {type: String, required: true}
});

const loginModel = mongoose.model('login', loginSchema);

class login {
  constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();
    if(this.errors.lenght > 0) return;
    this.user = await loginModel.findOne({email: this.body.email});

    if(!this.user) {
      this.errors.push('Usuario não existe');
      return
    }

    if(!bcryptjs.compareSync(this.body.password, this.user.password))
    {this.errors.push('senha invalida')
    this.user = null;
    return;
    };
  }

  async register(){
    this.valida();
    if(this.errors.lenght > 0) return;

    await this.userExists();

    if(this.errors.lenght > 0) return;

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
    try{
      this.user = await loginModel.create(this.body);} catch(e) {console.log(e)};
  }

  async userExists() {
    this.user = await loginModel.findOne({email: this.body.email});

    if (this.user) this.errors.push('Usuario já existe.');
  }

  valida() {
    this.cleanUp();
    //validação 
    //o email precisa ser valido
    if(!validator.isEmail(this.body.email)){this.errors.push('E-mail inválido');
  }

    //a senha precisa ter entre 3 e 50 caracteres
    if(this.body.password.length < 3 || this.body.password.length > 50){
      this.errors.push('A senha precisa ter no minimo 3 caracteres e menos de 50');
    }
  }

  cleanUp(){
    for(const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    }
  }
}

module.exports = login;