// compiler or interpreter
// synch asynch
// setTimeout setinterval 
// callback 
// callback hell or pyramid of doom
// promise
// then catch  
// synchornous 
// console.log("hey i m 1  ")
// console.log("hey i m 2  ")
// console.log("hey i m 3  ")
// console.log("hey i m 4  ")
// async  
// setTimeout intey dair bad chalega
// setInterval har time k bad chalega 

// console.log("hey i m 1  ")
// console.log("hey i m 2  ")
// // time given in mili second 
// setTimeout(()=>{
//     console.log("hey im asynchronous")
// }, 5000 )
// console.log("hey i m 3  ")
// console.log("hey i m 4  ")

// const count = setInterval(()=>{
// console.log( "every 2 sec " )

// }, 2000)
// setTimeout(()=>{
//     clearInterval(count)
//     },5000)
function timer(){
    var sec = 10;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if(sec < 6  && sec >0){
            document.getElementById('safeTimerDisplay').className="safeTimer"
        }
        if (sec < 0) {
            clearInterval(timer);
            alert("game over")
        }
    }, 1000);
}
let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    timer()
})
