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
    if(position==450){
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
        if(position2==130){
            stop2()
        }
        
        }
        
      

