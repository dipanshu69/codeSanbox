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

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };

const output = { d: 10, e: 12 };

const findSimilar = (obj1, obj2) => {
  const result = {};
  for (let key in obj2) {
    if (obj1.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      Object.assign(result, { [key]: obj2[key] });
    }
  }
  return result;
};

console.log(findSimilar(input1, input2));
