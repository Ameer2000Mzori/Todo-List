// selecting elements
const addTodoBtn = document.getElementsByClassName("add-Todo-Btn")[0];
const textInput: any = document.getElementsByClassName("text-Input")[0];
const todosCardsWrap = document.getElementsByClassName("todos-Cards-Wrap")[0];

// global variables
// getting data from local storage if there is :

let textObj = JSON.parse(localStorage.getItem("textObj")) || [];

// functions
const addTodo = () => {
  // creating elements
  textObj.forEach((data) => {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-Card");

    const textTodo = document.createElement("h3");
    textTodo.classList.add("text-Todo");
    textTodo.textContent = `${data.text}`;
    todoCard.appendChild(textTodo);

    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.classList.add("delete-Todo-Btn");
    deleteTodoBtn.textContent = `DELETE`;

    todoCard.appendChild(deleteTodoBtn);
    todosCardsWrap.prepend(todoCard);

    // our delete button event :
    deleteTodoBtn.addEventListener("click", (e) => {
      let valText = e.target.parentElement.firstChild.textContent;
      deleteTodo(valText);
    });
  });
  textInput.textContent = "";
  textInput.value = "";
};

// add new todo functions
const addNewTodo = () => {
  let textVal = textInput.value;

  // new arry
  let newArry = {
    text: textVal,
  };
  textObj.push(newArry);
  console.log(textObj);
  localStorage.setItem("textObj", JSON.stringify(textObj));
  todosCardsWrap.innerHTML = ``;
  addTodo();
};

// delete todo element
const deleteTodo = (valText) => {
  textObj = textObj.filter((el) => {
    return el.text !== valText;
  });
  console.log(textObj);
  localStorage.setItem("textObj", JSON.stringify(textObj));
  todosCardsWrap.innerHTML = ``;
  addTodo();
};

// event lisnters
addTodoBtn.addEventListener("click", addNewTodo);
addTodo();
