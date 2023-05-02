/*
// console.log("Hello World")
// var let const
//var a=10;
//console.log(a);
//var a=20
//console.log(a);

//ARTHMETIC OPERATORS
//let a=10;
//let b=20;
//console.log(a+b);
//let c=a+b;

//ASSIGNMENT OPERATORS
a=10;
b="10";
//==only checks the value
if(a==b){
    console.log(true)
}
else{
    console.log(false)
}
//===also check the datatype
if(a===b){
    console.log(true)
}
else{
    console.log(false)
}

let f="irene";
let l="grace";
//to concat fandl
console.log(`${f} ${l}`);
console.log(`my name is ${f} ${l}`)

//object
let car = {
    model:"celerio",
    color :"white",
    price :1000000
}
console.log(car);
console.log(car.color);//to print any one property
console.log(`my car is ${car.color} ${car.model}`)

let person = {
    name :"irene",
    college : "christ college",
    class :"cs",
    address : {
        housename :"xyz",
        street :"qwe"
    }

}
console.log(person);
console.log(`${person.name} ${person.address.housename}`);

//ARRAY (collection of datatype(it can be diffferent datatype))
let fruits=["apple","mango","orange",10]
console.log(fruits)
console.log(fruits[0])
console.log(fruits.length)
fruits[3]="grapes"
fruits.push("pineapple")
fruits.unshift("20")
fruits.pop();
fruits.shift();
console.log(fruits)

let todo = [
    {
        id :1,
        task :"buy book"
    },
    {
        id :2,
        task :"xyz"
    },
    {
        id :3,
        task :"pqrs"
    }
]
console.log(todo)
console.log(todo[0].id)
 function addTwoNumbers(a,b)
{
    console.log(a+b);
}
addTwoNumbers(10,20);
function sub(a,b)
{
    console.log(a-b);
}
sub(20,10)
function mult(a,b)
{
    console.log(a*b)
}
mult(10,20)
function div(a,b){
    console.log(a/b)
}
div(20,10)
add=(a,b)=>
{
    console.log(a+b)
}
add(30,20)

sub=(a,b)=> console.log(a-b);
sub(30,10)

comb=(a,b)=>{if((a+b)>10)
    {console.log("small")}
    else{
        console.log("big")
    }

}
comb(20,30)*/

comb=(a,b)=>((a+b)<10)?console.log("small"):console.log("big");
comb(20,30)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers)

printnum=(a)=>{
    for(let i of a)
    {
        console.log(a[i])
    }
}
printnum(numbers);

pnum=(a)=>{
    let i=0
    do{
        console.log(a[i])
        i++
    }while(i<a.length)
}
pnum(numbers)
