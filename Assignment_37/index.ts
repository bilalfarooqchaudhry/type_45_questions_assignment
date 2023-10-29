type Shirt = {
    size: string;
    message: string;
}

function make_shirt(size: string = "large", message: string = "I love TypeScript"): Shirt {
    return {
        size: size,
        message: message
    };
}

// Creating a large shirt with the default message
const largeShirt: Shirt = make_shirt();
console.log(`Size: ${largeShirt.size}, Message: ${largeShirt.message}`);

// Creating a medium shirt with the default message
const mediumShirt: Shirt = make_shirt("medium");
console.log(`Size: ${mediumShirt.size}, Message: ${mediumShirt.message}`);