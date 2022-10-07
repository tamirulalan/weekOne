// ////////////////////////////////////////////////////////////////
// // Conditionals:
// ///////////////////////////////////////////////////////////////

// //1. Write a JavaScript display the larger of two integers
// //name a function called largest that accect two parameters
// function largest(a, b) { 
// 	if(a > b)
// 		return a;
// 	else if(a === b)
// 		return 0;
// 	else
// 		return b;
// }
// console.log(largest(2,3));

// /* 2. Write an if/else statement for the following requirements:

// If student gets 90 or higher: console log  A
// If students get 80 or above: console log B
// If students get 70 or above: console log C
// If students get 55 or above: console log D
// Any grade lower than 55 is F */
// let Grade =98;
// if (Grade>=90){
//   console.log("A")
// }
// else if (Grade>=80){
//   console.log("B")
// }
// else if (Grade>=70){
//   console.log("C")
// }
// else if (Grade>=55){
//   console.log("D")
// }
// else if (Grade < 55){
//   console.log("F")
// }

// //3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"
// let timeIs = 3;
// if (5 <= timeIs <12){
//   console.log("Good Morning")
// }
// else if (12<= timeIs <=16){
//   console.log("Good Afternoon")
// }else{
//   console.log("Hey there")
// }
// ////////////////////////////////////////////////////////////////
// // Strings:
// ///////////////////////////////////////////////////////////////
// // Look up the following string methods!

// // Using charAt(), print the letter i in Sabrina
// let letter ="Sabrina";
// console.log(letter.charAt(4))

// // Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

// // Using fromCharCode() - make it readable for us :). You'll see!

// // Take your first and last name and concat()
// let firtsName = "Tamiru"
// let lastName ="Taye"
// console.log("My name is " + firtsName+ " "+ lastName)

// // Create a string and make it return true using startsWith()
// const str = 'Software Engineering';

// console.log(str.startsWith('Soft'));
// // Now use any variable with endsWith() and return false
// var  classOff = 'Software Engineering Departement';
// console.log(classOff.endsWith('Departement!'));

// // Finish the following sentence. Use includes() and return true.

//  const ozgur = 'Once upon a time Ozgur looked up at the Moon, sorry i do not finish this sentence'
//  console.log(ozgur.includes("sorry i do not finish this sentence"));

// // Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
// let joshAnimals =["lamb","hen", "lion","goat","cow","ox"]
// console.log(joshAnimals.indexOf('cow'));
//const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

// ////////////////////////////////////////////////////////////////
// // Boolean:
// ///////////////////////////////////////////////////////////////

// // I just want my dreams to come true. 
// // With the powers of logical and comparison operators, PRINT TRUE please!
// // Replace the underscores.

// const a = 5;
// const b = 10;
// const c = 15;
// const d = "Keke"

// // console.log(a _ b)
// // console.log(c _ b)
// // console.log(d _ d)
// // console.log(d _ a)
// // console.log(a _ 15)
// // console.log(a _ b _ c)
// // console.log(c _ b _ a _ d)


// ////////////////////////////////////////////////////////////////
// // Loops:
// ///////////////////////////////////////////////////////////////
// // Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
// 
// for (let i=1; i<=10;i++){
//   console.log("Make Ken's room spin")
// }
// // Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
// for (let i=1; i<=20; i++){
//   console,log("Make Teo's vision spin")
// }
// // But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
// let i=1
// while(i<=20){
//   console.log("I'm sorry")
// }
// // For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// // To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
// const whateverQueenBeySaid = {
//     thing1: 'shoes',
//     thing2: 'clothes',
//     thing3: 'gaming console'
//   }
//   for (const property in whateverQueenBeySaid) {
//     console.log(`${property}: ${whateverQueenBeySaid[property]}`);
//   }
  
//   // Using (FOR IN LOOP), print the indexes of the array.
//  const lana = ['l', 'a', 'n', 'a']
// for (const property in lana) {
//   console.log(`${property}: ${lana[property]}`);
// }
  
//   // USE (FOR OF LOOP)!
  // const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
  // for (const element of tia) {
  //   console.log(element);
  // }
  
//   // Look into forEach() loop, it accepts a callback aka a function inside a function. 
//   // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
// const perscholas = ['Amira', 'Arely', 'Jonathan']
// perscholas.push("PS")
// perscholas.forEach(element => console.log(element));

// ////////////////////////////////////////////////////////////////
// // Arrays:
// ///////////////////////////////////////////////////////////////

// // Look up the following: Make a note of what each one of these methods do
// // push()
// // pop()
// // unshift()
// // shift()
// // concat()
// // splice()
// // slice()
// // sort()
// // includes()
// // indexOf()
// // length

// /* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
// var shoppingList = [

//   "cool ranch doritos",

//   "kings hawaiian sweet bread",

//   "peanut butter oreos",

//   "fruit loops cereal"

// ];
// shoppingList.push("Hendricks")
// console.log(shoppingList)

// //3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

// var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];

//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

// var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
// var nowServing =""
// while(waitList.length >0){
//  nowServing = waitList.shift()
//  console.log(nowServing)
// }


//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

// var shoe = ["just", "do", "it"];
// var shoeString = ""
// for (let i=0; i<shoe.length; i++){
//   shoeString +=shoe[i] +" " 
// }
// console.log(shoeString )

//  var s = shoe.join(" ")
//  console.log(s)
// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// function  maxOfTwoNumbers(a, b){
//       if(a >= b){
//          return a
//       } else{
//         return b
//       } 
//      }
// console.log(maxOfTwoNumbers(1,2))
//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// function get_max(x, y, z)
// {
//     var max = Math.max(x, y, z);
//     return max;
// }

// console.log(get_max(1,3,5)); 
//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
//  function isCharacterAVowel (c)
//     { 
//         if (c == 'a' || c == 'e' || c == 'i' || c == 'o'
//             || c == 'u') {
//             console.log('true'); 
//         }else{
//             console.log("false"); 
//     } }
//     isCharacterAVowel('a')

//4. Write a function charCount that takes a string and returns the length of the string.
// function charCount(str)
// {
    
//     var f  = {};

//     for(let i =0;i<str.length;i++)
//     {
//         if(str[i] !== " ")
//         {
//             f[str[i]] = f[str[i]] + 1 || 1 
//         }
//     }
//   return(f);   
// }
// console.log(charCount("week one is over"))
//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.
  
//I will modify this one


// function numOfVowels(string) {
//   let count = 0;

//   string = string.split('');

//   const vowels = function(string) {
//     for (let i = 0; i > string.length; i++) {
//       if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u'){
//         count+= 1;
//       }
//       return count;
//     }
//   };
// }
// console.log(numOfVowels('Yellow Submarine'));