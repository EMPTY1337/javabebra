let arr = []
function generate() {
	let n = parseInt(document.getElementById('a').value)
	for (let i = 0; i < n; i++) {
		arr[i] = Math.floor(Math.random()*10)
	}
	print()
}

function zerofill() {
let n = parseInt(document.getElementById('a').value)
for(let i = 0; i < n; i++) {
	arr[i] = 0
	}
	print()
}
function print(){
let n = parseInt(document.getElementById('a').value)
let div = document.getElementById('mes')
div.innerHTML = ''
for(let i = 0; i < n; i++) {
	div.innerHTML += arr[i] + ' '
}

}
function summ() {
let n = parseInt(document.getElementById('a').value)
let s = 0
for(let i = 0; i < n; i++) {
	s += arr[i]
	}
	let div = document.getElementById('mes')
	div.innerHTML = 'Сумма элементов = ' + s
}