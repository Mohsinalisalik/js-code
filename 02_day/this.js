
// const user ={
//     username : "Mohsin Ali Salik",
//     age : 23,

//     wellcomeMessage : function(){
//         console.log(`${this.username}, welcome to our webiste`);
//         // console.log(this);
        
//     },
// }
// // user.wellcomeMessage();
// // user.username = "qasim";
// // user.wellcomeMessage();
//          console.log(this);
// function chai () {
//     let name = "qasim ali khan";
//     console.log(this.name);
    
// }
// chai();
//  ************************ arrow function**********
const chai = () => {
    let name = "qasim ali khan";
    console.log(name);
    
}
// chai();

// let addTwo = (num1,num2) => {
//       console.log(num1+num2)
// }
let addTwo = (num1,num2) => num1+num2;



console.log(addTwo(15,20));
