let url = "https://fakestoreapi.com/products"

let data = fetch(url);

data.then((ans) => {
        console.log(ans);
   return ans.json()

}).then((finaldata) => {
    console.log(finaldata)
}).catch((err) => {
    console.log("there is  a error")
})