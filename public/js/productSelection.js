// catching id from the URL
const queryString_url_id = window.location.search;

//clearing the id ( id without '?')

const clearId = queryString_url_id.slice(4);
//console.log(clearId);

//displaying product belogns to the id

fetch(HOST + API.teddies)
.then(function(res) {
return res.json();
  })

.then(function(data){

 
  // selecting products to display
  
  const productSelected = data.find((element)=>element._id ===clearId);
  console.log(productSelected);
 
 


  document.getElementById("container_products").innerHTML = `
  
  <div class="teds teds_product">
  <img class="image image_product "  src="${productSelected.imageUrl}" id="${productSelected._id}" alt="product image">
  </div>
  <div class="detials_of_products">
  <div class=" product_details">
  <h3 class="name">${productSelected.name}</h3>
  <h3 class="name">${productSelected.price/100}.00€</h3>
  </div>
  
  <p class="discription">${productSelected.description}</p>
  <div class="customiz">
  <p class="option_style">Choisir le couleur : </p>
  <select id="colors" class="width" ></select>
  <p class="option_style"> Choisir le quentité :</p>
<select id="quantity" class="width"> 
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
 </select>  
 </div>
 <div class="btn_wrappe">
  <button id="submit_product" type="submit">Ajouer l'article au panier ${productSelected.price/100}.00€</button>
  </div>
  </div>
 




 `
 
 
   //getting available colors/lenses/varnish

const items = Object.keys(productSelected);
let item = productSelected[items[0]];
let itemOption =[]
 for (let i = 0; i< item.length; i++){
itemOption = itemOption+
     
     `
    
     <option value = "${item[i]}">${item[i]}</option>
     `;
 }

/*
   const colors = productSelected.colors;
   let colorOption = [];
   for (let i=0; i<colors.length;i++){
     
     colorOption = colorOption+
     
     `
    
     <option value = "${colors[i]}">${colors[i]}</option>
     `;
    
   }
*/
   //selecting html elements to be shown the colors
 const itemOptions = document.getElementById("colors");
 //injjecting the the color options to the html element
 itemOptions.innerHTML =itemOption;
 
   //getting the quantity
   const selectedQty = document.querySelector("#quantity");
   
  
   
 


 
//starting adding products to the cart
 //selecting the btn
const btnpanier = document.querySelector("#submit_product");
 //event listner
 btnpanier.addEventListener("click",(Event)=>{
   Event.preventDefault();

   //getting the selected color

   const selectedColor = document.querySelector("#colors");

   //getting the values of the product
 let  getValuesOfTheProduct ={
   ProductId:productSelected._id,
  Product:productSelected.name,
  quantite: selectedQty.value,
  price:productSelected.price/100,
color : selectedColor.value,
 }
 //console.log(getValuesOfTheProduct);
 // save  the details of products in local storage of and converting the detials (json.parse)to JSON format

let saveProductDetailsOnLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(saveProductDetailsOnLocalStorage);
// function for the popup message
const popupMessage = () =>{
  if(window.confirm( `${productSelected.name} color :${selectedColor.value} a bien été ajouté au panier consultez le panier OK ou revenir a le acceuil Cancel `)){
window.location.href = "panier.html";
  }else {
    window.location.href = "index.html";
  }
}
// creating function to save selected items in the local storage
const putProductOnLocalStorage = () =>{
  // adding selected item values to a table
  saveProductDetailsOnLocalStorage.push(getValuesOfTheProduct);

  //transform the values to the json format and send to the local storage
  localStorage.setItem("product",JSON.stringify(saveProductDetailsOnLocalStorage));
};
if(saveProductDetailsOnLocalStorage){

  putProductOnLocalStorage();
  
  popupMessage();
}else{
  saveProductDetailsOnLocalStorage=[];
  putProductOnLocalStorage();
  popupMessage();
}

 });
 

})

