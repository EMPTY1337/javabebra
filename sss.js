function show() {
let a = parseInt(document.getElementById('a').value)
let div = document.getElementById('mes')
if(a < 10) {
div.innerHTML="<h1>Bbl pe6eHok</h1>"
}
else if (a < 17) {
div.innerHTML='<h1>Bbl ghoul</h1>'
}
else if (a < 65) {
div.innerHTML='<h1> Bbl ded inside</h1>'
}
else {
	div.innerHTML='<h1>Bbl cTapblu</h1>'
}

}