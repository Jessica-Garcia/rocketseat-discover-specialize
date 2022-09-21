const promise = new Promise((resolve, reject) => resolve('ok'));

async function start(){
    try{
        const result = await promise;
        console.log(result);
    } catch(error){
        console.log(error);
    } finally{
        console.log('always run')
    }
}
start();
