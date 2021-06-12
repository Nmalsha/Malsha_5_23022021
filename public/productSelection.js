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
  
  <div class="product">
    <div class="product_photo card-img-top">
   
    <img class="image"  src="${productSelected.imageUrl}" id="${productSelected._id}">
   
    </div>
    <div class="name_price card-body">
    <h3>${productSelected.name}</h3>
    
</div>
    <p class="discription">${productSelected.description}</p>
  <p>Select color</p>
  <select id="colors" ></select>
   
   
    </div>


    <button id="submit_product" type="submit">Ajouer l'article au panier ${productSelected.price/100}.00€</button>

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
   console.log(colorOption);
   //selecting html elements to be shown the colors
 const colorsOptions = document.getElementById("colors");
 //injjecting the the color options to the html element
 colorsOptions.innerHTML =colorOption;
 
 console.log(colorsOptions);

 
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
// creating fuction to save selected items in the local storage
const putProductOnLocalStorage = () =>{
  // adding selected item values to a table
  saveProductDetailsOnLocalStorage.push(getValuesOfTheProduct);

  //transform the values to the json format and send to the local storage
  localStorage.setItem("product",JSON.stringify(saveProductDetailsOnLocalStorage));
};
if(saveProductDetailsOnLocalStorage){

  putProductOnLocalStorage();
  console.log(saveProductDetailsOnLocalStorage);
  popupMessage();
}else{
  saveProductDetailsOnLocalStorage=[];
  putProductOnLocalStorage();
  popupMessage();
}

 });
 

})

