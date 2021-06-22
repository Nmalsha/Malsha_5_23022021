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
    listOfProductPanier = listOfProductPanier + 
    `
    <div class="details_captured">
    
    <div id="objectid"  >${a}</div>
         <div> Quantité -${saveProductDetailsOnLocalStorage[a].quantite} product name ${saveProductDetailsOnLocalStorage[a].Product} color ${saveProductDetailsOnLocalStorage[a].color}</div>
         <div> price ${saveProductDetailsOnLocalStorage[a].price}- <button class="delete_item">Supprimer product</button></div>

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


console.log(saveProductDetailsOnLocalStorage);
//saveProductDetailsOnLocalStorage = saveProductDetailsOnLocalStorage.filter(el => el.idToDelete !==idToDelete  );
    //  saveProductDetailsOnLocalStorage = saveProductDetailsOnLocalStorage.filter(el => el.idToDelete !== idSelectedToDelete);
   // console.log( idToDelete);
//console.log(saveProductDetailsOnLocalStorage);
//updating the local storage after deleting
localStorage.setItem("product",JSON.stringify(saveProductDetailsOnLocalStorage));
     alert("ce produit a été suprimé");   
     window.location.href ="panier.html";
     
    })

 }

