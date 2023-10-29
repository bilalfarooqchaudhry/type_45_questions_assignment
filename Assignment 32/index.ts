let current_users=['user1','user2','user3','user4','user5'];
let new_users=['user2','user3','user6','user7','user8'];

for (let i=0;i<5;i++) {

    if(new_users[i] === 'user2'){
        console.log(`${new_users[i]},The person will need to enter a new username`); 
    }else if (new_users[i]==='user3') {
        console.log(`${new_users[i]},The person will need to enter a new username`);  
    }else{
        console.log(`${new_users[i]}, username is avaiable` );  
    }
}

