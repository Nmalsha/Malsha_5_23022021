//getting the local storage data

// save  the details of products in local storage of and converting the detials (json.parse)to JSON format

let saveProductDetailsOnLocalStorage = JSON.parse(localStorage.getItem("product"));

console.log(saveProductDetailsOnLocalStorage);