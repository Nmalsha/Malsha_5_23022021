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


    <button id="submit_product">Ajouer l'article au panier ${productSelected.price/100}.00€</button>

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
   console.log(colorOption);
   //selecting html elements to be shown the colors
 const colorsOptions = document.getElementById("colors");
 //injjecting the the color options to the html element
 colorsOptions.innerHTML =colorOption;
 
 console.log(colorsOptions);

 
//starting adding products to the cart
 //selecting the btn
const btnpanier = document.querySelector("#submit_product");
 //console.log(productSelected);  
 btnpanier.addEventListener("click",(Event)=>{
   Event.preventDefault();

   //getting the selected color

   const selectedColor = document.querySelector("#colors");

   //getting the values of the product
 let  getValuesOfTheProduct ={
  Product:productSelected.name,
  quantite: 1,
  price:productSelected.price/100,
color : selectedColor.value,
 }
 console.log(getValuesOfTheProduct);
 });
 

})

// 


