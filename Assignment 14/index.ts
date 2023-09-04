//Ist Method
let guestlist:string[]= ["asad","usman","bilal", "rafia","saima"]
    for (let i=0 ;i<guestlist.length ; i++){
        console.log(`Assalam-o-Alikum , ${guestlist[i]} you are invited for the dinner tonight`)
    }
//Second Method
function inguest(guestarray:string[]){
for (let i=0; i<guestarray.length; i++){

console.log(`Assalam-o-alaikum ${guestarray[i]},you are invited for the dinner.`)
}
}
const guestarray = ["bilal","rafia","usman","asad"];
inguest(guestarray)