function criaCalculadora () {
    return {
        //atribatos/variaveis vem aqui 
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBTN();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 13) {
                    this.realizaconta();
                }
            });
        },

        realizaconta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('conta invalida')
                    return
                }
                this.display.value = String(conta);
            } catch (e){
                alert('conta invalida')
                    return
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaum() {
            this.display.value = this.display.value.slice(0, -1);
        },

       
        //metodos vem abaixo daqui

        cliqueBTN() {
            document.addEventListener('click', function (e) {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay (el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };
                if(el.classList.contains('btn-del')) {
                    this.apagaum();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaconta();
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();