
let count =0;

let newCount =0;

// let x = document.getElementById('name')

// x.addEventListener("click",function(){
//     count++;
//     console.log(count);
// })

btn = true;

document.getElementById('names').style.color ="red";

function change(){

    btn = !btn 
    if(btn){
        document.getElementById('names').style.color ="red"
    }
    else{
        document.getElementById('names').style.color ="green"
    }
    console.log("new",newCount++)
}


