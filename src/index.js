// const welcome = name => {
//     const greetings = msg => {
//         console.log(`${msg}  ${name}`);
//     }
//     return greetings;
// }

// const person = welcome("Dipanshu");
// person("hie");

//rorate an array

// let arr = [1,2,3,4,5];
// let n = 3;

// const rotate = (arr, n) => {
//     for(let i = 1 ; i <= n ; i++){
//         let ele = arr.pop();
//         arr.unshift(ele);
//     }
//     return arr;
// }

// console.log(rotate(arr, n));

//comapre strings

// let str1 = "codehere";
// let str2 = "herecode";

// const compareStrings = (str1, str2) =>
//   str1.split("").sort().join("") === str2.split("").sort().join("")
//     ? true
//     : false;

// console.log(compareStrings(str1, str2));

//count strings

// let arr = ["aaa", "bbb", "ccc", "bbb", "ccc", "bbb", "aaa"];

//FindMaxChar
// let str1 = "This is javascript code and you to find max chari";

// const FindMaxChar = (str) => {
//   let lowerStr = str.toLowerCase();
//   let result = {};
//   let maxChar = "";
//   let maxCount = 0;
//   let multiMaxChar = [];

//   for (let char of lowerStr) {
//     if (char === " ") {
//       continue;
//     } else if (result.hasOwnProperty(char)) {
//       result[char] = result[char] + 1;
//     } else {
//       result[char] = 1;
//     }
//   }
//   for (let key in result) {
//     if (result[key] > maxCount) {
//       maxCount = result[key];
//       maxChar = key;
//     }
//   }
//   for (let key in result) {
//     if (result[key] === maxCount) {
//       multiMaxChar.push(key);
//     }
//   }
//   if (multiMaxChar.length > 1) {
//     return multiMaxChar.join(",");
//   } else {
//     return maxChar;
//   }
// };

// console.log(FindMaxChar(str1));

//findSimilar key and value from object

// const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
// const input2 = { a: 2, e: 12, f: 6, d: 10 };

// const output = { d: 10, e: 12 };

// const findSimilar = (obj1, obj2) => {
//   const result = {};
//   for (let key in obj1) {
//     if (obj1[key] == obj2[key]) {
//       Object.assign(result, { [key]: obj1[key] });
//     }
//   }
//   return result;
// };

// console.log(findSimilar(input1, input2));

//find second largest number in array

// const array1 = [1, 2, -2, 11, 7, 1];
// const array2 = [1, 4, 7, 2, 4];

// const secondLargest = arr1 => {
//   const newarray = arr1.sort((a, b) => b - a).filter((item, index) => arr1.indexOf(item) === index);
//   return(newarray[1]);
// };

// console.log(secondLargest(array2));

//rotate array by 2 places forword

const input = [2, 7, 11, 4, -2];
const input2 = [11, 4, -2, 2, 7];

const rotateArray = (arr) => {
  for (let i = 0; i < 2; i++) {
    let ele = arr.shift();
    arr.push(ele);
  }
  console.log(arr);
};
rotateArray(input);
