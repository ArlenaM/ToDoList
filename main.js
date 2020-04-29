let toDos = [];


// add item function
let addItem = function(){
	let task = document.getElementById("toDoItem");
	toDos.push(task);

	console.log(task);

	let addButton= document.getElementById("addButton").
	addButton.addEventlistener("click", addItem)
}

// delete item function
// cross off item function