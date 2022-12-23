function addTodoItem(todo_item_title)
{

    let todo_item_list=document.querySelector(".todo_item_list");

    let todo_item=document.createElement("div");
    todo_item.className="todo_item";

    let todo_title=document.createElement("p");
    todo_title.innerText=todo_item_title;
    todo_title.className="todo_item_title";
    
    let todo_button=document.createElement("button");
    todo_button.className="todo_item_button";
    todo_button.innerText="Delete";
    
    todo_item.appendChild(todo_title);
    todo_item.appendChild(todo_button);

    todo_item_list.appendChild(todo_item);
}
addTodoItem("Learn React");