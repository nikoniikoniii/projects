
import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdcrct = document.querySelector('.qtd-crct');
const chknumeros = document.querySelector('.chk-numeros');
const chkmaiusculas = document.querySelector('.chk-maiusculas');
const chkminusculas = document.querySelector('.chk-minusculas');
const chksimbolos = document.querySelector('.chk-simbolos');
const gerarsenha = document.querySelector('.gerar-senha');

export default () => {
    addEventListener('click', ()=> {
        senhaGerada.innerHTML = gera();
    })
}

function gera() {
    const senha = geraSenha(
        qtdcrct.value, 
        chkmaiusculas.checked,
        chkminusculas.checked,
        chknumeros.checked,
        chksimbolos.checked,
    );

    return senha || 'Nada selecionado';
}