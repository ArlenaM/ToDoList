let toDos = [];
let addButton = document.getElementById("addButton").addEventListener("click", addItem, false);

// add item function
// TODO: clear text box after user submits

function addItem(e){
	{
		let task = document.getElementById("toDoItem").value;
		toDos.push(task);
		e.preventDefault();
		
		let title = document.getElementById("title");
		let newToDo = document.createElement("p");
		title.appendChild(newToDo);
		newToDo.innerText = task;
	}
}

// delete item function
// cross off item function