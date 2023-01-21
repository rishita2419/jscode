function callbackHell(){
    let arr=[1,2,3]

        setTimeout((arr) => {
            console.log("first",arr);
                const bio ={ names:'sakshi',id:12}
                    setTimeout((bio) => {
                        console.log("second",bio.names,bio.id);
                        
                            setTimeout((bio,arr) => {
                                        console.log("third",bio.id,arr)
                                        
                            }, 100,bio,arr);

                    },2000,bio)
        },1000,arr)

}

callbackHell();