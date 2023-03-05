'use strict';
const btn=document.querySelector('#btn')

let timeId;
let i=0;

function myAnimation(){
  const car = document.querySelector('.car')
  let pos=0
const timeId=setInterval(frame,10 )
  function frame(){
    console.log(pos)
    if(pos==700){
      clearInterval(timeId)
    }else{
      pos++
      car.style.left=pos+'px'
      
    }
  }
}

btn.addEventListener('click',myAnimation)




// clearInterval(timeId)//bu timeId o'zgaruvchini o'chirib yuboradi

// function logger(){
//   if(i==3){
//     clearInterval(timeId)
//   }
//   console.log('set timeout')
//   i++   
//   console.log(i)

// }

// let id=setTimeout(function log(){
//   console.log('Hello log')
//   id=setTimeout(log,500)
// },500)
