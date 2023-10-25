"use strict";
let allien_colors = ['green', 'yellow', 'red'];
for (let i = 0; i < allien_colors.length; i++) {
    if (allien_colors[i] === 'green') {
        console.log('Player earned 5 points');
    }
    else if (allien_colors[i] === 'yellow') {
        console.log('player earned 10 points');
    }
    else if (allien_colors[i] === 'red') {
        console.log('player earned 15 points');
    }
}
//Ist Version  through switch  case statement
let allien_colors1 = ['green', 'yellow', 'red'];
for (let i = 0; i < allien_colors.length; i++) {
    switch (allien_colors1[i]) {
        case 'green':
            console.log('Player earned 5 points');
            break;
        case 'yellow':
            console.log('player earned 10 points');
            break;
        case 'red':
            console.log('player earned 15 points');
        default:
            console.log('unkown color');
    }
}
//2nd version by using using for each method
let allien_colors2 = ['green', 'yellow', 'red'];
allien_colors2.forEach(color => {
    if (color === 'green') {
        console.log('Player earned 5 points');
    }
    else if (color === 'yellow') {
        console.log('Player earned 10 points');
    }
    else if (color === 'red') {
        console.log('Player earned 15 points');
    }
    else {
        console.log('unknown color');
    }
});
// 3rd version by using for of loop
let allien_colors3 = ['green', 'yellow', 'red'];
for (let colors of allien_colors3) {
    if (colors === 'green') {
        console.log('Player earned 5 points');
    }
    else if (colors === 'yellow') {
        console.log('Player earned 10 points');
    }
    else if (colors === 'red') {
        console.log('Player earned 15 points');
    }
    else {
        console.log('unknown color');
    }
}
