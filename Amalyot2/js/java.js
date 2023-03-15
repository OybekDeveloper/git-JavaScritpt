//Qatiy rejim 
"use strict";//bu eski farmatdagi codeni yoq qiladi odatta eng boshida qo'yiladi

//--------------------------------------------------------------------------------#0
// //O'zgaruvchilarga oid misollar
// //Let o'zgaruvchisi
// let number = 23; //Let ning qiymatini o'zgartirsa bo'ladi
// console.log(number);
// //Const o'zgaruvchisi
// const iiik = "Oybek";//constga qayta qiymat bersa bo'lmaydi agar uni quyidagicha chaqirmasak
// const sureName ={
//   familya:'Bakhtiyorov',//bu holda uning qiymati o'zgaradi
// }
// console.log(sureName);
// //va eski hollarda ishlatiladigan var o'zgaruvchilari majud
//  var yosh = 20;
//  console.log(yosh);
//------------------------------------------------------------------------------------#1
//  //Data types  Malumotlar turlari (2 ta tuuri bor primitive va object)
// //primitive

// //Number
// let namber = 4.5;
// console.log(9/0);//infinity=cheksizlikni chiqarish
// console.log("Oybek"* 9);//NaN yani bu narsa xato bu ikki xil malumot

// //String
// const myName = "Oybek";
// const sure = `Bakhtiyorov Oyek`;

// //Boolean
// const isMarred = false;//yoki true bo'ladi
// console.log(isMarred);

// //Null yoq o'zgaruvchini ishlatsak
// console.log(types);

// //Undifined bu o'zgaruvchiga qiymat bermasak chiqadi
// let unf;
// console.log(unf);


// //Object 

// //object o'zgaruvchi
// const thief ={
//   age:23,
//   Jacket:'Black',
//   isLong:false,
// }
// console.log(thief);
// console.log(thief['age']);

// //Array
// //Array keys =   0       1     2  3  ...
// const colors =['red' ,'black',[] ,{}//masivning ichida hamma o'zgaruvchilar bo'lishi mumkin
// ];
// console.log(colors[0]);
// const age = +prompt("How old you?", "18");
// console.log(age+10);
//------------------------------------------------------------------------------------#3
////Foydalanuvchi bilan oddiy muloqot
// //Allert hozida alert dan foydalinlmaydi
// alert("Hello Oybek");
// const place = confirm("Are you here ?");//Confirm bu ikkita qiymat qaytaradi true va false
// console.log(place);

// const place =prompt("Where are you?", "Toshkentdamisan");//prompt da esa o'ziz xoxlagan javob beramiz
// console.log(place);

// const age = +prompt("How old you?", "18");
// console.log(age+10);

// const fovouriteColor=[];

// fovouriteColor[0] = prompt("What is fovourite colot #1" , "");
// fovouriteColor[1] = prompt("What is fovourite colot #2" , "");
// fovouriteColor[2] = prompt("What is fovourite colot #3" , "");

// console.log( typeof fovouriteColor);
//------------------------------------------------------------------------------#4
// //Interpolatsiyalash
// const channel = prompt("What's is you fovourite developer?");
// console.log( `https://youtube.com/${channel}/platlists`);

//----------------------------------------------------------------------------#5
//Operatorlar

// let incr=23;
// let decr=44;

// console.log(--incr);
// console.log(++decr);
// console.log(incr--);
// console.log(decr++);
// console.log(incr);
// console.log(deconsole.log(5*5=='25');//== faqatgina qiymatiga qaraydi
// console.log(5*5==='25');//=== ularni ham qiymay ham malumot turi bilan solishtiradicr);
// console.log(5*5=='25');//== faqatgina qiymatiga qaraydi
// console.log(5*5==='25');//=== ularni ham qiymay ham malumot turi bilan solishtiradi

//&& = va ||=yoki degani


//------------------------------------------------------------#6
//If else  operatori

// const age = +prompt("How old you?");

// if (age>18){
//   console.log("Kirishingiz mumkin!");
// }else{
// console.log("Taqiqlanadi!");
// }

// if(age>25){
//   console.log("Horror films");
// }else if(age>18 &&  age<25){
// console.log("Bayevik films");
// }else{
//   console.log("carton");
// }
//Tepadagi kodning qisqartmasi Terrnar aperatori

// (age>18)?console.log("Bayevik films"):console.log("carton");

//Swich case operatori bu har doim qattiy rejimda ishlaydi yani == da mas === da ishlaydii
// const color = "blue";

// switch (color){
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("Slowly");
//     break;
//   case "green":
//     console.log("goo");
//     break;
//     default:
//       console.log("Traffic jam");
//       break;
// }

//-----------------------------------------------#7
//Silil operatorlari
// let startNum = 1;


//While sikl operatori
// while(startNum<22){
//   console.log(startNum);
//   startNum++;
// }

//do while

// do{
//   console.log(startNum);
//   startNum++;
// }while(startNum<22);

//For sikl operatori

// for (let i=1;i<10;i++){
//   if(i===8){
//     continue;//shu i===8 ni k'rsatmaydi
//   }
//   console.log(i);
// }
//----------------------------------#8
//Funksiyalar
////Function declaration
// function names(name,surename){
// console.log(`My name is ${name} ${surename}`);
// }
// names("Oybek","Bakhtiyorov");

// function calc(a,b){
//   return a+b;//return va shu functionni qaytaradi functionni shu yerda to'xtatadi
// }
// console.log(calc(12,34));
////Function expression
// let names = function(){
//   console.log("hello world");
// };

// const calc =(a,b)=>a+b;//arrow function fu tepadagi 3 qatirni bir qatirga yozdi
// console.log(calc(23,45));

//---------------------------------------#8
//Metod va property
//String malumot turu uchun
// const user = "Oybek";
// const arr = [1,2,3,4];
// console.log(user[2]);

// console.log(user.toUpperCase());//Bu Hamma harflani katta harfga almashtiradi
// console.log(user.toLowerCase)//Bu Hosh harfdan boshqa hammasini kichik harflarga o'zgartiradi

// const greeting = " Hello world";
// console.log(greeting.indexOf("f"));//Matindagi harfni qidirish
// console.log(greeting.slice(0,6));//slice metodi bizaga shu index oradidagi qisni kesib beradi
// console.log(greeting.substring(6,11));//slicega o'xshaydi

//Number malumot turi uchun
// const num =8.8;
// console.log(Math.round(num));//bu metod sonni yaxlitlaydi

//  const borderWidth="32.7px";
//  console.log(parseInt(borderWidth));//Malumot turini number qiladi va end kichik qiymatga yaxlitlaydi
//  console.log(parseloat(borderWidth));//Bu esa malumot turini number qiladi va sonni yaxlitlaydi



//-------------------------------------------------#9
// Callback function->> yani bir funksiya ishlagandan ken boshqa funksyanni ishlatish

// function edu(subjecy,callback){
//   console.log( `I wanna teacher ${subjecy}`);
//   callback();
// }

// edu("JavaScript",function(){
//   console.log("That's great");
// });





//-----------------------------------------#10
//Obyektlar haqida 

// const theif={
//   jacket:"Black",
//   height:1.7,
//   colors:{
//     heir:"gray",
//     style:"curley"
//   },
//   howOut:function(){
//     console.log("Fast with help doors")
//   }
// };

// theif.howOut();

// const {heir,style}=theif.colors;//disturiptatsiya kodlani qisqartirish 
// console.log(heir);
// console.log(style);
// console.log(theif);
// console.log(Object.keys(theif).length);

// for ( let key in theif){//in faqat obyektlar bilan shlaymiz
//   if (typeof theif[key]==="object"){
//     for ( let i in theif[key] ){
//       coconsole.log(theif);
// console.log(Object.keys(theif).length);

// for ( let key in theif){//in faqat obyektlar bilan shlaymiz
//   if (typeof theif[key]==="object"){
//     for ( let i in theif[key] ){
//       console.log(`Property ${i} has value ${theif[key][i]}`);
//     }
//   }else{
//   console.log(`Property ${key} has value ${theif[key]}`)
//   }
// }

//---------------------------------------------------------------------#11

//Massivlar Arrayes

// const arr = [132,23,3,54,65,6];
// arr.sort((a,b)=>a-b);
// console.log(arr);
// forEach bu callback function bo'lib u har bir massiv elementi uchun ishlaydi
// arr.forEach(function(item, index, arr){
//   console.log(`${index}: ${item} into arr ${arr}`)
// })


// arr[99]=0;
// console.log(arr.length);//length bu massivning oxirgi indexsifa 1 ni qo'shib hisoblaydi xolos
// arr.pop();//oxiridagi elementni olib tashaydi
// arr.push(3);//oxiriga element qo'shadi
// arr.shift();//boshidan sonni oladi
// arr.unshift(0);//boshiga son qo'shadi bu shift va unshift qo'llanilmaydi 
// console.log(arr);
// for (let i=0 ; i<arr.length ;i++){
//   console.log(arr[i]);
// }

// for ( let value of arr){//for of massivlar bilan ishlaydi for in esa obyectlar bilan ishlaydi
//   console.log(value);movies
// }

// const movies = prompt("What's your favourite movies","");
// const userMovies = movies.split(", ");//string ko'rinishidan massiv ko'rinishiga o'tadi
// userMovies.sort();//alfabi tartibidda yozib beradi
// console.log(userMovies.join("- "));
// const number={
//   x:10,
//   y:5,
// }

// const newNumber =number
// newNumber.x=15;
// console.log(number);
// console.log(newNumber);

//------------------------------------------------#12
//object numbr va arraylardan nusxa olish
// function nusxaObj(obj){
//   let objNusxa={};
//   for ( let key in obj){
//     objNusxa[key]=obj[key]
//   }

//   [Done] exited with code=0 in 0.264 seconds
  
//   [Running] node "/home/oz
//   return objNusxa;
// }

// const numbers={
//   x:10,
//   y:5,
//   z:{
//     a:5,
//     b:7,
//   }
// }
// const newNumber=nusxaObj(numbers)
// newNumber.x=13
// newNumber.z.a=9
// console.log(newNumber)
// console.log(numbers)

// const numbers={
//   x:10,
//   y:5,
//   z:{
//     a:5,
//     b:7,
//   }
// }
// const addNumber={
//   z:19,
//   t:76,
// }

// const allNumber = Object.assign(addNumber,numbers)//assign bu ikkita objectnii qo'shish vazifasini ham bajatadi 
// console.log(allNumber)
// // newNumber.x=23
// console.log(newNumber)
// console.log(numbers)

// const arr = [1,2,3,4,5,6]
// const newNumber=arr.slice()//Array lar uchun bizga nusxa ko'chirib beradi

// newNumber[1]="Oybek"
// console.log(arr)
// console.log(newNumber)

// const arr = [1,2,3,4,5,6]
// const newNumber=arr.slice()//Array lar uchun bizga nusxa ko'chirib beradi

// newNumber[1]="Oybek"
// console.log(arr)
// console.log(newNumber)


//----------------------------------------------------#13
//Spread operatori=>>> nusxasini oladi yoki o'zgartiradi  va unung ko'rinushi ... shunday
// const Barcelona =["Messi","Suares","Neymar"]
// const RealMadrid=["Ronaldo","Benzema"]

// const FantasticFake=[...Barcelona,...RealMadrid]

// console.log(FantasticFake)
// const calc=[1,2,3]
// function logger(x,y,z){
//   console.log(x+y+z)
// }
// //spred operator massivni oddiy o'zgaruvchiga aylantirib berdi
// logger(...calc)

//--------------------------------------#14
//OOP=>Objectga yo'naltirilgan dasturlash 
// const car = {
//   motor:"X",
//   color:"red",
//   isAirbag:true,
//   isSpeed:function(){
//     console.log(200)
//   }
// }
// const gm={
//   isAirbag:false
// }
// // Object.setPrototypeOf(gm,car)//bu ikkita objectni birlshtiradi

// const bmv = Object.create(car)
// console.log(gm)
// console.log(bmv)

//----------------------------------------------#15
//Dinamik typing 

//to string
//1-)
//  console.log(String(7))
// //2-)
// console.log(typeof ("samar"+21))
// const num=21
// console.log("youtube.com/channel/"+num)

//to number
// //1-)
// console.log(typeof Number("56"))
// //2-)
// console.log(typeof +"5")
// //3-)
// console.log(typeof parseInt("23"))

//to boolean
//0 , "", null, undefined, NaN=== xathird
// let age =0
// if(age){
//   console.log("gooo")
// }
// age=12

// if(age){
//   console.log("GOO")
// }
// //2-)
// console.log(typeof Boolean(23))
// //3-)
// console.log(typeof !!"asafsd")

//-------------------------------------------------#16 
//js fayllarni dinamic tarzda ulash

// const p = document.querySelectorAll('p')

// console.log(p)

// function loadScript(scr){
//   const script = document.querySelectorAll('script')
//   script.scr=scr
//   document.body.append(script)
// }

// loadScript('js/second.js')
// loadScript('js/third.js')

// console.log(loadScript)

//-----------------------------------------------------#17
//Xatolarni tuzatish

// function sayHello(){
//   console.log('Good morning')
//   debugger//shu funcsiani qanday ishlayotganini ko'rish uchun funcsuya
// }
// sayHello()

// function sayBye(){
//   console.log('Good bye')
// }
// sayBye()

// const arr=[1,34,14,-56,98],
// sorsed = arr.sort(compareNum)

// function compareNum(a,b){
//   return a-b
// }

// console.log(sorsed)
//------------------------------------------------------#18
//Date bilan ishlash

// const now =  new Date()
// //  console.log(now.getHours())//get orqali olamiza 
// console.log(now.setHours(18))//set orqalis esa biz o'zimiz malumot qo'shamiza
// console.log(now)

// let start = new Date()

// for (let i=0;i<100000;i++){
//   let some = i**3
// }

// let end = new Date()

// alert(`Bizning sikilimiz ${end - start} milli soniya davom etdi `)

//------------------------------------------------------------------------#19
//Funksiya konstruktor

// function Car(name,color,mph){
//   this.name=name
//   this.color=color
//   this.mph=mph
//   this.isAirbag=true
//   this.speed=()=>{
//     console.log(`Speed of car ${this.name} is ${this.mph}`)
//   }
// }

// Car.prototype.sayHello=()=>{
//   console.log(`Car name of ${this.name}  say Hello `)
// }




// const bnw=new Car('bnw','red',400)
// const merc=new Car('merc','blue',300)
// console.log(bnw)
// console.log(merc)



// bnw.sayHello()
// merc.sayHello()

// bnw.speed()function Car(name,color,mph){
//   this.name=name
//   this.color=color
//   this.mph=mph
//   this.isAirbag=true
//   this.speed=()=>{
//     console.log(`Speed of car ${this.name} is ${this.mph}`)
//   }
// }
// merc.speed()

///----------------------------------------------------------#20
//Context this  xar doim nimagadir qaram (osiladi)

//1-) ------------------------
//Oddiy functionni contextti yani this har doim window global objectfa qaram bo'ladi 
//    ya'ni osiladi.Agar qattiy rejim yoqilgan bo'lsa (Use strict) context undifinedga teng bo'ldi

// function logger(a,b){
//   console.log(this)
//   function sum(){
//     return a +b
  
//   }
//   console.log(sum())
// }

// logger(1,4)

//2-)--------------------------
//Context  this O
// const obj={
//   x:10,
//   y:21,
//   sum: function(){
//     function logger(){//Bu oddiy funtion bo'lib qolganligi uchun uning Context this windowga teng bo'lar ekan
//       console.log(this)
//     }
//     logger()
//   }
// }
// obj.sum()bjectni ichidagi metodda - objectning o'ziga teng bo'ladi

// const obj={
//   x:10,
//   y:21,
//   sum: function(){
//     function logger(){//Bu oddiy funtion bo'lib qolganligi uchun uning Context this windowga teng bo'lar ekan
//       console.log(this)
//     }
//     logger()
//   }
// }
// obj.sum()
//3-)-------------------------------
//Context this function construcctorida yangi objectni ekzempyariga teng bo'ladi
//yani shu funcsiyada yozilgan obyectimiszga teng bo'ladi yani copya bo'ladi

// function Car(name,color,mph){
//     this.name=name
//     this.color=color
//     this.mph=mph
//     this.isAirbag=true
//     this.speed=()=>{
//       console.log(this)
//       console.log(`Speed of car ${this.name} is ${this.mph}`)
//     }
//   }

//   const bnw=new Car('bnw','blue',340)
// console.log(bnw)

//-----------------
//Closure
//Yani bu mavzuda biz avval funcsiya o'zidan o'sha o'zgaruvchini qidiradi agar function ichida bo'lmasa uni tashqaridan qidirdi
// //Agar lokal o'zgaruvchi bo'lmasa u global o'zgaruvchidan qidirishni bishlaydi

// const a=9
// function log(){
//   // const a=4
//   console.log(a)
// }
// log()

//---------------------------------------------------#21
//Call, Apply & Bind 

// function logger(speed){
//   console.log(this)
//   console.log(`My car is ${this.name}  color is ${this.color}.Max speed ${speed}`)
// }

// const car={
//   name:'BNW',
//   color:'black'
// }

// //call & apply
// logger.call(car, 300)//call va apply ning farqi faqatigina ularga qiymat berayotganimizdagina farq qiladi
// logger.apply(car ,[400])

//bind  yani bu yangi functtion chaqiradi va shu bilan birga thisni biror songa qaram qilib qoydi
// function calc(number){
//   return this*number
// }
// const multilpe2= calc.bind(2)
// console.log(multilpe2(10))
// console.log(multilpe2(23))

// const btn=document.querySelector('button')

// // btn.addEventListener('click',function(){
// //   this.style.width='400px'
// // })

// const obj={
//   x:10,
//   y:15,
//   sum:function(){
//     const logger=()=>{
//       console.log(this)
//     }  
//     logger()
//   }
// }

// obj.sum()
//strelkali funcsiya hech qanday kontextga ega emas u xar doim o'zini tepasidagi kontextga qaram bo'ldi

//-----------------------------------------------------------------------#22
//Classlar bilan ishlash

// class Car{
//   constructor(name,color,speed){
//     this.name=name
//     this.color=color
//     this.speed=speed
//   }
//   calcSpeed(){
//     return this.speed*100
//   }

// }
// //extends bu yani pasdagi class orqali biz tepadagi Car classida esa voris olamiz va sparkning boshqa xususyatlarini qo'shib qo'yamiza 
// class Spark extends Car{
//   constructor( name,speed, color,isAirbag,extraBallon){
//     super(name,color,speed)//bu ham voris olamiz
//     this.isAirbag=isAirbag
//     this.extraBallon=extraBallon
//   }
//   logger(){
//     console.log( `Name of car ${this.name} , color is ${this.color}.Is air bag there ${this.isAirbag}. Are there extraBallon ${this.extraBallon}.Car speed is ${this.speed}`)
//   }
// }

// // const bnw=new Car('BNW','Black',100)
// // console.log(bnw.calcSpeed())


// const aboutcar=new Spark('Spark',20,'white',true,5)

// aboutcar.logger()
// console.log(aboutcar.calcSpeed())
// console.log(Spark)



//--------------------------------------------------------#23
//Rest operator=>> shu berilgan qiymatlarimizni massivga olib beradi bitta joyga yig'ib beradi
//  function logger(a,b, ...rest){
//   console.log(a)
//   console.log(b)
//   console.log(rest)
//  }

//  logger(1,3,4,5,6,3,4,5,3,3)

      
//Defould qiymat berish=>>parametirning sukut qiymati
// function calc(number,def=20){
//   console.log(def+number)
// }

// calc(4)

<<<<<<< HEAD

//**************************************************************** */
//Oddiy iboralar RegExp
// new RegExp('pattern','flags')//Nu usul ham ish beradi lekin ayni damda manabau usul juda qulay ba oddiy 

// /pattern/flags


// const firstName = prompt('What is your name ?', "Name")
// const regexp = /a/g

// flaglar
// i =>bu kotta va kichik harflarni ham oladi 
// g=>butun matn bo'yicha qidiradi 


// console.log(firstName.search(regexp))//search matindagi malomotni qidiradi 
// console.log(firstName.match(regexp))//bu metod bizda flagning qiymatiga qarab masiv qaytaradi 


// const password = prompt("You password ")

// console.log(password.replace(/./g,'*'))//replace => bu metod biror bir narsaga o'zgartirish degan manoda ham keladii 
// console.log(password.replace(/\|/g,"*"))//  \=> bu orqali biz muayyan bir belgini olishimiz mumkin

// const num = '12-32-43-355-23'

// console.log(num.replace(/-/g,":"))


// const name = prompt('Name')

// const regexp  = /\D/g

// console.log(name.match(regexp))

// \d-number
// \w-word
// \s-space


// \D-not a number
// \W-not a word
// \S-not a space


// const regexp =/Oybek/gi

// if(regexp.test(name))
// {
//     alert("Salom Oybek")
// }else{
//     alert("Siz admin emassiz")
// }



//*********************************************************** */
    const car ={
        name:'bmw',
        color:"black",
        get carName(){//bu get malumotlarni oladi 
            return this.name
        },
        set carName(name)//set esa malumotlarni oladi 
        {
        this.name=name
        }
    }

    console.log(car.carName)
    console.log(car.carName= 'merc')








=======
//********************************************************************************************* */
//Map, filter, reduce.


//Map method - yangi massiv qaytaradi eski massivni qiymatini o'zgartirib
// const car = ["MeRc","bMV","aUDi"]

// const arr = car.map(item=>item.toLowerCase())

// console.log(arr)


//Filter method - bu ham yabgi filter massiv qaytaradi.Yani saralab beradi desak ham bo'ladi

// let car = ["mercedes benz" , "bmw" , "audi","rolce royce"]
// car= car.filter((item)=>item.length<5)
// console.log(car) 

//SOME/EVERY  method = boolean qiymat qaytaradi 

// const car = [1,"Oybek",true]
// console.log(car.some((item)=>typeof( item == 'number')))
// console.log(car.every((item)=>typeof( item == 'boolean')))   

// //REDUCE method = bitta qandaydir qiymat qaytaradi
// const arr = [3, 55, 34];

//             sum         current
//             3            55
//             58           34
//             sum+current = 90 

// const res = arr.reduce((sum, current) => {return  sum + current},9)
// console.log(res) // 92

// const car = ['bmw','merc','audi']

// const res = car.reduce((sum,current)=>{return `${sum},${current}`})
// console.log(res);
>>>>>>> d37ef4ec88300c49f7ed3c21275ae47a57257086




<<<<<<< HEAD
=======
 
>>>>>>> d37ef4ec88300c49f7ed3c21275ae47a57257086











