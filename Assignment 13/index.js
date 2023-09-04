"use strict";
/*function  transportationmode(favmode:string[]) {
let i=0;
    for (i=0; i < favmode.length; i++){

        if (favmode[i]=== "train") {

        console.log(`Train is my favourite mode of transportation`)
        } else if(favmode[i]==="cycle") {

        console.log(`I would like to own a cycle`);
        }
         else if(favmode[i]==="car") {

        console.log(`I would like to own a car`);
        }else if(favmode[i]==="motorbike") {

        console.log(`I would like to own a motobike`);
        }else if(favmode[i]==="rakshaw") {

        console.log(`I would like to own a rakshaw`);
        }
    }
}
const favmode:string []=["car","cycle","motorbike","rakshaw","bus","train"]
transportationmode(favmode);*/
const favmodes = ["car", "cycle", "motorbike", "rakshaw", "bus", "train"];
for (let favmode in favmodes) {
    let i = 0;
    if (favmodes[i] === "train") {
        console.log("Train is my favourite mode of transportation");
    }
}
