
fetch("http://localhost:3000/api/teddies")
.then(function(res) {
return res.json();
  })

.then(function(data){

 
  // showing image
  function tedsTemplate(teds){
   
    return `
    <a href="products.html?id=${teds._id}" >
    <div class="teds">
    <div class="teds_photos card-img-top">
   
    <img class="image"  src="${teds.imageUrl}" id="${teds._id}">
   
    </div>
    <div class="name_price card-body">
    <h3>${teds.name}</h3>
    <h3>${teds.price/100}.00€</h3>
</div>
    <p class="discription">${teds.description}</p>
    <p  class="colors">${teds.colors}</p>
    </div>
    <a>
   `
   
  }
  document.getElementById("app").innerHTML = `
  ${data.map(tedsTemplate).join("") }
 `
 // show item details  
 

})



  //div.innerHTML = 
  //div.innerHTML = '+productName+';
  //mainContainer.appendChild(div);
  
//}

//});