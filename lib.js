//console.log("hello, Node");

function myFunc(firstFun,secFun) {
   
    const opObj={
        path:'www.mybuh.com',
        prefix:'output=',
        sufix:'$'
    }
   
    try {
       firstFun(opObj) 
    } catch (err) {
        secFun(err)
        
    }
    
}

module.exports.myFunc=myFunc