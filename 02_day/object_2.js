// const myobject = new Object;
// const myobject1 = {

// }

// myobject1.id = "123";
// myobject1.name = "Mohsin Ali Salik";
// const regularUser = {
//     fullName :{
//         userFullName :{
//             firstname : "Mohsin Ali ",
//             lastname : "Salik",
//         }
//     }
// }
// console.log(regularUser.fullName ?.userFullName.firstname);

// const obj1 ={1:"Mohsin",2:"Qasim" };
// const obj2 = {2:"ubaid" ,4:"Aban" };

// // const obj3 = Object.assign({},obj1,obj2);
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

let user = {
    name :"Mohsin ALi Salik",
    email :"mohsinalisalik2002@gamil.com",
    id : 5,
}
let userkey = Object.keys(user)
console.log(userkey);
let userValue = Object.values(user);
console.log(userValue);
let userenteries = Object.entries(user);
console.log(userenteries);
console.log(user.hasOwnProperty('name'));



