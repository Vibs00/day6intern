/*
 *task 1
 */
//ques1
const numbers = [5, 7, 2];
    //a) push and pop
        numbers.push(13);
        console.log(numbers);
        numbers.pop();
        console.log(numbers);
    //b) assigning new array to numbers
        // numbers = [11, 10];
        // console.log(numbers);

//ques2
let area_of_circle = (radius = 1)=>((Math.PI)*Math.pow(radius,2));

/*
 *task 2
 */
let average = (...n)=>{
    let len = n.length;
    let sum = 0;
    for(let i of n){
        sum += i;
    }
    return sum/len;
}

/*
 *task 3
 */
//ques1
const person = {
    name: "john",
    age: 34,
    city: "jaipur"
 };
 const {name:Name, age:Age, city:City} = person;
 console.log(Name,Age,City);

 //ques2
 const superhero = {...person, superpower:"Death Reaper"} ;
console.log(superhero);

/*
 *task 4
 */
//ques1
class Animal{
    constructor(voice="talk"){
        this.voice = voice;
    }
    setVoice(voice){
        this.voice = voice;
    }
    getVoice(){
        return this.voice;
    }
}

const wolf = new Animal("howl");
   console.log(wolf.getVoice());   // should return 'howl'
   wolf.setVoice('bark');
   console.log(wolf.getVoice());   // should return 'bark'


   const human = new Animal();
   console.log(human.getVoice());   // should return 'talk' as default value

   import {Animals} from "./animal.js";
   const lion = new Animals("roar"); 
    console.log(lion);  