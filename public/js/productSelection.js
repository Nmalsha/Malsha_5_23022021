// catching id from the URL
const queryString_url_id = window.location.search;

//clearing the id ( id without '?')

const clearId = queryString_url_id.slice(4);


//displaying product belogns to the id

fetch("http://localhost:3000/api/teddies")
.then(function(res) {
return res.json();
  })

.then(function(data){

 
  // selecting products to display
  
  const productSelected = data.find((element)=>element._id ===clearId);
   
 
 


  document.getElementById("container_products").innerHTML = `
  
  <div class="teds teds_product">
  <img class="image image_product "  src="${productSelected.imageUrl}" id="${productSelected._id}" alt="product image">
  </div>
  <div class="detials_of_products">
  <div class=" product_details">
  <h3 id="name">${productSelected.name}</h3>
  <h3 id="name">${productSelected.price/100}.00€</h3>
  </div>
  
  <p class="discription">${productSelected.description}</p>
  <div class="customiz">
  <p>Select color</p>
  <select id="colors" class="width" ></select>
  <p> Select a quantity:</p>
<select id="quantity" class="width"> 
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
 </select>  
 </div>
  <button id="submit_product" type="submit">Ajouer l'article au panier ${productSelected.price/100}.00€</button>
  </div>
 




 `
 
 
   //getting available colors

   const colors = productSelected.colors;
   let colorOption = [];
   for (let i=0; i<colors.length;i++){
     
     colorOption = colorOption+
     `
    
     <option value = "${colors[i]}">${colors[i]}</option>
     `;
    
   }
 
   //getting the quantity
   const selectedQty = document.querySelector("#quantity");
   /*
   let qty = selectedQty.value;
   let totalP = productSelected.price/100;
   let calcP = qty * totalP;
   console.log(calcP);
   */
   //selecting html elements to be shown the colors
 const colorsOptions = document.getElementById("colors");
 //injjecting the the color options to the html element
 colorsOptions.innerHTML =colorOption;
 


 
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

