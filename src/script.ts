// selecting elements
const addTodoBtn = document.getElementsByClassName("add-Todo-Btn")[0];
const textInput = document.getElementsByClassName("text-Input")[0];
const todosCardsWrap = document.getElementsByClassName("todos-Cards-Wrap")[0];

// global variables

// functions
const addTodo = () => {
  console.log("hallo world");
};

// event lisnters
addTodoBtn.addEventListener("click", addTodo);
