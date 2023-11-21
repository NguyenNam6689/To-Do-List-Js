const openPopup = (type) => {
    if (type === 'add') {
      document.getElementById('popup').style.display = 'block';
    }
  }
  
const closePopup = () => {
    document.getElementById('popup').style.display = 'none';
  }

const saveTodo = () => {
    const todoText = document.getElementById('todo-text').value;
    const todoList = document.getElementById('todo-list');
    const newTodoItem = document.createElement('li');
    newTodoItem.className = 'todo-item';
    newTodoItem.innerHTML = `<span>${todoText}</span>
      <div>
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger" onClick="handleDeleteTodo(this)">Delete</button>
      </div>`;
    todoList.appendChild(newTodoItem);
    document.getElementById('popup').style.display = 'none';
    document.getElementById('todo-text').value = '';

  }
const handleDeleteTodo = (element) => {
    element.parentElement.parentElement.remove();
}
