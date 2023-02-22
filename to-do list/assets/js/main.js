const input= document.querySelector('.input-novatarefa')
const add= document.querySelector('.add')
const tarefas= document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li');
    return li;
}

//função que faz o codigo entender que enter é para adicionar tarefa

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!input.value) return;
    criatarefa(input.value)
    }
})

function limpainput() {
    input.value= '';
    input.focus();
}

function botaoApagar(li) {
    li.innerHTML += ' ';
    const botaoapagar = document.createElement('button');
    botaoapagar.innerText = 'Apagar'
    botaoapagar.setAttribute('class', 'apagar')
    li.appendChild(botaoapagar)
}

function criatarefa(textoinput) {
    const li = criaLi() //<-- esse li diferente do li acima, é de outro escopo
    li.innerHTML = textoinput;
    tarefas.appendChild(li);
    limpainput();
    botaoApagar(li);
    salvarTarefas ();
}

add.addEventListener('click', function(){
    if (!input.value) return;
    criatarefa(input.value)
})

//função que faz o botão apagar a tarefa adc
document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas ();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
  
    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }
  
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    console.log(tarefasJSON)
    localStorage.setItem('tarefas', tarefasJSON);
  }

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const tarefaslista = JSON.parse(tarefas);

    for (let tarefa of tarefaslista ) {
        criatarefa(tarefa);
    }
}

adicionaTarefasSalvas ()