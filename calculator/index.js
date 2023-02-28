function criapessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        get nomecompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //setter 
        set nomecompleto(valor) {
          //console.log(valor)  
          valor = valor.split(' ');
          this.nome = valor.shift();
          this.sobrenome= valor.join();
          console.log(valor);
        },
        fala: function (assunto) {
            return `${nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        //get = getter, ele é usado apenas para obter um valor, fingindo ser um atributo
        get imc () {
            const indice = this.peso / (this.altura **2); 
            return indice.toFixed(2);
        }
    };
}

const p1= criapessoa('Luiz', 'Otavio', 1.8, 80);
p1.nomecompleto= 'Nikolas Shiro Nakamura'
console.log(p1.imc);
console.log(p1.nomecompleto)
console.log(p1.nome)
console.log(p1.sobrenome)