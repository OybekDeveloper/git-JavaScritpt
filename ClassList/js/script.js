'use strict'
//-------------------------------------------#0

// const btns=document.querySelectorAll('button')
// console.log(btns[0].classList.length) //=>classList classlarning sonini chiqarib beradi

// // console.log(btns[0].classList.item(1))//=>item esa classlarning nomini chiqaridi
// btns[0].classList.remove('blue')
// btns[1].classList.add('blue')
// btns[0].classList.toggle('blue')//toggle bu agar bu class bo'lsa o'chiradi bo'lmada qo'shadi
// btns[1].classList.add('red')

// if(btns[1].classList.contains('red')){
//   console.log('yeap')
// }

// btns[0].addEventListener('click',()=>{
//   // for (let i=1;i<10;i++)
//   // if(!btns[i].classList.contains('red')){
//   //   btns[i].classList.add('red')
//   // }else {
//   //   btns[i].cladocumentssList.remove('red')
//   // }
//   btns[1].classList.toggle('red')//bu tepadagi kodni qisqa qilib yozsak shu xolda bo'adi
// })btns[0].addEventListener('click',()=>{
//   // for (let i=1;i<10;i++)
//   // if(!btns[i].classList.contains('red')){
//   //   btns[i].classList.add('red')
//   // }else {
//   //   btns[i].classList.remove('red')
//   // }
//   btns[1].classList.toggle('red')//bu tepadagi kodni qisqa qilib yozsak shu xolda bo'adi
// })

//------------------------------------------------------#1
//Delegatsiya xaqida batafsil
// const wrapper=document.querySelector('.btn-block'),
// btns=document.querySelectorAll('button')

// btns[0].addEventListener('click',()=>{
//   btns[1].classList.toggle('red')
// })

// wrapper.addEventListener('click',(event)=>{
//   if(event.target && event.target.classList.contains('red')){
//     console.log('btn-click')
//   }
// })

// const btn=document.createElement('button')
// btn.classList.add('red')
// wrapper.append(btn)


































