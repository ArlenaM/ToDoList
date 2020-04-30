let toDos = [];
let addButton = document.getElementById("addButton").addEventListener("click", addItem, false);
let newToDo;

// add item function
// TODO: clear text box after user submits

function addItem(e){
		let task = document.getElementById("toDoItem").value;
		toDos.push(task);
		e.preventDefault();
		
		let title = document.getElementById("title");
		newToDo = document.createElement("li")
		newToDo.addEventListener("click", crossOffItem, false);
		newToDo.classList.add("listItem");
		
		//this feels like duplicated work
		title.appendChild(newToDo);
		newToDo.innerText = task;
	}

// delete item function
// cross off item function

function crossOffItem(e){
	newToDo.classList.add("finishedTask");
}