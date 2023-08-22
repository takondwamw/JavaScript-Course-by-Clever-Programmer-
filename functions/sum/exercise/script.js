/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

let add = (a,b) => log(a + b);
  //Add let here


let sub = (a,b) => log(a - b);
  //Subtract let here


let div = (a,b) => log(a/b);
  //Divide let here

let mul = (a,b) => log(a*b)
  //Multiply function here


console.log('hello from the SUM exercise');
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
const log = (val) => console.log(val);