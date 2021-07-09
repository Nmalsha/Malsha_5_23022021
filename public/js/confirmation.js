// catching the id came from the server (api "https://restapi.fr/api/test")
const sevedId= localStorage.getItem("sevedId");
console.log(sevedId);

//catching total price from the server
const prixTotal = localStorage.getItem("prixTotal");
console.log(prixTotal);

//selecting the dom to display
const displayConfirmation = document.querySelector("#container_confrimation");

const struectureHtmlConfirmation =  `

<h3>Merci pour votre commande</h3>
  <p class="p_1">Votre Commande   # <span class="num_command"> ${sevedId}</span>   été bien enregistraire</p>
  <p>Le montant de votre command est de : <span class ="ammout">${prixTotal}€</span></p>
  <p>A bientot !! </p> 
`;
//injection Html
displayConfirmation.insertAdjacentHTML("afterbegin",struectureHtmlConfirmation); 

//delete all item from the local storage
//localStorage.clear;

function cleairLocalStorage(key){
    localStorage.removeItem(key);
};

cleairLocalStorage("prixTotal");
cleairLocalStorage("product");
cleairLocalStorage("sevedId");