// function calculateCartPrice(value1,value2, ...num1){
//     return num1;
// }
// console.log(calculateCartPrice(100,200,300,5000,200,300));

const user = {
  username : "Mohsin ALi Salik",
  price :  136, 
};
function handleObject(anyobject){
    console.log(`The name of user is ${anyobject.username} and the price is ${anyobject.price}`);
    
};
// handleObject(user)

// handleObject({
//     username : 'Qasim',
//     price : 500,
// });

function handleArray(getArray){
    return getArray[2];
}
let myArray =[2,3,4,5,6];
console.log(handleArray(myArray));
