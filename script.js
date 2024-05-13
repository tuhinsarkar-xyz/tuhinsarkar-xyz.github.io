
let counter = document.querySelector('h1');
let count = 

setInterval(()=>{

    counter.innerText = count;
    count++
    
    if(count) location.replace('https://tuhinsarkar.netlify.app')
    
},1000)