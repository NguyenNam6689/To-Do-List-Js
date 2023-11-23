const STATUS = {
  _ADD: "add",
  _EDIT: "edit",
  _ADD_NUM: -1,
}

const todos = [];

const openPopup = (action = STATUS._ADD,index = STATUS._ADD_NUM) => {
  const popup = document.getElementById('popup');
  const todoText = document.getElementById('todo-text');
  const popupTittle = document.getElementById('popup-title')
    if (action === "add") {
      popup.style.display = 'flex';
      popupTittle.innerText = "Add Todo";
      todo.value = '';

    } else {
      popup.style.display = 'flex';
      popupTittle.innerText = "Edit Todo";
      todoText.value = todos[index];
    }
  }
  
const closePopup = () => {
    document.getElementById('popup').style.display = 'none';
  }

const saveTodo = () => {
    const todoText = document.getElementById('todo-text').value;
    todos.push(todoText);
    handleRender();
    closePopup();
  }

const handleRender = () => {
  const todoList = document.getElementById('todo-list');
    todoList.innerHTML="";
    todos.forEach((todo,index) => {
        const newTodoItem = document.createElement('li');
        newTodoItem.className = 'todo-item';
        newTodoItem.innerHTML = `
        <span>${todo}</span>
        <div>
            <button class="btn btn-primary" onClick=openPopup('edit',${index})>Edit</button>
            <button class="btn btn-danger" onClick="handleDeleteTodo(${index})">Delete</button>
        </div>`;
        todoList.appendChild(newTodoItem);
    });
}

const handleDeleteTodo = (index) => {
  todos.splice(index, 1);
  handleRender();
}

handleRender();
