let guestlist:string[]= ["asad","usman","bilal", "rafia","saima"];
console.log(`Sorry guys I can invite only two people for dinner as my new dinner table won't arrive in time`);
let i = guestlist.length
 for (let i=0 ; guestlist.length > 2 ; i++){

    let a= guestlist.pop();
console.log(`Sorry Brother / Sister, I can't invite you ${a} because my dinner table is not arrived on time `);
 }

 
 console.log(`${guestlist} you are still invited for the dinner `);
 guestlist.pop();
 guestlist.shift();
 console.log("🚀 ~ file: index.ts:14 ~ guestlist:", guestlist)



