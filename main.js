let promise = new Promise(function (resolve,reject) {
    resolve("GOOD")
    reject("Badd")
})


function myFunc(state) {
    return function (resolve,reject) {
        if (state==="success")
           return resolve(state)
        return reject(state)
    }
}



let promise_1= new Promise(myFunc ("success"))
    


/* рабочий пример
let promise= new Promise(function (resolve,reject) {
    const data="success"
    resolve(data)
    
}) */

promise_1.then((result)=>{
    console.log(`Good ${result}`)
}).catch((result)=>{
    console.log(`Bad ${result}`)
}).finally((result)=>{
    console.log("Всегда выполняется")
})