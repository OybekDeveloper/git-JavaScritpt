'use strict'

const promoDiv=document.querySelectorAll('.promo__adv img'),
 promoJanr=document.querySelector('.promo__genre'),
 Bg=document.querySelector('.promo__bg'),
 list=document.querySelector('.promo__interactive-list'),
 addForm=document.querySelector('form.add'),
 inputVal=addForm.querySelector('.adding__input'),
 checkbox=addForm.querySelector("[type='checkbox']")


 document.addEventListener('DOMContentLoaded',()=>{

  const seriesDB={
    series: [
      'Omar',
      'The final legacy',
      'ERTUGRUL',
      'GREAT SELJUKS: GUARDIANS...'
  ]
}
addForm.addEventListener('submit',(event)=>{
  event.preventDefault()
 let newSeries=inputVal.value
 const favourite=checkbox.checked

if(newSeries){
  if(newSeries.length>18){
    newSeries = `${newSeries.substring(0,18)}...`
  }
  if(favourite){
    console.log("Sevimli serial qo'shildi")
  }
  seriesDB.series.push(newSeries)
sortArr(seriesDB.series)
createSeriesList(seriesDB.series,list)
event.target.reset() 
}seriesDB
})


const sortArr = (arr)=>{
  arr.sort()
}

  
  const makeChanges = () =>{
    promoJanr.textContent="komedya"

    Bg.style.backgroundImage='url("img/1.jpg")'
  }
  
  function createSeriesList(series,parent){
 
    list.innerHTML=''
    sortArr(series)
    series.forEach((item,idx)=>{
      parent.innerHTML+=`
      <li class="promo__interactive-item">
       ${idx+1}  ${item}
        <div class="delete"></div>
      </li>
      `
    })
      document.querySelectorAll('.delete').forEach((trash,idx) => {
        trash.addEventListener('click',() =>{
          trash.parentElement.remove()
          series.splice(idx,1)
          createSeriesList(seriesDB.series,list)
          
        })
      })
     
    
    }

 
  
  sortArr(seriesDB.series)
  makeChanges()
  createSeriesList(seriesDB.series,list)
  
  
 
})






































