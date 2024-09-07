// Question 1
// function Sum(a,b){
//   let result = a + b
//   return result 
// } 
// let result = Sum(2,3)
// console.log(result)
// es6 arrow function 
// const add =()=> {}
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

// const reverseArray =(arr)=>{
// let revarr = []
// for(let i = arr.length-1 ; i >= 0 ; i-- ){
//    revarr.push(arr[i])
// }
// return revarr
// }
// let result =reverseArray([1 , 2 , 3 , 9 , 6])
// console.log(result);


// const Factorial = (n)=>{
//    let result = 1 
//    if(n<0) return "this number of factorail is not exist"
//    if(n===1 || n===0  ) return 1
//    for(let i = 2; i<=n; i++){
//       // result = result * i
//       result *= i 
//    } 
//    return result 
// }
// recursive  LOGIC
// const Factorial = (n)=>{
//    if(n<0) return "this number of factorial is not exist"
//    if(n===1 || n===0  ) return 1
//    return n * Factorial(n-1)
// }

// const result = Factorial(5)
// console.log(result)



// primitve and non primitve 
let a =  1
let b = a 
b= b+1
console.log(b,a)

let arrs = ["1","2","3","4"]
let barrs = arrs 
barrs.push("5")
console.log(arrs)
console.log(barrs)



