//Test for equality and inequality
let weekday:string = 'Monday';

if (weekday=== 'Monday'){

    console.log('Its start of a weeK');
    
} else{
    console.log('Other day of the week');  
}

let weekday1='Tuesday';
 if(!(weekday1==='Monday')) {

    console.log('Its not the start of the week');
 }

 //Test using lower case function

 let lowercase ='CAR';

 if (lowercase==="car"){

    console.log('Its a lowercase letter'); 
 }else if(lowercase==='CAR') {

    console.log('its an upercase letter');
 }

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number=40;

if (number = 40){
    console.log('You are pass');
}else if (!(number =40) && number<40){
    console.log('You are fail');
}else if (number > 40){
    console.log('you are good to go');  
}else if (number >= 40){
    console.log('you are good to go on next level');  
}
//Tests using "and" and "or" operators

let age:number =21

if (age>20 && age <50 ){
    console.log("you can enter the club");
} else if (age=18 || age<18){
    console.log('You are under age');
}
//Test whether an item is in a array

let fruitsarray=['apple','mango','grapes','banana']

let searchitem='mango';

if (fruitsarray.includes(searchitem)){
    console.log(`Its ${searchitem} is in the array`); 
}else{
    console.log(`Its ${searchitem} not in the array`);  
}

//Test whether an item is not in a array
let fruitsarray1=['apple','mango','grapes','banana']

let searchitem1='peach';

if (fruitsarray.includes(searchitem1)){
    console.log(`Its ${searchitem1} is in the array`); 
}else{
    console.log(`Its ${searchitem1} is not in the array`);  
}
