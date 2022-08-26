//==========================  promise  =============================
 
// const person = new Promise((resolve,reject)=>{
//     let req = true;
//     if(req == false)
//     {
//         resolve("request Success");
//     }
//     else{
//         reject("request rejected")
//     }
// })

// person.then(value=>console.log(value),error=>console.log(error))


// ======================= chaining ====================================

// const promiseObj = new Promise((resolve,reject)=>{
//     let num = 10;
//     resolve(num);
// }).then((value)=>{console.log(value);return value+10}).then(num=>console.log("second",num))

// ===================== catch() ===========================

// const promise = new Promise((resolve,reject)=>{
//     let req = false;
//     if(req==true){
//         resolve("Succesfully resolved");
//     }
//     else{
//         reject("rejected");
//     }
// }).then(value=>console.log(value)).catch(error=>console.log(error))


// ======================= finally() ==================================

// const promise = new Promise((resolve,reject)=>{
//     let req = false;
//     if(req==true){
//         resolve("Succes");
//     }
//     else{
//         reject("reject");
//     }
// }).then(value=>console.log(value)).catch(error=>console.log(error)).finally(()=>console.log("cleaned"))



// ============================= chaining ===================================

// const promise = new Promise((resolve,reject)=>{
//     let num = 10;
//     resolve(num);
// }).then(value=>{console.log(value); return value+10}).then(value=>{console.log(value);return value+10}).then(()=>{throw new Error("Error found")}).catch(error=>console.log(error))


// ======================== async and await ============================

// async function test(){
//     return "Hello"
// }
// test().then(result=>console.log(result))





