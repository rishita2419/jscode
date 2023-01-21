
promise3 = new Promise((res,rej)=>{
    // res("promise resolved");
    rej("promise rejected");
})

add();

async function add(){

    try{
        await promise3.then((req)=>{
            console.log("promise created",req)
        })
    }

    catch(err){
        console.log("error is",err)
    }


}