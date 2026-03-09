let url1 = "https://fakestoreapi.com/products"

let data = fetch(url1);

data.then((ans) => {
        console.log(ans);
   return ans.json()

}).then((finaldata) => {
    console.log(finaldata)
}).catch((err) => {
    console.log("there is  a error")
})




//////////==================================================================================

let url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
.then((ip) => ip.json())
.then((data) => console.log(data))

const prom=new Promise();// this is the bad syntex
console.log("see ",prom)

const promise1 = new Promise((res, rej) => {

});
console.log(promise)


let num1=0
const p = new Promise((res, rej) => {
    if (num >= 10) {
        res("Promise is completed ")
    }
    else {
        rej("Failed")
    }

});
console.log(p)



//best way
let num = 10
const promise = new Promise((res, rej) => {
    if (num >= 10) {
        res("completed ")
    }
    else {
        rej("Failed")
    }

});
console.log(promise)
let proResult;
 promise.then((ans) => { console.log("inside method",ans) }).catch((e) => { console.log("Promise Reject ", e) })
let finalOut = promise.then((ans) => {
     console.log(ans)
    proResult = ans
    return ans

}).
    catch((e) => {
         console.log(e)
        return e
    })

console.log("Promise value", finalOut)

setTimeout(() => {
    console.log(proResult)
}, 4000)



bad 
let op=fetch("https://fakestoreapi.com/products")
console.log(op)


fetch("https://fakestoreapi.com/products").then((value) => {
    console.log(value)
    return value.json();
}).then((D) => console.log(D))


let ob = fetch("https://fakestoreapi.com/products");
console.log("api call and promise come",ob)
let ans = ob.then((value) => {
    console.log(value)
    return value.json();
})
console.log("this comes in answer",ans)
let xp=ans.then((D) => console.log(D))


fetch("https://fakestoreapi.com/products").then(res => {
console.log(res)

    return res.json()
}).
    then(i => console.log(i)).catch(e => console.log("got error ", e))