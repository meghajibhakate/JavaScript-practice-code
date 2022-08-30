// switch case------------------------------------------------------------
// let user1 = parseInt(prompt("enter first number"))
// let user2 = parseInt(prompt("enter second number"))
// let operator=prompt("enter operator(+,-,*,/")
// switch (operator) {
//     case "+":
//         total = user1 + user2;
//         console.log(total)
//         break
//     case "-":
//         total = user1 - user2;
//         console.log(total)
//         break
//     case "*":
//         total = user1 * user2;
//         console.log(total)
//         break
//     case "/":
//         total = user1 / user2;
//         console.log(total)
//         break
//         default:
//         console.log("invalid operator")
// }


// function me Arrys  ka sum----------------------------------------------

// let number = [1,2,3,4,5];
// function sumofArray(a) {
//     let sum=0;
//     for (let object of a) {
//         sum+=object;
//     }
//     return sum
//   }
//    console.log(sumofArray(number));



// using for loop------------------------------------------------------ 

// let number = [5,5,5,5,1,2];
// let a = [1,2,3,3]
//    function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i += 1) {
//       sum += array[i];
//     }
//     return sum;
//   }
//   console.log(sumArray(a));





// Circumference --------------------------------------------------------

// let user = parseInt(prompt("enter number"))
// function Circumference(r) {
//   return (2 * 3.14 * r)
// }
// console.log(Circumference(user))




// Areaofcircle example-------------------------------------------------------------
// let user = parseInt(prompt("enter number"))
// function Areaofcircle(r) {
//   return (3.14 * r * r)
// }
// console.log(Areaofcircle(user))





// let user = parseInt(prompt("enter number"))
// function circle(r) {
//   console.log("Circumference" + 2 * 3.14 * r)
//   console.log("Areaofcircle" + 3.14 * r * r)
// }
// circle(user)



// arrow function---------------------------------------------------------------
// let myFunction = (a, b) => a * b;
// document.getElementById("demo").innerHTML = myFunction(4, 5);






// callback function example------------------------------------------------------------
// function greet(name, myfunction) {
//   console.log("hello world");
//   myfunction(name);
// }
// function sayName(name) {
//   console.log("Hello" + " " + name);
// }
// greet("john", sayName);



// Arrow function example------------------------------------------------------------
// let  myFunction = (a, b) => a + b;
//  console.log (myFunction(4, 6));



// Arrow function example------------------------------------------------------------
// let greet = (name, myfunction) => { 
//   console.log("hello world"); 
//   myfunction(name) 
// }
// let sayName = name => console.log("Hello" + " " + name);
// greet("john", sayName);




// Array sum using arrow function-------------------------------------------- 
// let num = [1, 2, 3, 4, 5]
// let num2 = [1, 2, 3, 4]
// let average = (abc) => {
//   let sum = 0;
//   for (let i = 0; i < abc.length; i += 1) {
//     sum += abc[i];
//   }
//   return sum / abc.length
// }
// console.log(average(num))
// console.log(average(num2))

// ------------------------------------------------------------------------------
// var arr=[1,2,3,4,5]
// arr.forEach(element=>console.log(element)
// )

// var arr = [1, 2, 3, 4, 5]
// let sum = 0;
// arr.forEach(function(element) {
//   sum += element;
// });

// console.log(sum
//   );


// var ages = [21, 19, 23, 24, 20, 22];
// var num = [1, 2, 3, 4, 5, 6];

// ------------------------------------------------------------------------------
// let sum = 0;
// let average = 0
// function add(arr) {
//   arr.forEach(element => {
//     sum = sum + element;
//     average = sum / arr.length
//   });
//   console.log(average);
// }
// add(ages);



//  FOR EACH---------------------------------------------------------------------
// let sum = 0;
// let average = 0;
// ages.forEach(element => {
//   sum = sum + element;
// });
// average = sum / ages.length
// console.log(average);

// ------------------------------------------------------------------------------
// var obj = {
//   fname: 'John',
//   age : 21
// };
// let key1 = 'fname'
// // console.log(obj.fname)
// // console.log(obj.key1)
// // console.log(obj[key1])

// ------------------------------------------------------------------------------
// for (abc in obj){
//   // console.log(abc)
//   console.log(obj[abc])
//   console.log(obj.abc)
// }
// -----------------------------------------------------------------------------
// console.log('name' in person); //  true
// console.log('age' in person); //  false


// Object questions-------------------------------------------------------------

// var salaries = {                      
//   John: 3000,
//   alex: 5000,
//   bob: 7000                        
// }
//using for loop ---------------------------------------------------------------

// var sum = 0;
// for (x in  salaries) {
//   sum += salaries[x];

// }
// console.log(sum)

///In function-------------------------------------------------------------------

// function sumOfObj (a){
//   var sum = 0;
//   for (x in  salaries) {
//     sum += salaries[x];

//   }
//   console.log(sum)
// }
// sumOfObj (salaries)


// 2 Que-------------------------------------------------------------------------

// var user = parseInt(prompt("please enter number :-"))
// while (user < 20) {
//   if (user % 2 == 0) {
//     console.log("user :- " + user)
//   } else if (user <= 0 && user % 3==0) {
//     alert("please add only positive number")
//   }
//   user = user + 1
// }


// 3 Que-------------------------------------------------------------------------
