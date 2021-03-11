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

function clearClassSelect() {
  const li = document.querySelectorAll('li');
  li.forEach((e) => {
    if (e.matches('.BackgroundSelected')) {
      e.classList.remove('BackgroundSelected');
    }
  });
}

function addLiBackground() {
  olListTarefas.addEventListener('click', (e) => {
    const li = e.target;
    if (li.matches('.task')) {
      clearClassSelect();
      li.classList.add('BackgroundSelected');
    }
  });
}

function dbClickMarkList() {
  olListTarefas.addEventListener('dblclick', (e) => {
    const li = e.target;
    if (!(li.matches('.completed'))) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });
}

inputTaskSistem();
addLiBackground();
dbClickMarkList();
