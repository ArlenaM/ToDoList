let toDos = [];
let addButton = document.getElementById("addButton").addEventListener("click", addItem, false);

// add item function
// TODO: clear text box after user submits

function addItem(e){
	{
		let task = document.getElementById("toDoItem").value;
		toDos.push(task);
		e.preventDefault();
		console.log(toDos);
	}
}

// delete item function
// cross off item function