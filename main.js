let toDos = [];
let addButton=document.getElementById("addButton").addEventListener("click", addItem);

// add item function
// TODO: clear text box after user submits
function addItem(){
	let task = document.getElementById("toDoItem").value;
	toDos.push(task);
}

// delete item function
// cross off item function