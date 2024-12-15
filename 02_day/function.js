
// function addTwoNumber(num1,num2){
//    let result = num1+num2;
//     return result;
//     console.log("Mohsin");
    
// }

// const result = addTwoNumber(20,5);
// console.log(result);
let loginMessage = loginUserMessage("");
console.log(loginMessage);

function loginUserMessage(username){
    if(!username){
        console.log("please enter username");
        return
        
    }
return `${username} just log in`;
}

