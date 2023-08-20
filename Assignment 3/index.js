"use strict";
let perName = "Muhammad Bilal Farooq";
console.log("Person Name:", perName);
console.log("Person Name:", perName.toUpperCase()); // Uppercase
console.log("Person Name:", perName.toLowerCase()); // Lower case
//title case
/*function toTitleCase(str:string) {
      return str
      .toLowerCase()
      .split(' ')
      //console.log(str)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  const str = "Muhammad Bilal Farooq";
  const titleCaseString = toTitleCase(str);
  
  console.log(titleCaseString); // Output: "Hello World Javascript"*/
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join();
}
const str = "Muhammad Bilal Farooq";
const totileca = str;
console.log(totileca);
