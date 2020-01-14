/*Chris Schultz
schultz_a05a.js
Info 2124 WW
Thoendel
01-13-2020*/

//all steps of req 3a
let toDo = []; //req 3a, declare using literal syntax
toDo.push("Do my laundry"); //req 3a step i, adding value 1
toDo.push("Do my homework"); //req 3a step i, adding value 2
toDo.push("Feed the dog"); //req 3a step i, adding value 3 
toDo.push("Clean the basement") //req 3a step i, adding value 4

console.log(toDo.join(", ")); //req 3a step ii, says to "write out" I assume this means print; using join as an array method during printing

toDo.unshift("Donate clothes"); //req 3a step iii, adding an element to front of array

console.log(toDo.join(", ")); //req 3a step iv, says to "write out" I assume this means print; using join as an array method involved

toDo.reverse(); //req3a step v, reversing
toDo.sort(); //req3a step v, sorting
console.log(toDo.join(", ")); //req 3a step v, outputting, using join as my array method

let x = `It is ${toDo.includes("x")} that my ToDo list includes the letter 'x'.`;
console.log(x); //using includes to look for value of 'x' per req 3a step vi, using template literal to store & print answer

//begin req 3b
let grocery = new Array(); //req 3b, new array for groceries
grocery.push("Milk")
grocery.push("Cheerios")
grocery.push("Cheese")
grocery.push("Peanut Butter")
grocery.push("Maple Syrup")
grocery.push("Popcorn"); //req 3b, step i, add 6 grocery items 

console.log(grocery.join(", ")); //req 3b step ii, using join in a log statement to output list separated by commas

grocery.shift(); //req 3b step iii, remove first item from to do list

console.log(grocery.join(", ")); //req 3b step iii, using join in a log statement to ouptut list separated by commas

grocery.splice(3,0,"Tortillas","Eggs"); //step 3b step iv, add items to middle of list

console.log(grocery.join(", ")); //req 3b step v, output list, using join as my array method


//end program