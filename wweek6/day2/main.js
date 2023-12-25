// 🌟 Exercise 1: Timer

// Part I

//1 

function myfunction(){
alert ('hello world')
}

setTimeout (myfunction,2000)
    
// Part II
function myfunction () {
let p = document.createElement('p')
document.getElementById('container').appendChild(p)
}

setTimeout (myfunction, 2000)


// Part III

let count = 0;
function myfunction(){
    let p = document.createElement('p') 
    p.innerHTML = 'hello world';
    document.getElementById('container').appendChild(p)
    count++
if (count ===5) {
    clearInterval(interval)
}

}

let interval = setInterval(myfunction, 2000)





