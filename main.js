let toDos = [];
let addButton = document.getElementById("addButton").addEventListener("click", addItem, false);
let newToDo;

// add item function
function addItem(e){
		let task = document.getElementById("toDoItem").value;
		toDos.push(task);
		e.preventDefault();
		
		let title = document.getElementById("title");
		newToDo = document.createElement("li")
		newToDo.addEventListener("click", crossOffItem, false);
		
		newToDo.addEventListener("hover", function(){
			newToDo.style.cusor = "pointer";
		});

		newToDo.classList.add("listItem");
		
		//this feels like duplicated work
		title.appendChild(newToDo);
		newToDo.innerText = task;
		
		document.getElementById("toDoItem").value ="";
	}

// cross off item function
// TODO: this function only crosses off the last task added, even if you click on a different one
function crossOffItem(){
	newToDo.classList.add("finishedTask");
}

// delete item function