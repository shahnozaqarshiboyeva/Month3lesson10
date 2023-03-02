////// Task 1 //////
// const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };
 
//   const getNames=(obj) =>{
// let text = '';
// for (let i in obj) {
//    text=text+i+':'+obj[i]+'\n'
//     }
//     return text ;
// }
// console.log(getNames(me));
  
/////---Task 2---/////
// let students=[1,2,3,4,5]
// const getObjFromArray=(arr)=>{
//     let obj = {}
//     for( let i=0; i<arr.length ; i++){
//         obj[arr[i]]=Math.pow(arr[i],2)
//     }
//     return obj
// }
// console.log(getObjFromArray(students));

// ////--Task3--////
// let obj= {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
// const getObjFromArray=(obj)=>{
//    let obj_values=Object.values(obj)
//     const initialValue = 0;
//     const sumWithInitial = obj_values.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       initialValue
//     );
//   return sumWithInitial
//   }
// console.log(getObjFromArray(obj));

// let obj= {1 : 1, 2 : 4, 3 : 9, 4 : 16 , 5 : 25}
// const getObjFromArray=(obj)=>{
//    let obj_keys=Object.keys(obj)
//     const initialValue = 0;
//     const sumWithInitial = obj_keys.reduce(
//       (a,b) => a + b
//     )
//   return sumWithInitial
//   }
// console.log(getObjFromArray(obj));

//// Task-4 ////
// let students= ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]
// const getObjFromArray=(arr) =>{
//   let obj={}
//   for ( let i=0 ; i<arr.length ; i++){
//     obj[arr[i]]=arr[i].length
//   }
//   return obj
// }
// console.log(getObjFromArray (students));
////Task 5/////
// let cost={"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// const getObjFromArray=(obj)=>{
//    let obj_values=Object.values(obj)
//     const initialValue = 0;
//     const sumWithInitial = obj_values.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       initialValue
//     );
//   return sumWithInitial
//   }
// console.log(getObjFromArray(cost));

////---Task6---///
// let foo={abc: 1, 123: 2, d: 5}
// const defineObject = (foo)=>{
//   let obj_values = Object.values(foo)
//   let arr=obj_values

// console.log(typeof arr.values)}
// console.log(defineObject(foo));

// if (typeof arr === "string") {
//   true
// } else {
//   false
// }
// }
// console.log(defineObject(foo));

//// Task 7////
// let str="Men Abdulaziz Programmerning guruhlarida o’qiyman."

// function getMaxAndMinWord(str) {
//   let maxWord = '';
//   let minWord = '';
//   let maxMinObj = {};
//   let wordMaxLength = 0;
//   let wordMinLength = 0;

//   str.split(' ').forEach((item) => {
//     if (wordMinLength === 0) {
//       wordMinLength = item.length;
//       minWord = item;
//     }

//     if (item.length > wordMaxLength) {
//       wordMaxLength = item.length;
//       maxWord = item;
//     } else if (item.length < wordMinLength) {
//       wordMinLength = item.length;
//       minWord = item;
//     }
//   });

//   maxMinObj[maxWord] = wordMaxLength;
//   maxMinObj[minWord] = wordMinLength;

//   return maxMinObj;
// }

// console.log(getMaxAndMinWord(str));
/////-Task8-/////
let obj={a: false, b: 12, c: true, d: 0}
let obj1=Object.values(obj)
console.log(obj1);
if (obj1[i] === false) {
  obj1[i]=== true
} else {
  Object.values === true
  obj1[i]=== true
}
console.log(obj);