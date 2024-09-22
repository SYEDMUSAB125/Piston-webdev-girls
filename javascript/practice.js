// • Question: Given an array of numbers, write a for loop that prints each number in the array.
// const myArr = [23,34,45,5,6,7]
// // console.log(myArr[i])
// for(let i = 0 ; i < myArr.length ; i++     ){
//  console.log(myArr[i])
// }

const Total = ( myArr )=>{

   const sum = myArr.reduce((prev,current)=>{
          return  prev + current 
   },0)

   return sum 
}
const myArr = [10,20,30,40,50 ] 
var bill =  Total( myArr )
console.log( bill )

