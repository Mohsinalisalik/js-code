// // // // // const map = new Map();
// // // // // map.set("Pkr","Pakistan");
// // // // // map.set("fra","France");
// // // // // map.set("Ind","India");
// // // // // map.set("Pkr","Pakistan");
// // // // // console.log(map);

// // // // // for (const [key,value] of map) {
// // // // //  console.log(key);
 
    
// // // // // }

// // // // const mycoding = [
// // // //     {
// // // //         'pkr':"pakistan",
// // // //         'c#' : "csharp"
// // // //     },
// // // //     {
// // // //         'pkr':"pakistan",
// // // //         "rec" : "react"

// // // //     },
// // // //     {
// // // //         'pkr':"pakistan",
// // // //         "css": "Cascading style sheet"
// // // //     }

// // // // ]

// // // // const myvalue = mycoding.forEach((item)=>{
// // // //     console.log(item.pkr);
    
// // // // })

// // // // console.log(myvalue);

// // // const num = [1,2,3,4,5,6,7,8,9];

// // // // const newNum = num.filter((number) =>{
// // // //     return number>4;
// // // // } )
// // // // console.log(newNum);

// // // const newnumber =[];

// // // num.forEach(element => {
// // //     if(element>4){
// // //         newnumber.push(element)
// // //     }
// // // });
// // // console.log(newnumber);

// // const books = [
// //     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
// //     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
// //     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
// //     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
// //     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
// //     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
// //     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
// //     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
// //     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// //   ];

// // // const userbook = books.filter((bk) => bk.publish===1981 );
// // // console.log(userbook);

// let number = [1,2,3,4,5,6,7,8,9,10];

// let newNum = number.map( (num)=>{
//    return num+10;
// } )
// console.log(newNum)

const cart = [
   { item: 'Laptop', price: 1000, quantity: 1 },
   { item: 'Phone', price: 500, quantity: 2 },
   { item: 'Headphones', price: 200, quantity: 3 }
 ];

 const totalcost = cart.reduce((total,currentItem)=>{
   return total+currentItem.price*currentItem.quantity
 },0);
 console.log(totalcost);
 