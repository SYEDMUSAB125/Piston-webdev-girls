// promise async await API 
// var prom = new Promise((resolve,reject)=>{
//  var success  = false

//  setTimeout(()=>{
//     success= true
//  } , 2000 )
 
// if(success){
//     resolve("function working correct ")
// }else{
//     reject(" function not runing perfectly ")
// }

// })


// prom 
// .then((res)=>{
//  console.log(`promise done ${res} `)
// })
// .catch((err)=>{
//  console.error(`Error ${err}`)
// })
//  !yes = no 
// axios 
 const  apiFetch = async ()=> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url);
      console.log(typeof(response))
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const res = await  response.json();
  
//  for in array for of object 
      for (const item of res){
        const result = item.title
        console.log(item.title)
         let show = document.getElementById("api")
         show.innerText = result
     }
     
    } catch (error) {
      console.error(error.message);
    }
  }


let btn = document.getElementById("btn")
let div = document.getElementById("api")
btn.addEventListener("click" ,()=>{

  apiFetch()
  div.className = "pos"
} )
