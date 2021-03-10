function inputSistemTask() {
  const inputcriarTarefa = document.getElementById('criar-tarefa');
  const olListTarefas = document.getElementById('lista-tarefas');

  inputcriarTarefa.addEventListener('click', () => {
    const inputAreaText = document.getElementById('texto-tarefa');
    const text = inputAreaText.value;
    const li = document.createElement('li');
    if (text !== '') {
      li.innerText = text;
      olListTarefas.appendChild(li);
      inputAreaText.value = '';
    }
    inputAreaText.focus();
  });
}

inputSistemTask();
