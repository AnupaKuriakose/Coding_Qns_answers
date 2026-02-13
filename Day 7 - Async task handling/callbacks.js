//callbask - function that can be passed as an arg to another function
//which is then executed (or "called back") later to complete a routine

//simple synchronouns example

function processUser(user, callback)
{
const greeting = `user identified ${user}`;
callback(greeting);
}

processUser( "Alice", (msg)=>{
    console.log(msg);
})

//asynchronous callback
setTimeout(()=>{
    console.log('this executes afetr 2s')
},2000);
//event listener
const btn = document.getElementById("submitbtn");
btn.addEventListener('click', (event) =>{
    console.log('button clciked at', event.timeStamp);
})