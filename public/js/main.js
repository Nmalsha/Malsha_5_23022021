
//getting the products
fetch("http://localhost:3000/api/teddies")
.then(function(res) {
return res.json();
  })

.then(function(data){
  console.log(data);
 
  // creating the template to show products on html
  function tedsTemplate(teds){
   
    return `
  

<li  class=" list_margin list-group-item grid-cols-1 grid-cols-2 grid-cols-3" aria-label="Produit ${teds.name}">
<a href="products.html?id=${teds._id}" >
<figure class="teds teds_product">
<img class="image "  src="${teds.imageUrl}" id="${teds._id}" alt="product image">
<figcaption class="detials_of_products">
<div class=" product_details">
<h3 id="name">${teds.name}</h3>
<div class="stars">
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>

</div>
<div class="price">
<h3>${teds.price/100}.00€</h3>
</div>
</div>
<p class="discription">${teds.description}</p>
<p  class="colors">${teds.colors}</p>
</figcaption>
</figure>
</a>
<li>


   `
   
  }
  // injecting template to the html DOM
  document.getElementById("app").innerHTML = `
  ${data.map(tedsTemplate).join("") }
 `
 // show item details  
 

})


