"use strict";
const favplaces = ["France", "Swizzerland", "Azad Kashmir", "Muree", "khghan", "Naran valley"];
console.log(favplaces);
const sortarray = favplaces.slice();
sortarray.sort();
console.log("🚀 ~ file: index.ts:4 ~ sortarray:", sortarray); // sorted array without changing original array
console.log("🚀 ~ file: index.ts:2 ~ favplaces:", favplaces); // in original order
const reversearray = [...favplaces]; //spread operator to creat copy of original array
reversearray.sort((A, B) => B.localeCompare(A));
console.log("🚀 ~ file: index.ts:11 ~ reversearray:", reversearray);
console.log(favplaces);
const agreversearray = [...favplaces]; // spread operator
agreversearray.sort((A, B) => B.localeCompare(A));
console.log("🚀 ~ file: index.ts:16 ~ agreversearray:The order of array has been changed again", agreversearray);
const origorder = [...agreversearray];
origorder.sort((A, B) => B.localeCompare(A));
console.log("🚀 ~ file: index.ts:19 ~ origorder:The Orignal order of the array is", origorder);
