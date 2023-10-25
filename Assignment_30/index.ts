
function greetings(users:string[]){
    users.forEach(users=>{
        console.log(`Hello,${users} welcome your are login again` );
    })
}

const users=['admin','user1','user2','user3','user4'];
greetings(users);