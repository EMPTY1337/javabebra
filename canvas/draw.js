function draw(){
	let canvas = document.getElementById('canva');
	 let ctx = canvas.getContext('2d');

   ctx.moveTo(200,100);
// команда рисования линии с координатами конца линии
ctx.lineTo(500,200);
ctx.strokeStyle = "pink"; //цвет линии
ctx.lineWidth = "10"; //толщина линии
ctx.stroke(); // обводка линии
	}