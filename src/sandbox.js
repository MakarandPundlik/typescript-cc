// //lesson 3
// let ch = 'mychar';
// //ch = 20; //error
// ch = "myString"; //ok
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
// 
