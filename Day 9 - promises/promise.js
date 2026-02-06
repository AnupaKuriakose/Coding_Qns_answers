//create a promise

function getUsers()
{
    return new Promise((resolve, reject) => {
        resolve({id:1, user:'A'})
    
    });
}
getUsers().then((data) => console.log(data));

