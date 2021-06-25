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
  <div> <button class="delete_item" aria-label="suprimer le produit">Supprimer product</button></div>
</div>




         
     `
     
     ;
     
   }

     if(a==saveProductDetailsOnLocalStorage.length){

        displayElement.innerHTML = listOfProductPanier;
       
     }
    
     
     
   

}




//-------------------------FIN AFFICHAGE DE PRODUITS DU PANIER---------------


// --------------------SUPRIMER LE PRODUIT SELECTIONER-------------------------




let deleteProduct = document.querySelectorAll(".delete_item");

 for ( let b=0; b<deleteProduct.length; b++){

   
    deleteProduct[b].addEventListener("click" , (Event) =>{
      //console.log("test");
     
      
        Event.preventDefault();
        
        // detecting the id of the clicked product
        
        let idToDelete = b;
       // deleting the element using splice method
      
      
       saveProductDetailsOnLocalStorage.splice(idToDelete,1);



//updating the local storage after deleting
localStorage.setItem("product",JSON.stringify(saveProductDetailsOnLocalStorage));
     alert("ce produit a été suprimé");   
     window.location.href ="panier.html";
     
    });


    
    
 }
 // --------------------FIN SUPRIMER LE PRODUIT SELECTIONER-------------------------

 //------------------- METTRE UNE BUTTON POUR SUPRIMER TOUTES LES PANIER --------------------

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
//------------------- FIN METTRE UNE BUTTON POUR SUPRIMER TOUTES LES PANIER --------------------


//--------------------- CALCULER LES PRIX TOTAL DU PANIER---------------------------

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

//--------------------- FIN CALCULER LES PRIX TOTAL DU PANIER---------------------------


//----------------------AFICHAGE DE FORMULAIRE--------------------------------------------

const displayFormHtml = ()=>{
// selecting the DOM for display the form

const displayForm = document.querySelector("#container_panier");
const structureForm = `
<div class="form_container">
   <form id="form-to-check">
      <p>
         <label for="nom" class="label_display" >Nom : <input type="text" name="nom" id="nom" aria-label="ajouter votre nome"/></label><br />
        
       </p>
       <p>
         <label for="prénom" class="label_display" >Prénom : <input type="text" name="prenom" id="prenom" aria-label="ajouter votre Prénom"/></label><br />
        
       </p>
      <p>
        <label for="Adresse" class="label_display" >Adresse : <input type="text" name="adresse" id="adresse" aria-label="ajouter votre Adresse" /></label><br />
       
      </p>
      <p>
        <label for="Email" class="label_display" >Email : <input type="email" name="email" id="email" aria-label="ajouter votre Email" required /></label>
      </p>
      <p>
         <label for="Code postal" class="label_display" >Code postal : <input type="text" name="codepostal"  id="codepostal" aria-label="ajouter votre Code postal" required /></label>
       </p>
       <p>
         <label for="Ville" class="label_display" >Ville : <input type="text" name="ville" id ="ville" aria-label="ajouter votre Ville" required /></label>
       </p>
      <p>
         <button type="submit"  id="submitform-btn" aria-label="cliquez ici pour procéder le paiement">Procéder au paiement</button>
      </p>
    </form>
   
  </div>
       


`;
// inject to the page panier after the last child element

displayForm.insertAdjacentHTML("afterend",structureForm);

};
//-----------------------------------FORMULAIRE --------------------------------
// display the form
displayFormHtml();
// select the button to send the form
const sendForm = document.querySelector("#submitform-btn");
// adding event listner
sendForm.addEventListener("click",(e)=>{
  e.preventDefault();
// getting the form values

const formValues={
  Nom:document.querySelector("#nom").value,
  Prénom:document.querySelector("#prenom").value,
  Adresse:document.querySelector("#adresse").value,
  Email:document.querySelector("#email").value,
  codepostal:document.querySelector("#codepostal").value,
  Ville:document.querySelector("#ville").value
}

// put object "formValues" to the local storage transoforming to the json format using stringify
localStorage.setItem("formValues", JSON.stringify(formValues));

//put the form data and the product selected details to a object and send in to the server

const detailsToSend= {
  saveProductDetailsOnLocalStorage,
  formValues
}

// sending the object "detailsToSend" to the server
console.log(detailsToSend);
})




