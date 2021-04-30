var big=document.getElementById("container")
var box=document.getElementById("inside");
var position=0;
 var animate=setInterval(move,100);
 function stop(){
    clearInterval(animate)
}



function move(){
    
    position += 10;
    console.log(position)
    box.style.left=position+'px';
    if(position==460){
        stop()
    }
    
    }
    
    var big2=document.getElementById("container2")
    var box2=document.getElementById("inside2");
    var position2=0;
     var animate2=setInterval(move2,100);
     function stop2(){
        clearInterval(animate2)
    }
    
    
    
    function move2(){
        
        position2 += 10;
        console.log(position2)
        box2.style.top=position2+'px';
        if(position2==180){
            stop2()
        }
        
        }

    
        
    window.onload = function(){
        var canvas = document.getElementById("bounce");
        var ctx = canvas.getContext("2d");
        var x = 0;
        var y = 0;
        var dx = 1;
        var dy = -1;
    
        draw();
    
        function draw(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.rect(x, y, 20, 10);
            ctx.fillStyle = "yellow";
            ctx.fill();
            ctx.closePath();
    
            if(x + dx > canvas.width-10){
                dx = -dx;
            }
            if(x + dx < 0){
                dx = -dx;
            }
            if(y + dy > canvas.height-10){
                dy = -dy;
            }
            if(y + dy < 0){
                dy = -dy;
            }
            x += dx;
            y += dy;
        }
        setInterval(draw, 10)
    }
        
      

