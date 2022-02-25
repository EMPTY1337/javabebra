let students = [
{'id': 1,'name': 'Дима', 'surname': 'а' },
{'id': 2,'name': 'Олег', 'surname': 'п' },
{'id': 3,'name': 'Данил', 'surname': 'р' },
{'id': 4,'name': 'Платина', 'surname': 'Ф' }

]
let current = 0

function load_student(id){
	document.getElementById('name').value = students[id].name
	document.getElementById('surname').value = students[id].surname
}

function next(){
if (current < students.length){
	load_student(current)
	current++
	console.log(current)
}
if  (current === students.length){
	document.getElementById('btn_next').disabled = true
}
}
function previous(){
if (current < students.length){
	current--
	load_student(current)
	console.log(current)
}
if  (current === 0){
	document.getElementById('btn_prev').disabled = true
}
}
