document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value;

    if (taskText !== '') {
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.classList.add('task');

        // Crear el texto de la tarea
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        // Crear el botón de eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('delete-btn');

        // Agregar evento para eliminar la tarea
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        // Añadir el texto y el botón al elemento de la lista
        li.appendChild(taskContent);
        li.appendChild(deleteBtn);

        // Agregar la nueva tarea a la lista
        document.getElementById('taskList').appendChild(li);

        // Limpiar el campo de entrada
        taskInput.value = '';
    }
});
