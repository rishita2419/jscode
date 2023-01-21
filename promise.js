

let promise = new Promise((resolve,reject) => {

    setTimeout(()=>{
        resolve("1st promisee resolved");
        // reject("1st promise rejected");
    },2000)
})

let promise1 = new Promise((resolve,reject) => {

    // resolve("2nd promise resolved");
    reject("2nd promise rejected");
})

show();

function show(){
    promise.then((res) => {
        console.log("1st promised called &",res)

        promise1.catch((rej)=>{
            console.log("2nd promise called &",rej)
        })
    })

    // promise.catch((rej) => {
    //     console.log("1st promise called bt")
    // })

    
}

