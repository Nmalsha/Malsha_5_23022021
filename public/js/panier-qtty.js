
let saveProductDetailsOnLocalStorage = JSON.parse(localStorage.getItem("product"));


//--------------------------DISPLAY TOTAL QTY OF THE ITEMS-------------------------------
let totalItem= [];

for (let m=0;m<saveProductDetailsOnLocalStorage.length; m++){
  // getting the qty of products and converting string to number
  let qtyOfSelectedProduct = parseInt(saveProductDetailsOnLocalStorage[m].quantite);
  //adding qty to the array totalItem
  totalItem.push(qtyOfSelectedProduct);
  //console.log(totalItem);
}
 //-----------------calculating the total qty which are in the array totalItem-----------

 const reducerqty = (accumulator, currentValue) => accumulator + currentValue;
 const totalQty = totalItem.reduce(reducerqty,0);
 //console.log(totalQty);
//adding the qty count to the cart bedge
const displayTotalQtyHtml = `
<span class="item_count">${totalQty}</span> `
// inject to the page panier after the last child element
const displayQty = document.querySelector(".panier");
//const displayQtyIndex = document.querySelector(".panierIndex");
//console.log(displayQtyIndex);
console.log(displayQty);
//console.log(displayTotalQtyHtml);
//displayQty.innerHTML =displayTotalQtyHtml;
displayQty.insertAdjacentHTML("beforeend",displayTotalQtyHtml);

 //--------------------------FIN DISPLAY TOTAL QTY OF THE ITEMS-------------------------------

 