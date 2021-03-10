const olListTarefas = document.getElementById('lista-tarefas');

function inputTaskSistem() {
  const inputcriarTarefa = document.getElementById('criar-tarefa');

  inputcriarTarefa.addEventListener('click', () => {
    const inputAreaText = document.getElementById('texto-tarefa');
    const text = inputAreaText.value;
    const li = document.createElement('li');
    if (text !== '') {
      li.innerText = text;
      li.className = 'task';
      olListTarefas.appendChild(li);
      inputAreaText.value = '';
    }
    inputAreaText.focus();
  });
}

function addLiBackground() {
  olListTarefas.addEventListener('click', (e) => {
    const li = e.target;
    if (li.className === 'task') {
      li.style.backgroundColor = 'rgb(128,128,128)';
    }
  });
}

inputTaskSistem();
addLiBackground();
