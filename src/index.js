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

// const input = [2, 7, 11, 4, -2];
// const input2 = [11, 4, -2, 2, 7];

// const rotateArray = (arr) => {
//   for (let i = 0; i < 2; i++) {
//     let ele = arr.shift();
//     arr.push(ele);
//   }
//   console.log(arr);
// };
// rotateArray(input);

//Count all Vowels

// const countVowels = sentence => {
//         let count  = 0;
//         const vowels = ["a", "e", "i", "o", "u"];

//         for(let char of sentence){
//             console.log(char);
//             if(vowels.includes(char.toLowerCase())){
//                 count++;
//             }
//         }
//         return count;
// }

// console.log(countVowels("Hie there my name is Dipanshu"));

//isPalindrome

// const isPalindrome = (str) => {
//   return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
// };

// console.log(isPalindrome("love"));

//Remove duplicates

// const arr = [1, 3, 4, 1, 6, 7, 3];
// //[1,1,3,3,4,6,7]
// const removeduplicates = (array) => {
//   return array.sort((a, b) => a - b).filter((item, index) => array.indexOf(item) === index);
// };

// console.log(removeduplicates(arr));
//Find Max and Min number in an array with and without method

// const arr = [1, 3, 4, 1, 6, 7, 3];
//withoutMethod
// const findMax = (array) => {
//   let max = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// };
// console.log(findMax(arr));
//withMethod
//  const array = [1, 3, 4, 1, 6, 7, 3];

//  const findMax = arr => {
//     const max = arr.reduce((acc, cur) => {
//         console.log(acc, cur);
//         return acc > cur ? acc : cur;
//     });
//     return max;
//  }
//  console.log(findMax(array));
//FindMMin
//   const arr = [1, 3, 4, 1, 6, 7, 3];
//withoutMethod
// const findMin = (array) => {
//   let max = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < max) {
//       max = array[i];
//     }
//   }
//   return max;
// };
// console.log(findMin(arr));
//withMethod

//  const findMin = arr => {
//     const max = arr.reduce((acc, cur) => {
//         console.log(acc, cur);
//         return acc < cur ? acc : cur;
//     });
//     return max;
//  }
//  console.log(findMin(arr));

//fizzBuzz
// const fizzBuzz = () => {
//   let c3 = 0;
//   let c5 = 0;
//   for (let i = 1; i <= 100; i++) {
//     c3++;
//     c5++;
//     let d = "";
//     if (c3 == 3) {
//       d += "fizz";
//       c3 = 0;
//     }
//     if (c5 == 5) {
//       d += "buzz";
//       c5 = 0;
//     }

//     if (d == "") {
//       console.log(i);
//     } else {
//       console.log(d);
//     }
//   }
// };
// fizzBuzz();

//Capitalize first letter of a Word in a sentence

// const Capitalize = str => {
//     console.log(str.split(" ")
//     .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" "));
// }

//  Capitalize("hello there my name is dipanSHU");

//Find the length of duplicates in an array1
// let array = [1,3,5,2,1,6,5,6];
// const duplicates = arr => {
//   const newArray = [];
//     count = 0;
//     arr.map(ele => {
//         newArray.includes(ele) ? count++ : newArray.push(ele);
//     });
//     return count;
// }
// //Unique array without duplicates

// let unique = array.filter((item,index) => array.indexOf(item) === index);
// console.log(unique);
// let duplicates1 = unique.map(value =>
// [value , array.filter(str => str === value)]);
// console.log(duplicates1);
// console.log(duplicates(array));

//find missing odd number in array
// const input =  [3,6,9,12,15,18,22]; //[21, 23, 25, 27, 31];//[5, 7, 9, 11, 15, 17];
// const output = 13;

// const findFirstOdd = (arr,n) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] + n == arr[i + 1])) {
//       return arr[i] + n;
//     }
//   }
// };

// console.log(findFirstOdd(input, 3));

//not add yourself
// const input = [2, 7, 11, 4, -2];
// const output = [20, 15, 11, 18, 24];

// const notAddUrSelf = (arr) => {
//   const result = [];

//   const sum = (arr) => {
//     let add = 0;
//     for (let i = 0; i < arr.length; i++) {
//       add += arr[i];
//     }
//     return add;
//   };

//   let newadd = sum(arr);
//   for (let i = 0; i < arr.length; i++) {
//     result.push(newadd - arr[i]);
//   }
//   return result;
// };

// console.log(notAddUrSelf(input));

//fibSeries

// const fibSeries = (num) => {
//   let n1 = 0,
//     n2 = 1,
//     next;
//   for (let i = 0; i <= num; i++) {
//     console.log(n1);
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;
//   }
// };

// console.log(fibSeries(5));

//Reverse A strings

//withoutMethod

// const reverseString = (str) => {
//   let reverse = "";
//   for (let i = 0; i < str.length; i++) {
//     reverse = str[i] + reverse;
//   }
//   return reverse;
// };

// console.log(reverseString("Hello"));

//withMethod

// const reverseString = (str) => {
//   return str.split("").reverse().join("");
// };

// console.log(reverseString("Hello"));

//creating Method for Array using prototype

Array.prototype.returnFirst = arr => {
    return arr[0];
}

const array = ["hie", "there", "my", "name", "is", "Dipanshu"];

a