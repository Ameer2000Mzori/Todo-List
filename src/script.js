// selecting elements
var addTodoBtn = document.getElementsByClassName("add-Todo-Btn")[0];
var textInput = document.getElementsByClassName("text-Input")[0];
var todosCardsWrap = document.getElementsByClassName("todos-Cards-Wrap")[0];
// global variables
// functions
var addTodo = function () {
    console.log("hallo world");
};
// event lisnters
addTodoBtn.addEventListener("click", addTodo);
