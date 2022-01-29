// selectors
const todoInput=document.querySelector(".todo-input") ;
const todoButton=document.querySelector(".todo-button") ;
const todoList=document.querySelector(".todo-list") ;
const filterOption=document.querySelector(".filter-todo");

// Event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
// functions
function addTodo(event){
    event.preventDefault();//prevents form from submitting
    // console.log("hello");
    //todo div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // checkmarked button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // trashed button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to ul
    todoList.appendChild(todoDiv);
    //clear the input value from todo in order to take new input
    todoInput.value="";
}

function deleteCheck(e){
    console.log(e.target);
    const item=e.target;
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        //Animation or better say transition
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle('completed');   
    }
}

function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display='flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display='none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
                break;
        }
    });
}