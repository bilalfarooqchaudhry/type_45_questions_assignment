"use strict";
// ist method
function inguest(guestarray) {
    for (let i = 0; i <= guestarray.length; i++) {
        console.log(`Assalam-o-alaikum ${guestarray[i]},you are invited for the dinner.`);
    }
}
let guestarray = ["bilal", "rafia", "usman", "asad"];
let arraypop = guestarray.pop();
guestarray.push("saima");
inguest(guestarray);
console.log("🚀 ~ file: index.ts:11 ~ arraypop:Guest who can not make is", arraypop);
//second method
let guestlist = ["asad", "usman", "bilal", "rafia", "saima"];
for (let i = 0; i <= guestlist.length; i++) {
    console.log(`Assalam-o-Alikum , ${guestlist[i]} you are invited for the dinner tonight`);
}
let removeguest = "bilal";
let addguest = "saiqa";
let indexremoveguest = guestlist.indexOf(removeguest);
if (indexremoveguest !== -1) {
    guestlist[indexremoveguest] = addguest;
    console.log("🚀 ~ file: index.ts:29 ~ guestlist:", guestlist);
    console.log("🚀 ~ file: index.ts:24 ~ removeguest:The Guestwho removed from list is:", removeguest);
}
else {
    console.log(`The person is not in the list`);
}
