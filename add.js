// // let cnt=1
// // function sum(a){
// //     if(a==0){
// //         return cnt
// //     }
// //     cnt*=a
// //     return sum(a-1)
// // }
// // console.log(sum(5));


// function sum(a) {
//     let cnt=0
//     return function sum2(){
//         cnt+=a
//         return cnt
//     }
// }
// let sum3=sum(10)
// console.log(sum3());
// console.log(sum3());
// console.log(sum3());





// task1
// let cnt=1
// function sum(a){
//        if(a==0){
//         return cnt
//        }
//        cnt*=a
//        return sum(a-1)
// }
// console.log(sum(4));



// task2
// let cnt=0
// function sum(a){
//   if(a==0){
//     return cnt
//   }
//   cnt+=a
//   return sum(a-1)
    
// }
// console.log(sum(10));


// task3 
// function sum(a,b){
//     if(b==0){
//         return 1
//     }
//     return a*sum(a,b-1)
// }
// console.log( sum(2,3));


// task4
// function sum(){
//     let cnt=0
// return ()=>{
//     return cnt++
// }

// }
// let sum2=sum()
// console.log(sum2());
// console.log(sum2());
// console.log(sum2());
// console.log(sum2());


// task5
function sum(a){
 return (b)=>{
    return a+b
 }
}
console.log(sum(5)(3));




