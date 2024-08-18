// **Convert Celsius to Fahrenheit:**
//    Write a function called `convertToFahrenheit` that takes a temperature in Celsius and returns the equivalent temperature in Fahrenheit using the formula `F = C * 9/5 + 32`.
// function convertToFahrenheit(temp){
//  var convertTemp  = temp * 9/5 + 32
//  return convertTemp
// }
// console.log(convertToFahrenheit(34))

// local variable vs global

//  function add(temp){
//     var a =9
//    return a

//  }
//  add(67)
//  console.log(a)
// switch  case
//     var dayOfWk = "Sat" 
// switch (dayOfWk) {
//   case "Sat":
//     console.log("lets go for hard work ");
//     break

//   case "Sun":
//     console.log("very very work");
//     break
//   case "Fri":
//     console.log("aram krlo  bhai ");
// break
//   default:
//     console.log("Shoot me now!");
// }


// While loop do while loop  
// for(initilization ; condition ; ioncrement){
    
// }
// while(condition){

// }
// let i=10
// while(i>1){
// console.log(i)
// // post decrement 
// i--
// }

// let i =2
// do{
//  console.log("one time tw run hoga ")
// }while(i===1)
// var a =9; 
// var a=10;reinitilaize
// let b=5;
// let b = 6; not reinitilize 
// let object{
    // key: value
// }
let student1={
    name:"musab",
    id : 34,
    department:"bano qabil",
    class:"web dev",
    assignments:["netflixassignm","layoutassignm"],
    greet: function (){
        console.log("thik hai samjh ara hai")
    }
}
// console.log(typeof(student1))
// console.log(student1.assignments[1])
// student1.greet()
// object destructring 
// const {name , id , greet} = student1
// console.log(name)    
// console.log(id)    
// greet()