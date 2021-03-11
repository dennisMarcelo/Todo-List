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

function buttonRemoveAllTask() {
  const buttonRemoveAll = document.querySelector('#apaga-tudo');
  buttonRemoveAll.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach((e) => {
      e.remove();
    });
  });
}

function buttonRemoveTaskComplite() {
  const buttonRemoveComplete = document.querySelector('#remover-finalizados');
  buttonRemoveComplete.addEventListener('click', () => {
    const classComplite = document.querySelectorAll('.completed');
    classComplite.forEach((e) => {
      e.remove();
    });
  });
}

function getArrayList() {
  const arraList = [];
  const list = document.querySelectorAll('#lista-tarefas li');
  list.forEach((e) => {
    const objLi = {
      tagName: e.tagName,
      class: e.className,
      text: e.innerText,
    };
    arraList.push(objLi);
  });

  return arraList;
}

function buttonSaveList() {
  const buttonSave = document.getElementById('salvar-tarefas');

  buttonSave.addEventListener('click', () => {
    const arraList = getArrayList();

    localStorage.removeItem('list');
    localStorage.setItem('list', JSON.stringify(arraList));
  });
}

function recoverArrayList() {
  const arrayList = JSON.parse(localStorage.getItem('list'));
  arrayList.forEach((e) => {
    const li = document.createElement('li');
    li.innerText = e.text;
    li.classList.add(e.class);
    olListTarefas.appendChild(li);
  });
}

inputTaskSistem();
addLiBackground();
dbClickMarkList();
buttonRemoveAllTask();
buttonRemoveTaskComplite();
buttonSaveList();
recoverArrayList();
