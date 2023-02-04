// (1) var let const
// var example
// var firstName = "Raihan";
// var lastName = "Hasan";
// console.log(firstName);
// console.log(lastName);

// let example
// let fName = "Rojhan";
// let lName = "Talukder";

// console.log(fName);
// console.log(lName);

// //  const example

// const firstName = "Asif";
// console.log(firstName);

// const lastName = "Akbar";
// console.log(lastName);

// (2)  function

//  Example 1 (Normal)

// function showText(Text) {
//   console.log(Text);
// }
// showText("Javascript practice for React js");

// example 2 => Arrow function

// const ShowTheText = (text) => {
//   console.log(text);
// };
// ShowTheText("This is Arrow Function");

// // example 3
// const showAnotherText = () => {
//   console.log("Write the another text");
// };
// showAnotherText();

// // example 4

// const showResult = (number) => {
//   return number * 2;
// };
// console.log(showResult(2));

// const showResult = (number) => number * 2;
// console.log(2 * 2);

// (3) Spred Operator
// Array Example

// const num1 = [1, 2, 3, 4];
// console.log(num1);

// const num2 = [...num1, 5, 6, 7];
// console.log(num2);

// Object Example

// const User1 = {
//   fName: "Shahin",
//   lName: "Rofiq",
// };
// console.log(User1);

// const User2 = {
//   ...User1,
//   Age: 28,
// };

// console.log(User2);

//  another Example

// const getNumber = (...number) => {
//   console.log(number[8]);
// };
// getNumber(1, 2, 3, 4, 5, 9, 8, 9, 8);

// (4) Destrucharing
// Array Example

// const num1 = [1, 2, 3, 4];
// const N1 = num1[0];
// const n4 = num1[3];
// console.log(num1[2]);
// console.log(N1);
// console.log(n4);

// const num1 = [1, 2, 3, 4];
// // const [n1, n2, n3, n4] = num1;

// const [n1, , , n4] = num1;
// console.log(n1);

// console.log(n4);

// const Users = {
//   fName: "Salman",
//   lName: "Shah",
//   age: 29,
// };
// const firstName = Users.fName;
// console.log(firstName);

// const lastName = Users.lName;
// console.log(lastName);

// const { fName, age } = Users;
// console.log(fName);
// console.log(age);

// (5) Array (Map)

// const Number1 = [2, 4, 6, 8, 10];
// Number1.map((num) => {
//   console.log(num * 2);
// });

// const Number2 = [3, 6, 9, 12, 15];

// Number2.map((num) => {
//   console.log(num * 3);
// });

// ()Filter

// const age1 = [2, 6, 8, 15, 18, 35, 36, 40];

// function PersionAge(VoterAger) {
//   return VoterAger >= 18;
// }
// const Voter = age1.filter(PersionAge);
// console.log(Voter)

// ()Reduce
// const Number = [15, 25, 65, 42, 13, 10, 9, 18, 27];
// function getNumber(first, next) {
//   return first + next;
// }
// const getTotal = Number.reduce(getNumber);

// console.log(getTotal);

// (6) Export & Import
