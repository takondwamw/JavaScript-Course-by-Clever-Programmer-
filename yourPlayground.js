// let log = (val) => console.log(val);
// // const groceries = ['apple', 'banana','ginger','cookie'];
// // log(groceries);
// // groceries.push('blueberry');
// // log(groceries);
// // const person = {}
// // person.name = "takondwa Kapyola";
// // person.dob = "2023";
// // person.maritalStatus = "single";
// // log(person) 
// let $ = (elm) => document.querySelector(elm);

// // const input = $('input');
// // const display = $("span#display");

// // input.onkeydown = (e) => {
// //     // alert(`${e} was changed with ${e.value}`);
// //     console.log(e);
// //     //  = e.key;
// //     display.textContent = input.value ;
// // }


// let  d = (nums) => {
//     let result = 0;
//     for(const number of nums){
//         result += Number(number);
//         // log(number);
//     }
//     return result;
// }
// //  log(d([2,3]));
// // max number in array

// let m = (nums ) => {

//     let res =nums[0];
//     for(const num of nums){
//         res = num  > res ? num : res ;
//     }
//     return log(res);
// }

// m([1,0,3,0,5,0,6,10,1,500]);

// let frequence = (phrase)=> {
//     let res = {};
//     let letter = phrase[0];
//     let times = 0;
//     for(const l of phrase){
//         if(l in res)
//         {
//             res[l] += 1;
//         }else{
//             res[l] = 1;
//         }
//     }

//     log(res);
// }
// frequence("takondwa2 kapyola goodwelll two");

// const employees =[
//     {name: 'Takondwa',salary:250000},
//     { name: 'Patrick', salary:270000},
//     { name: 'Moses', salary:500000},
//     { name: 'Jonathan', salary:1000000},
//     { name: 'Precious', salary:95000},
//     { name: 'Joshua', salary: 10000},
// ];
// // log(
// //     employees.map( employee => employee.salary * 0.1)
// // )
// let ma = employees.filter(
//     employee => employee.salary
// )

// // log(
    
// //     ma.map(
// //         employee => employee.name
// //     ).join(" , ")
// // )

// // function sum(a,b){
// //     return a +b
// // }
// // log(
// //     ma.map( employee => employee.salary ).reduce(sum)
// // )
// // log(
// //     employees.reduce( (a,b) => a + b.salary,0)
// // )
// let $e = (elm) => document.querySelectorAll(elm);
// let i = {'red': 0 , 'green':0,'black':0};
// $e('.box').forEach( item => {
//     item.onclick = () =>{
//         i[item.dataset.color] +=1;
//         item.innerHTML = `<p class="text"> ${ i[item.dataset.color]}</p>`;
//     }
// })

// const apiURL =  "https://dog.ceo/api/breeds/image/random";

// let imgURL ="";

// // setInterval (() => {
// //     },1000);
// let getImg = $("button.getImg");

// getImg.onclick = () => {
//     // elert('clicked')
//     return fetch(apiURL).then( resp => resp.json() ).then( data => {
//         $("#img").innerHTML = `<img src="${ data.message}" style="object-fit:cover;" width="300px" height="300px"/>`;
//     }  
// )
    
// }
// // console.log("hello");

// class Car {
//     constructor (name,color,speed)
//     {
//         this.name = name;
//         this.color = color;
//         this.speed = speed;
//         this.currentSpeed = 0;
//         this.driving = true;

//     }

//     drive(){
//         // this.currentSpeed += 10;
//         // return console.log( `you are driving at ${ this.speed}`)
//         if ( this.drive ){
//             this.currentSpeed = this.speed;
//             setInterval( () => {
//                      this.currentSpeed += 1;
//                      return console.log( `you are driving at ${ this.currentSpeed}`);

//             },1000)

//         }
        


        
//     }

//     brake (){
//         this.driving = false
//         return  console.log(`car put to a halt with stopping spead as : ${this.currentSpeed}`);

//     }
// }

// const sienta = new Car('Sienta','Black',200);
// // sienta.drive();
// setTimeout(() => {
//     sienta.brake();
// },7000)
const data = {
    name:'Takondwa',
    last_name:'Kapyola',
    getName() { return console.log(this.name)},
    getLastName() { return console.log(this.last_name) },
    log() { console.log(this)}
}
data.getLastName()
let me = data.log.bind(data);
me()

let m = [1,2,3];
let y = ['b','a','c','d']
let merged = [...m,'joined',...y];
// console.table(merged)

// classes 2
class Person{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("walk");
    }
}

class Teacher extends Person {
    constructor(name , degree){
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log(`${this.name} is Teaching today`)
    }


}

// const techer = new Teacher("Takondwa","BSC in Computing")
// techer.teach();

let btn = document.querySelector('#share');


// if(navigator.share){
//     // alert('supported')
//     const share = async (val) =>{

//         try{
//             return await navigator.share(val);
//         }catch(e){

//             console.log(`%cThere was an error sharing with ${e}` ,'color:#fff;background-color:#333;font-szie:larger;font-weight:bold;padding:20px;')
//         }

//     }

    btn.addEventListener('click', async () => {
        if(navigator.share){
               
                try{
                    return await navigator.share({
                        title: 'Sharing this',
                        text: 'We are Testing The Api',
                        url: 'http://daylightmusic.net'
                })

                }catch(e){
        
                    console.log(`%cThere was an error sharing with ${e}` ,'color:#fff;background-color:#333;font-szie:larger;font-weight:bold;padding:20px;')
                }
        
          }else{
                alert("webshare is not supported");
            }
        });


    // console.log(btn);
    // btn.onClick = share({
    //     title: 'Sharing this',
    //     text: 'We are Testing The Api',
    //     url: 'http://daylightmusic.net',
    // })

// }else{
//     alert("webshare is not supported");
// }