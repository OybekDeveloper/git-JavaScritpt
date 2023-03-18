'use strict'
//********************************************* */
//INCAPCULATSIYA CANSTRUCTOR
// function Car(name,color,bonus)
// {
//     this.name=name
//     this.color=color
//     let extBonus= bonus

//     this.info=function(){
//         console.log(`Car name is ${name} color is ${color}.There are bonus ${extBonus}`);
//     }

//    this.getBonus=function(){
//     return extBonus
//    }

//    this.setBonus= function(bonus){
//      if(typeof bonus == "number" && bonus>0 && bonus<100)
//      {
//         extBonus=bonus
//      }else{
//         console.log("Samething went wrong")
//      }
//    }

// }

// const bmw = new Car('BMW', "black",23)

// console.log(bmw.getBonus())

// bmw.setBonus(13)

// bmw.info()
/********************************************************************/
//INCAPCULATSIYA CLASS 

class Car{
   constructor(name, color,bonus)
   {
      this.name=name
      this.color=color
      this._extBonus=bonus//_=>bu dasturlashda ladash deyiladi yani tashqarida o'zgartirilmasin maxsus funtionla bilan o'zgartirilsin yani get() va set() orqali f
   }
   info(){
      console.log(`Car name is ${this.name} color is ${this.color}.There are bonus ${this._extBonus}`);
  }
  get bonus(){
   return this._extBonus
  }

  set bonus(bonus){
    if(typeof bonus == "number" && bonus>0 && bonus<100)
    {
      this._extBonus=bonus
    }else{
       console.log("Samething went wrong")
    }
  }

}


const bmw = new Car('BMW', "black",23)

console.log(bmw.bonus)

console.log(bmw.bonus= 52)

bmw.info()