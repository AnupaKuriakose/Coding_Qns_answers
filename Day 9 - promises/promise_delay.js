


//Simulated API That Randomly Fails
//retries upto 3 times if API fails
//wait 1 sec before retrying
//logs each entry
//return success or final failure
function mockAPI()
{
    return new Promise((resolve, reject) =>{
        setTimeout(()=> 
        {
         const success = Math.random() > 0.5;  
         success? resolve('Data ready') : reject('Error');
            
        }, 1000)
    })
}


function retryApi(fn, retries, delay)
{
    return new Promise((resolve, reject) =>{
        function attempt(){
            fn()
            .then(resolve)
            .catch((error) => {
                if(retries === 0) reject(error);
                else {console.log(`Retries ${retries} for APi call`);
                retries--;
                setTimeout(attempt,delay);}
            })
        }
        attempt();
    })
}

retryApi(mockAPI, 3, 1000)
.then((result) => console.log(result))
.catch((error) => console.log(error))
//same retryApi we can write with async await
async function retryApi1(fn, retries, delay)
{
    try{
        return await fn();
    }
    catch(error){
        if(retries === 0) throw error;
        console.log(`Retrying... attempts left: ${retries}`); 
        await new Promise(res=> setTimeout(res, delay));
        await retryApi1(fn, retries - 1, delay);
       // await retryApi1(fn, retries - 1, delay * 2);//exponential backoff - increases delay
    }
}
