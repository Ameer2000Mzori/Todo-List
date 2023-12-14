// selecting elements
var addTodoBtn = document.getElementsByClassName("add-Todo-Btn")[0];
var textInput = document.getElementsByClassName("text-Input")[0];
var todosCardsWrap = document.getElementsByClassName("todos-Cards-Wrap")[0];
// global variables
// getting data from local storage if there is :
var textObj = JSON.parse(localStorage.getItem("textObj")) || [];
// functions
var addTodo = function () {
    // creating elements
    textObj.forEach(function (data) {
        var todoCard = document.createElement("div");
        todoCard.classList.add("todo-Card");
        var textTodo = document.createElement("h3");
        textTodo.classList.add("text-Todo");
        textTodo.textContent = "".concat(data.text);
        todoCard.appendChild(textTodo);
        var deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.classList.add("delete-Todo-Btn");
        deleteTodoBtn.textContent = "DELETE";
        todoCard.appendChild(deleteTodoBtn);
        todosCardsWrap.prepend(todoCard);
        // our delete button event :
        deleteTodoBtn.addEventListener("click", function (e) {
            var valText = e.target.parentElement.firstChild.textContent;
            deleteTodo(valText);
        });
    });
    textInput.textContent = "";
    textInput.value = "";
};
// add new todo functions
var addNewTodo = function () {
    var textVal = textInput.value;
    if (textVal !== "") {
        // new arry
        var newArry = {
            text: textVal,
        };
        textObj.push(newArry);
        console.log(textObj);
        localStorage.setItem("textObj", JSON.stringify(textObj));
        todosCardsWrap.innerHTML = "";
        addTodo();
    }
    else {
        console.log("please enter something");
    }
};
// delete todo element
var deleteTodo = function (valText) {
    textObj = textObj.filter(function (el) {
        return el.text !== valText;
    });
    console.log(textObj);
    localStorage.setItem("textObj", JSON.stringify(textObj));
    todosCardsWrap.innerHTML = "";
    addTodo();
};
// event lisnters
addTodoBtn.addEventListener("click", addNewTodo);
addTodo();
