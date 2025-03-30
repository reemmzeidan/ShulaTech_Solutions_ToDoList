document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Function to create a new task element
  function createTaskElement(taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Event listener for checkbox to toggle completion
    checkbox.addEventListener('change', function() {
      taskItem.classList.toggle('completed', checkbox.checked);
    });

    // Event listener for delete button to remove task
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(taskItem);
    });
  }

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      createTaskElement(taskText);
      taskInput.value = '';
      taskInput.focus();
    }
  }

  // Event listener for adding task on button click
  addTaskBtn.addEventListener('click', addTask);

  // Event listener for adding task on Enter key press
  taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
