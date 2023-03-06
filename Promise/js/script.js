'use strict'

// const isFriendCome = false

// const meetingRequest = new Promise( (resolve , reject)=>{
//   if(isFriendCome){
//     const msg = "Friend I'm there"
//     resolve()
//   }else {
//     const err= "I can't come there"
//     reject(err)
//   }
// })

// meetingRequest
// .then((msg)=>console.log(msg))
// .catch(((err)=>console.log(err)))
// .finally(()=>console.log("I'm colling you"))
//--------------------------------------------------

// console.log("Request data...")
// //sync - bu ketma ketlikda ishga tushuriladi 
// //async - bu esa qaysi biri birinchi ishga tushsa o'shanisi birinchi ishga tushadi

// setTimeout(()=>{
//   console.log("Proscessing data...")
//   const product = {
//     name:"car",
//     color:"black"
//   }

//   setTimeout(()=>{
//     product.speed="200 km/h"
//     console.log(product)
//   },2000)
// },2000)
//-----------------------------------------------------
//Tepadagi kodni yani sync va async kodlarni promise da ko'ramiza 
// console.log("Request data...")
// const req = new Promise((resolve)=>{
//   setTimeout(()=>{
//     const product = {
//       name:"car",
//       color:"red"
//     }
//   console.log("Prosessing data...")
//     resolve(product)

//   },2000)
// })

// req
// .then(data=>{
//   return new Promise(((resolve , reject)=>{
//     setTimeout(()=>{
//       data.status="ordered"
//       console.log("Geting data...")
//       reject()
//     },2000)
//   }))
// })
// .then((result)=>console.log(result))
// .catch(()=>console.log("Someting went wrong..."))
// .finally(()=>console.log("Fetching end"))
//------------------------------------------------------------------
//Promse method
