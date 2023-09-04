"use strict";
let guestlist = ["asad", "usman", "bilal", "rafia", "saima"];
guestlist.splice(2, 0, "shahmim", "rizwan", "babar");
for (let i = 0; i <= guestlist.length; i++) {
    console.log(guestlist[i], `I have found a bigger dinner table`);
}
guestlist.unshift("newguest");
console.log(`new guest is`, guestlist);
guestlist.splice(4, 0, " middleguest");
for (let i = 0; i <= guestlist.length; i++) {
    console.log(`Assalam-o-alaikum,${guestlist[i]} THis is new set of guestlist`);
}
