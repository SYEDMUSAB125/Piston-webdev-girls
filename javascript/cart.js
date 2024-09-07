let head =document.getElementById("head")
let btncart= document.getElementById("cart")
let btnres = document.getElementById("reset")

console.log(btncart)


let count = 1
btncart.addEventListener("click",()=>{

// head.innerText= "Buy items count "
// template literal
head.innerText = ` Buy Items ${count} `
count++     
// count + 1 
})
btnres.addEventListener("click",()=>{

    head.innerText= "Buy items "+ 0
    count = 0



    })