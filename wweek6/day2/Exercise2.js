function myMove () {

    let ele = document.getElementById('animate')
    
    let pos = 0;
    let interval = setInterval(frame,10)
    
    function frame () {
    if(pos>= 350 ){
    clearInterval(interval)
    } else{
        pos++;
    ele.style.left =pos + 'px'
    }
    
     }
    }
    