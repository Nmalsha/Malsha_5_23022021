//getting the local storage data

// save  the details of products in local storage of and converting the detials (json.parse)to JSON format

let saveProductDetailsOnLocalStorage = JSON.parse(localStorage.getItem("product"));

//-------------------------DISPLAY PRODUCTS CART---------------
// slecting the html elemant to diplay products

const displayElement = document.querySelector("#container_panier");

  // cheking if the local storage has the data or not
  if(saveProductDetailsOnLocalStorage===null ||saveProductDetailsOnLocalStorage ==0){
    // if no data
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
  //Injecting data to the html
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
  <div class="button_box"> <button class="delete_item" aria-label="suprimer le produit"><i class="fa fa-trash" aria-hidden="true"></i>
  </button></div>
</div>




         
     `
     
     ;
     
   }

     if(a==saveProductDetailsOnLocalStorage.length){

        displayElement.innerHTML = listOfProductPanier;
       
     }
    
     
     
   

}




//-------------------------FIN DISPLAY PRODUCTS CART---------------


// --------------------DELETE SELECTED PRODUCT-------------------------


//selecting the product from html element

let deleteProduct = document.querySelectorAll(".delete_item");

 for ( let b=0; b<deleteProduct.length; b++){

   //adding click event to the selected product
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
 // --------------------FIN DELETE SELECTED PRODUCT--------------------------

 //------------------- ADDING ONE DELETE BUTTON TO DELETE FULL CART  --------------------

const btn_suprimer_panier =`
<button class= "btn_suprimer_panier" > Vider la panier</button> `
// inserting element to the html

displayElement.insertAdjacentHTML ("beforeend",btn_suprimer_panier);

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
//------------------- FIN ADDING ONE DELETE BUTTON TO DELETE FULL CART --------------------


//--------------------- CALCULATE THE COST OF THE CART ---------------------------

 let prixTotal =[];
 for (let m=0;m<saveProductDetailsOnLocalStorage.length; m++){
  //getting the price of the product
let PriceOfProduct =saveProductDetailsOnLocalStorage[m].price;
// getting the qty of products
let qtyOfSelectedProduct = saveProductDetailsOnLocalStorage[m].quantite;
//calculating the total price of products
let priceOfProducts =PriceOfProduct*qtyOfSelectedProduct;

//adding products price to the array PrixTotal
prixTotal.push(priceOfProducts);

 }  

 //calculating the price which are in the array PrixTotal

 const reducer = (accumulator, currentValue) => accumulator + currentValue;
 const prixTotalCal = prixTotal.reduce(reducer,0);

//display total cost in html
const displayTotalPriceHtml = `
<div class= "display_total_cost" > Prix Total du panier :${prixTotalCal}</div> `
// inject to the page panier after the last child element
displayElement.insertAdjacentHTML ("beforeend",displayTotalPriceHtml);

//--------------------- FIN CALCULATE THE COST OF THE CART---------------------------


//----------------------DISPLAY FORM --------------------------------------------

const displayFormHtml = ()=>{
// selecting the DOM for display the form

const displayForm = document.querySelector("#container_panier");
const structureForm = `
<div class="form_container">
   <form id="form-to-check">
      <p>
         <label for="nom" class="label_display" >Nom : <input type="text" name="nom" id="nom" aria-label="ajouter votre nome"/></label><br />
        <span id="nom_manque" class="champ_manque"></span>
       </p>
       <p>
         <label for="prénom" class="label_display" >Prénom : <input type="text" name="prenom" id="prenom" aria-label="ajouter votre Prénom"/></label><br />
         <span id="prenom_manque" class="champ_manque"></span>
       </p>
      <p>
        <label for="Adresse" class="label_display" >Adresse : <input type="text" name="adresse" id="adresse" aria-label="ajouter votre Adresse" /></label><br />
        <span id="Address_manque" class="champ_manque"></span>
      </p>
      <p>
        <label for="Email" class="label_display" >Email : <input type="email" name="email" id="email" aria-label="ajouter votre Email" required /></label>
        <span id="email_manque" class="champ_manque"></span>
        </p>
      <p>
         <label for="Code postal" class="label_display" >Code postal : <input type="text" name="codepostal"  id="codepostal" aria-label="ajouter votre Code postal" required /></label>
         <span id="Codepostal_manque" class="champ_manque"></span>
         </p>
       <p>
         <label for="Ville" class="label_display" >Ville : <input type="text" name="ville" id ="ville" aria-label="ajouter votre Ville" required /></label>
         <span id="Ville_manque" class="champ_manque"></span>
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

// display the form
displayFormHtml();

//----------------------FIN DISPLAY FORM --------------------------------------------
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


//------------------ FORM CONTROL-------------------------------------------------------------------------------------
// text alert separatation for nom , prenom

const textAlert = (value) =>{
return `${value}:Chiffre et sybole ne sont pas autorisé \n ne pas dépasser 20 caractéres, minimum 3 caractéres
 `
}

// testing nom and prenom   together
const regexNomPrenom = (value)=>{
return /^[A-Za-z]{3,20}$/.test(value);
}

//testing code postal

const regexcodePostal = (value)=>{
  return /^[0-9]{5}$/.test(value);
  }

  //testing address 
  const regexAddress = (value)=>{
    return /^[A-Za-z0-9\s]{5,50}$/.test(value);
    }
//testing ville
const regexVille = (value)=>{
  return /^[A-Za-z0-9\s]{3,15}$/.test(value);
  }

  // testing the email
  const regexEmail = (value)=>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };

//function controling the validation of the Nom
function controleNom(){
const nom = formValues.Nom;

if(regexNomPrenom(nom)){
  document.querySelector("#nom_manque").textContent = "";

 return true;
}else{
  document.querySelector("#nom_manque").textContent = "Veuillez correctement replir ce champ";
  alert(textAlert(nom));
  return false;
  }
  
};
// function controling the validation of the prenom
function controleprenom(){


  //controling the validation of the prenom
  const Prénom = formValues.Prénom;
  //console.log(nom);
  if(regexNomPrenom(Prénom)){
    document.querySelector("#prenom_manque").textContent = "";
  
   return true;
  }else{
    document.querySelector("#prenom_manque").textContent = "Veuillez correctement replir ce champ";
    alert(textAlert(Prénom));
    return false;
    }
    
  };
// function controling the code postal
function controlCodePostal () {
const codepostal = formValues.codepostal;
 
  if(regexcodePostal(codepostal)){
    document.querySelector("#Codepostal_manque").textContent = "";
  
   return true;
  }else{
    document.querySelector("#Codepostal_manque").textContent = "codePostal: doit étre composé de 5 chiffres";
    alert("codePostal: doit étre composé de 5 chiffres");
    return false;
    }
    
  };
// function controling the address
function controlAddress () {
  const Adresse = formValues.Adresse;

    if(regexAddress(Adresse)){
      
      document.querySelector("#Address_manque").textContent = "";
     return true;
    }else{
      document.querySelector("#Address_manque").textContent = "Address: non valide";
      alert("Address: non valide");
      return false;
      }
      
    };
//fucntion controling ville 
function controlVille () {
  const Ville = formValues.Ville;

    if(regexVille(Ville)){
      
      document.querySelector("#Ville_manque").textContent = "";
     return true;
    }else{
      document.querySelector("#Ville_manque").textContent = "Veuillez correctement replir ce champ";
      alert("Veuillez correctement replir ce champ");
      return false;
      }
      
    };

  // function controling the email
function conrolEmail (){
  const Email = formValues.Email;
  
  if(regexEmail(Email)){
    
    document.querySelector("#email_manque").textContent = "";
   return true;
  }else{
    document.querySelector("#email_manque").textContent = "E-mail n'ai pas valide";
    alert("E-mail n'ai pas valide");
    return false;
    }

}
//contorl if the nom ,prenom, address, code postal and  email filleds correct
if(controleNom() && controleprenom() && controlAddress () && controlCodePostal() && controlVille() && conrolEmail()  ){
// put object "formValues" to the local storage transoforming to the json format using stringify ( if the form filled correctly)
localStorage.setItem("formValues", JSON.stringify(formValues));
//console.log(localStorage);
//window.location.href="confirmation.html";
}else{
  
alert("Veuillez bien remplir le formulaire");

};
//------------------ FIN form control-------------------------------------------------------------------------------------



//put the form data and the product selected details to a object

const detailsToSend= {
  saveProductDetailsOnLocalStorage,
  formValues
}

// ----------------------------SENDING THE OBJECT "detailsToSend" TO THE SERVER----------------------------------------
const promise1 = fetch("https://restapi.fr/api/test",{
  method:"POST",
  body:JSON.stringify(detailsToSend),
  headers:{
    "content-type" :"application/json", 
  },

});
//see the result of the server in the console
promise1.then(async(reponse)=>{
  try{
   
    const content = await reponse.json();
    
   

  }catch(e){
    console.log(e);
  }
})
// see the real result in the server
const promise2 = fetch("https://restapi.fr/api/test");
promise2.then(async(reponse)=>{
  try{
    console.log("promise2");
   console.log(promise2);
    const serverContent = await reponse.json();
    console.log("serverContent");
    console.log(serverContent);
   

  }catch(e){
    console.log(e);
  }
})
});

// ----------------------------FIN SENDING THE OBJECT "detailsToSend" TO THE SERVER----------------------------------------

//------------------Keep the filled data on the form even after refreshing the page--------------------------------
// get the form value from the local storage

const getFormValuesFromLocalStorage = localStorage.getItem("formValues");

// converting caracters to an object javascript

const getFormValuesFromLocalStorageObject = JSON.parse(getFormValuesFromLocalStorage);
if(getFormValuesFromLocalStorageObject == null){

}else{
// put the colected values to the form fileds using fuction
document.querySelector("#nom").setAttribute('value',getFormValuesFromLocalStorageObject.Nom);
document.querySelector("#prenom").setAttribute('value',getFormValuesFromLocalStorageObject.Prénom);
document.querySelector("#adresse").setAttribute('value',getFormValuesFromLocalStorageObject.Adresse);
document.querySelector("#email").setAttribute('value',getFormValuesFromLocalStorageObject.Email);
document.querySelector("#codepostal").setAttribute('value',getFormValuesFromLocalStorageObject.codepostal);
document.querySelector("#ville").setAttribute('value',getFormValuesFromLocalStorageObject.Ville);

}

//console.log(getFormValuesFromLocalStorageObject);
//------------------FIN Keep the filled data on the form even after refreshing the page--------------------------------






