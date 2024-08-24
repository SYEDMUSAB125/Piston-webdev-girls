// Question 1
// function Sum(a,b){
//   let result = a + b
//   return result 
// } 
// let result = Sum(2,3)
// console.log(result)
// es6 arrow function 
// const add = ()=>{}
// const Sum = (a,b)=>{
// let result = a + b
// return result
// }
// let result = Sum(2,3)
// console.log(result)
// let result;
// const Sum = (a,b)=> result = a+b
// result = Sum(2,3)
// console.log(result)


// Question 2  
// const isEven = (num)=>{
// if(num % 2 === 0 ){
//     return true
// }else{
//     return false

// }
// }
// let value =  isEven(7)
// console.log(value)

//Question no 3
// const maxOfThree=(a , b , c)=>{
// if(a > b & a>c){
//     return a
// }else if(b > a  &  b >c){
//     return b
// }else {
//     return c
// }
// }








// const maxOfThree = (a,b,c)=>{
//  let max =  Math.max(a,b,c)
//  return max
// }
// let check = maxOfThree(4 , 7 , 2)
// console.log(check);



// function reverseArray(arr){
//    let reverseValue=arr.reverse()
//    return reverseValue
// // }
// let result =reverseArray([1 , 2 ,3])
// console.log(result);

const reverseArray =(arr)=>{
let revarr = []
for(let i = arr.length-1 ; i >= 0 ; i-- ){
   revarr.push(arr[i])
}
return revarr
}
let result =reverseArray([1 , 2 , 3 , 9 , 6])
console.log(result);
