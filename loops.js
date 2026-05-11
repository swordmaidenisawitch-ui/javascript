//ask user for the number 
//prints the number from one to the x number user entered 
//print frizzwhen multiples of 3
//print buzz when multiples of 5



const prompt = require("prompt-sync")();
//print frizzbuzz when multiples of 3and5

let input =Number(prompt("Print a Digit " ))//() has to be number, if not number then Try again 
if ( Number.isNaN(input) ){
  console.log("A number is required");
} else {                                  // prints number from one till the input 
    for ( let i =1 ; i <= input; i++){   // for (begin; condition; step) {// ... loop body ...

              console.log(i) 
    if (i % 3==0 && i% 5 ==0  ){
   console.log("FrizzBuzz")
    }  
    // prints frzz
    else if (i % 3 ==0) { 
      console.log("frizz")
      // prints buzz when multiple of 5 
    }    else   if (i % 5 == 0){
      console.log("buzz")  
    } else{
      console.log(i)
    }             
             
}
























/*for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3

    }*/

//while loop
/*let i = 0;
    while (i < 3){  // shows 0, then 1, then 2  if the condition is true then execute the body
  console.log( i ); //>, greater than basically the open triangle part side is grater
  i++;*/
}
/*let i = 0;
do {
  console.log( i ); // execute the body if the condition is truth
  i++;
} while (i < 3);*/