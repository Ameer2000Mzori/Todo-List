// selecting elements
const addTodoBtn = document.getElementsByClassName("add-Todo-Btn")[0];
const textInput: any = document.getElementsByClassName("text-Input")[0];
const todosCardsWrap = document.getElementsByClassName("todos-Cards-Wrap")[0];

// global variables
let textObj = [
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
const addTodo = () => {
  // creating elements
  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-Card");

  const textTodo = document.createElement("h3");
  textTodo.classList.add("text-Todo");
  textTodo.textContent = `${textInput.value}`;
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
