"use strict";
// //lesson 3
// let ch = 'mychar';
// //ch = 20; //error
// ch = "myString"; //ok
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let num = 10;
// //num = "mynum"; //error
// num = 20; //ok
// let flag = false;
// //flag = "true"; //error
// flag = true;
// const circ = (diameter: number) => { //at this instant compiler doesnt know the type of diameter
//                                      //hence doesnt throw any error 
//     return diameter * Math.PI;
// }
// console.log(circ(25));
//lesson 4 - objects and arrays
// let names = ["makarand","samu","varad"];
// names.push("aditya"); //ok same data types
// //names.push(4); //error 
// let numbers = [10,20,30,40];
// numbers.push(50); //ok
// //numbers.push("mak"); //error
// let mixed = [1,2,"mak","samu",4,"varad",true,"aditya"];
// mixed.push(3);//ok
// mixed.push(true);//ok
// //but we cannot add datatype which is not defined in array
// let student = {
//     name:"Mak",
//     roll_no:1,
//     age:34
// }
// student.age = 30;//ok
// //student.name = 32; //error
// //new fields cannot be added ti the predefined object
// //student.marks = 90; //error,property marks does not exists
// //object overriding is allowed and it should be the exact replica of the previous object
// //order doesn't matter
// student = {
//     name:"samu",
//     age:32,
//     roll_no:1
// }
//lesson 5 - explicit types
//     let mystring : string ; //defined type but haven't initialized
//     //mystring = 20; //error
//     mystring = "mak"; //ok
//     let mynum : number;
//    // mynum = "324342";//error
//     mynum = 233;//ok
//     //arrays
//     let names : string[] = [];
//     //names = [12,43]; //error
//     names.push("adu");//ok
//     names = ["mak","samu"];//ok
//     //union types
//     let mixed : (string|number|boolean)[] = [];
//     mixed.push("mak");//ok
//     mixed.push(23);//ok
//     mixed.push(false);//ok
//     console.log(mixed);
//     //union types on variables
//     let uid : string|number;
//     uid="unique id";//ok
//     uid = 232323;//ok
//     //object
//     let studentOne : object;
//     studentOne={
//         name:'Mak',
//         roll_no:12,
//         marks:90
//     }
//     let studentTwo : {
//         name:string,
//         age:number,
//         skills:string[]
//     }
//     //ok
//     studentTwo={
//         name:"Mak",
//         age:30,
//         skills:["java","python"]
//     }
//lesson 6 - dynamic types
//use of any
//lesson 8
// let greet : Function;
// //greet = "Hello World"; //error 
// greet = () =>{  //ok
//     console.log("Hello world");
// }
// greet();//ok
// const add = (a:number,b:number,c:number|string = 10) : void =>{ // 'c' c?:"types" is and optional parameter
//                                                      //when it is not passed its default value is undefined
//                                                      //to have default value of 'c' c:types = value
//                                                      //when value is passed explicitly then default value gets overriden
//     console.log(a+b);       
//     console.log(c);
// }
// add(5,10,25);
// const minus = (a:number,b:number) : number =>{ 
//     //return type after the arguemetns list
//     //when function does not return anything it is by default void
//     return a+b;
// }
// let result = minus(10,45); 
// //result = "myresult";//error , compiler infers the return type of the function as the type of variable
//                     //hence conflict of types
//lesson 9 - type alias
//user defined types
// type stringOrNUmber = string|number;
// type objWithName = {name:string,uid:stringOrNUmber}
// const logDetails = (item:string,uid:stringOrNUmber) =>{
// }
// const greet = (user:objWithName)=>{
//     console.log(`${user.name} is saying hello`);
// }
//lesson 10 - function signatures
//eg-1
// let greet : (a:string,b:string)=>void; //function signature
// greet = (name:string,wish:string)=>{
//     console.log(`${name} wishes ${wish}`);
// }
// //eg-2
// let calc : (a:number,b:number,c:string) => number ;//signature
// calc = (a:number,b:number,action:string):number=>{
//     if(action=="add")
//         return a+b;
//     else if(action=="sub") 
//         return a-b;
//     else if(action=="mul")
//         return a*b;
//     return a/b;   
// }
// //eg-3
// let logDetails : (obj:{name:string,age:number})=>void;
// type obj = {name:string,age:number};
// logDetails = (person:obj):void=>{
//     console.log(`My name is ${person.name}  and i am ${person.age} years old`);
// }
//lesson-18 Generics
//Generics with objects
var addUid = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var objOne = addUid({
    name: "mak",
    age: 20,
    marks: 90
});
//console.log(objOne,name);//error, we have not specified the type of object
console.log(objOne.name); //ok, now we can access 
//Generics with interfaces
