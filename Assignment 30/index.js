"use strict";
function greetings(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "admin") {
            console.log(`Hello, ${array[i]} wpould to like to see a status report`);
        }
        else {
            console.log(`Hello ${array[i]},thak you for loging in again `);
        }
    }
}
let array = ['admin', 'user2', 'user3', 'user4', 'user5'];
greetings(array);
