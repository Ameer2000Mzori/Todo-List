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
    deleteTodoBtn.addEventListener("click", () => {
      if (todoCard) {
        todoCard.remove();
      }
    });
  });
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

// event lisnters
addTodoBtn.addEventListener("click", addNewTodo);
addTodo();
// html loop up tree:

// <div class="todo-Card">
//   <h3 class="text-Todo">
//     hallo world im ameerhallo world im ameerhallo world im ameer hallo world im
//     ameerhallo world im ameerhallo world im ameer hallo world im ameerhallo
//     world im ameerhallo world im ameer
//   </h3>
//   <button class="delete-Todo-Btn">DELETE</button>
// </div>;
