//getting the local storage data

// save  the details of products in local storage of and converting the detials (json.parse)to JSON format

let saveProductDetailsOnLocalStorage = JSON.parse(localStorage.getItem("product"));

//-------------------------AFFICHAGE DE PRODUITS DU PANIER---------------
// slecting the html elemant to diplay products

const displayElement = document.querySelector("#container_panier");

  // cheking if the local storage has the data or not
  if(saveProductDetailsOnLocalStorage===null ||saveProductDetailsOnLocalStorage ==0){
const cartEmpty =  `
    
<div class="container_panier_vide">
<div> Le Panier est vide</div>
</div>
`;
displayElement.innerHTML =cartEmpty;

}else{
// if has data

let listOfProductPanier = [];

for ( a = 0;a<saveProductDetailsOnLocalStorage.length;a++){

  //calculating total price
  let costOfone = saveProductDetailsOnLocalStorage[a].price;
  let totalPcs = saveProductDetailsOnLocalStorage[a].quantite;
  let totalPrice = costOfone * totalPcs;
  //console.log(totalPrice);
    listOfProductPanier = listOfProductPanier + 
    `
    <div class="details_captured">
    <div id="objectid"  >${a}</div>
    <div class="tdata">
    <table class="data_table">
    <tbody class="data">
     <tr class="tablerow">
      <td class="name">${saveProductDetailsOnLocalStorage[a].Product}</td>
      <td class="qty">${saveProductDetailsOnLocalStorage[a].quantite}</td>
      <td class="color">${saveProductDetailsOnLocalStorage[a].color}</td>
      <td class="price">${saveProductDetailsOnLocalStorage[a].price}</td>
      <td class="Tprice">${totalPrice}</td>
    </tr>
    </tbody>
    </table>
    </div>
  <div> <button class="delete_item">Supprimer product</button></div>
</div>




         
     `
     
     ;
     
   }

     if(a==saveProductDetailsOnLocalStorage.length){

        displayElement.innerHTML = listOfProductPanier;
       
     }
    
     
     
   

}







// --------------------deleting the selected product-------------------------




let deleteProduct = document.querySelectorAll(".delete_item");

 for ( let b=0; b<deleteProduct.length; b++){

   
    deleteProduct[b].addEventListener("click" , (Event) =>{
      //console.log("test");
     
      
        Event.preventDefault();
        
        // detecting the id of the clicked product
        
        let idToDelete = b;
       // deleting the element using filter method
      
      
       saveProductDetailsOnLocalStorage.splice(idToDelete,1);



//saveProductDetailsOnLocalStorage = saveProductDetailsOnLocalStorage.filter(el => el.idToDelete !==idToDelete  );
    //  saveProductDetailsOnLocalStorage = saveProductDetailsOnLocalStorage.filter(el => el.idToDelete !== idSelectedToDelete);
   // console.log( idToDelete);
//console.log(saveProductDetailsOnLocalStorage);
//updating the local storage after deleting
localStorage.setItem("product",JSON.stringify(saveProductDetailsOnLocalStorage));
     alert("ce produit a été suprimé");   
     window.location.href ="panier.html";
     
    });


    
    
 }
 //------------------- Adding delete button to empty the cart --------------------

const btn_suprimer_panier =`
<button class= "btn_suprimer_panier" > Vider la panier</button> `
// inserting element to the html

displayElement.insertAdjacentHTML ("afterend",btn_suprimer_panier);

const allItemDeletebtn = document.querySelector(".btn_suprimer_panier");
//deleting hole cart
allItemDeletebtn.addEventListener("click",(e)=>{
  e.preventDefault;
  localStorage.removeItem("product");
  //giving the deleting alert
  alert("le panier à été vidé");
  // refreshing the page
  window.location.href ="panier.html";

})
//------------------- FIN Adding delete button to empty the cart --------------------


//--------------------- Calculating total cost of the cart---------------------------

 let prixTotal =[];
 for (let m=0;m<saveProductDetailsOnLocalStorage.length; m++){
  //getting the price of the product
let PriceOfProduct =saveProductDetailsOnLocalStorage[m].price;
// getting the qty of products
let qtyOfSelectedProduct = saveProductDetailsOnLocalStorage[m].quantite;
//calculating the total price of products
let priceOfProducts =PriceOfProduct*qtyOfSelectedProduct;
console.log(priceOfProducts);
//adding products price to the array PrixTotal
prixTotal.push(priceOfProducts);

 }  

 //calculating the price which are in the array PrixTotal

 const reducer = (accumulator, currentValue) => accumulator + currentValue;
 const prixTotalCal = prixTotal.reduce(reducer,0);
 console.log(prixTotalCal);
//display total cost in html
const displayTotalPriceHtml = `
<div class= "display_total_cost" > Prix Total du panier :${prixTotalCal}</div> `
// inject to the page panier after the last child element
displayElement.insertAdjacentHTML ("beforeend",displayTotalPriceHtml);
