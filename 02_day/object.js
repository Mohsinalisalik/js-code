
const mySym = Symbol("Mohsin");
const jsUser = {
   name :"Mohsin Ali Salik",
   [mySym] : "qasim"
}
// object.create
// Object.freeze(jsUser)
jsUser.hello = function() {
   console.log("Hello js user");
   
}
jsUser.hello2 = function() {
   console.log(`Hello js user ${this.name}`);
   
}
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser[mySym]);

let class1 = new Object();
class1.name = "Mohsin";
console.log(class1);
console.log(jsUser);
console.log(jsUser.hello());
console.log(jsUser.hello2());






