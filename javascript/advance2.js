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
 const  apiFetch = async ()=> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const res = await  response.json();

      for (const items of res){
        const result = items.title
        console.log(items.title)
         let show = document.getElementById("api")
         show.innerText = result
     }
     
    
    } catch (error) {
      console.error(error.message);
    }
  }
apiFetch()



