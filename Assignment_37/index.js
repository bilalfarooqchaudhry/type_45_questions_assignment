"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    return {
        size: size,
        message: message
    };
}
// Creating a large shirt with the default message
const largeShirt = make_shirt();
console.log(`Size: ${largeShirt.size}, Message: ${largeShirt.message}`);
// Creating a medium shirt with the default message
const mediumShirt = make_shirt("medium");
console.log(`Size: ${mediumShirt.size}, Message: ${mediumShirt.message}`);
