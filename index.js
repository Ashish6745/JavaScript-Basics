// -------------------------Basics of JavaScript ----------------------------------------------------


// javascript is language which is used to design website.
// Think of JS like this:: suppose human skeleton is HTML, HTML decides the design of body and CSS will style like make your hair black and provide color to the body and now its for JS to add functionality to body parts. This is the best example to understand JS.


// ## ways to add js in your html file
//1. using Script Tag :- Adding Script tag inside <head> section or  <body> section will allow you to write js code 
// example: 
        //  <head>
        //   <script>
        //     console.log('inside head').
        //   </script>
        // </head>
//2. second way is to make a seperate file for JS . It will help you to maintain code easily ex-Script.js
// And now add the this to html <script src='filepath/filename'></script>





 //  ----------------HELLO WORLD-----------------

// Hello world is the first step to start learning javascript

// 1.Printing Hello word in js

// console.log('HELLO WORLD')


//-----------------SEMI-COLONS--------------


//It is recommended to use semicolon after an statements but you can omit it in JS. JS is so friendly language 

//Note:- But you should always use semicolons after an statement it is the best practice to code.






//--------------COMMENTS----------------------

// Use of comments in code increase the readability of your code so it is always recommended to use comment in complex codes.

//1. Single-Line comment
// use // double slash to make single line comment

//2. Multi-line comment
 // use (/*) -----text-----------and end it with (/*)




 // ----------------VARIABLE-----------
 

 // A variable is used to store data.
 // example :- we use jar to store cookies in your home similar concepts works on variable.

 // use let keyword in JS to create an variable.

 //example:- let chocolate;


 // Assigning a value to the variable using  '=' assignment operator.
 // you can assign a string , number , boolean value to a variable in JS.

 // chocolate = 'Diary Milk'
 

 // or we can do it like this
  
 // let chocolate = 'Diary Milk'
   // console.log(chocolate) // Diary Milk 
   // you can reassign the value of variable 
   // example : let chocolate = 'Diary Milk'
   // chocolate = '5 Star'
   // console.log(chocolate)


// Var keyword :- Var is same as Let keyword  you can use it as well but in Modern JS it is recommended to use 'Let' keyword instead of 'Var'



// --------Rules to name an Variable in JS.--------------
//1. name should starts with letters(a,b,c.......z), digits(1,2,3...) or symbols [$] or [_] underscore.
//2. first digit must not be a digit.
// 3. no use of reserve keywords like let, return, if-else, while, try/catch, do-while etc.


//example : [let userName , let test123, let $ = 1, let _as = 34 ].


// incorrect variables name : [let 1z, let my-age]


// -------Const--------
// if you want to define a variable whose value is unchanging then use 'const'
// consts can be changed and redefined again.




// -----------Data Types in JS------------

// There are 8 basic  data types in JS.

//1. Number :- let n = 123;
//2. BigInt:- let n = 2^53 -1;
//3. String:- let str = 'HELLO', let name = 'cummins'
//4. Boolean :- let ageChecked = true. age is not checked
//5. Null:- It does not belongs to any type of value.
//6. undefined:- it means value is not defined yet.
//7. object :- It is used to store collections of data.
//8. symbols:- used to create unique identifiers for objects

// ----------Typeof Operator----------

// it returns the type of the operand and used to do quick check .

//example:-                   output
//1. typeof undefined -->     undefined
//2. typeof 0         -->     number
//3. typeof 10n       -->      bigint
//4. typeof true      -->      boolean value
//5. typeof 'food'    -->      string
//6. typeof symbol('id') -->   object







// ---------------Alert, Prompt, Confirm ------------

//1. Alert --> it alerts/shows a message and wait for the user to press 'OK'
//example :- alert('heyy!!!!')
//2. Prompt --> it shows a modal window with a text message and an input field and button 'OK/Cancel'
//3. Confirm --> It shows a modal window with a question and two buttons ok and cancel. If [ok] is pressed the result is true otherwise false.





//-------Basic Operator , Maths-------------
// Addition -- alert( 1 + 3)   output - 4
// subtraction -- alert(7 - 4)          3
// multiplication -- alert(3 * 5)       15
// divison        -- alert(12 / 4)       3
// modulos       --  alert( 12 % 5)      2(it returns remainder)
// exponentiation -- alert( 2 ** 4)      16


// -------------String concatenation using concat and '+' ---------

// let firstName = 'Harsh'
// let lastName = 'chopra'
// console.log(firstName.concat(lastName))
// console.log(firstName + lastName)   
// both will give same output

// alert(1 + '2') ---> "12"
// alert(1 + 2 + '2') --> "32"
// alert('1' + 2 + 3)  --> "123"
// alert(6 - '4') --> 2 

// unary + if the operand is not a number then it converts it to a number
// let x = 1;
// alert(+x ) //1
// alert(+true) // 1

// --------Modify-in-place------------
// let n = 2;
// n = n + 2 instead of this we can do n += 2 
// n = n * 3 / n *= 3

// --------Increment/decrement ----------------
// Increment
// let counter = 4
// counter++; // it will increase the value of counter by 1 [counter = counter + 1]
// alert(counter) // 5
// Decrement 
// let counter = 5;
// counter --; [counter = counter - 1] // decrease the value by 1
// alert(counter) // 4


// Note count++ --> it will  first print the value of count and then increase
// example let count = 0;
          // alert(count++) // 0

// ++count --> it will first increase and then print
// example let count = 0
           // alert(++alert) // 1

           // similar concept applies on count--/--count.


//---------------Comparison----------------

// alert(2 > 1) // true --> true means [yes]
// alert(3 < 2) // false --> false means [no]


//  string comparison-----
// alert('z' > 'a') // true z[26] is greater than a[1]
// alert('glow'>'glee) // gl==gl and o > e // true


// alert(true == 1) // true[in js true is 0 value]
// alert(false == 0) // false[false value in js is 0]





// -----------Eqaulity[==] and strict Equality operator[===]-------------

// alert(1 == '1') or alert( 0 == false)  alert(null == undefined)// true 
// alert(1 === '1 ) or alert( 0 === false ) alert(null === undefined) // false 

// == equality operator checks the value but === checks the value and dataype both and it is recommend to use === over ==







//---------------------Loops/Array,Arrays-Method , Strings , Strings methods  coming soon----------------------------------------




























