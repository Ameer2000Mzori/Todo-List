// selecting elements
var addTodoBtn = document.getElementsByClassName("add-Todo-Btn")[0];
var textInput = document.getElementsByClassName("text-Input")[0];
var todosCardsWrap = document.getElementsByClassName("todos-Cards-Wrap")[0];
// global variables
var textObj = [
    {
        text: "need to dance",
    },
    {
        text: "need to red",
    },
    {
        text: "need to car",
    },
];
// functions
var addTodo = function () {
    // creating elements
    var todoCard = document.createElement("div");
    todoCard.classList.add("todo-Card");
    var textTodo = document.createElement("h3");
    textTodo.classList.add("text-Todo");
    textTodo.textContent = "".concat(textInput.value);
    todoCard.appendChild(textTodo);
    var deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.classList.add("delete-Todo-Btn");
    deleteTodoBtn.textContent = "DELETE";
    todoCard.appendChild(deleteTodoBtn);
    todosCardsWrap.prepend(todoCard);
    // our delete button event :
    deleteTodoBtn.addEventListener("click", function () {
        if (todoCard) {
            todoCard.remove();
        }
    });
};
// event lisnters
addTodoBtn.addEventListener("click", addTodo);
// html loop up tree:
// <div class="todo-Card">
//   <h3 class="text-Todo">
//     hallo world im ameerhallo world im ameerhallo world im ameer hallo world im
//     ameerhallo world im ameerhallo world im ameer hallo world im ameerhallo
//     world im ameerhallo world im ameer
//   </h3>
//   <button class="delete-Todo-Btn">DELETE</button>
// </div>;
