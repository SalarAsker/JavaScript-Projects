// get element in the program
const btn = document.getElementById('addbtn');
// listen for click event, and call function AddTodo
btn.addEventListener('click', AddTodo);

// adding todos
function AddTodo(){
    // user input
    const userInput = document.getElementById('todo-text').value;
    // get ul
    let todoList = document.querySelector('ul');
    // validate unserinput
    if(userInput !=''){

        // create li element
        let todo = document.createElement('li'); // <li> </li>
        todo.innerHTML = `${userInput}<div id="delete-item">Delete</div>`;
        // append ul
        todoList.appendChild(todo);       
        // empty the textbox
        document.getElementById('todo-text').value='';
        // put focus in the textbox
        document.getElementById('todo-text').focus();


    }else{
        alert('Please provide a todo!');
    }
}
// removing todos
const todoListClick = document.getElementById('todo-list');
// listen for click event and call function RemoveTodo
todoListClick.addEventListener('click', RemoveTodo);

function RemoveTodo(e){

    let removeLi = e.target.parentNode;
    // remove li form the ul list
    let todoList = document.getElementById('todo-list');
    todoList.removeChild(removeLi);
    
    // console.log(removeLi);

}


