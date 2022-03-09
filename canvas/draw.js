function draw(){
	
	 let canvas = document.getElementById('canva');
	 let ctx = canvas.getContext('2d');
	  ctx.beginPath();
	  ctx.moveTo(250,120);
      ctx.lineTo(50,100);
      ctx.lineTo(150,50);
      ctx.lineTo(250,120);
       ctx.fill();
	}