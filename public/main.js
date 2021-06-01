
fetch("http://localhost:3000/api/teddies")
.then(function(res) {
return res.json();
  })

.then(function(data){
  console.log(data);
  /*
  var nameContainer0 = document.getElementById("name0");
  var nameContainer1 = document.getElementById("name1");
  var nameContainer2 = document.getElementById("name2");
  var nameContainer3 = document.getElementById("name3");
  var nameContainer4 = document.getElementById("name4");

  var imageContainer0 = document.getElementById("containerimg");  
  //var priceContainer = document.getElementById("price");
 //for( var i = 0, l=data.length; i< l; i++){
  var p = document.createElement("p");
  p.innerHTML =  data[0].name;
    nameContainer0.appendChild(p);

    var div = document.createElement("div");
    div.innerHTML =  data[1].name;
    nameContainer1.appendChild(div);

    var div = document.createElement("div");
    div.innerHTML =  data[2].name;
    nameContainer2.appendChild(div);

    var div = document.createElement("div");
    div.innerHTML =  data[3].name;
    nameContainer3.appendChild(div);

    var div = document.createElement("div");
    div.innerHTML =  data[4].name;
    nameContainer4.appendChild(div);

    var div = document.createElement("div");
    div.innerHTML =  data[0].imageUrl;
    imageContainer0.appendChild(div);
   // var div = document.createElement("div");
    //div.innerHTML = 'Productprice: ' + data[i].price;
    //priceContainer.appendChild(div);
 //}
 */
  // showing image
  function tedsTemplate(teds){
    return `
    <div class="teds">
    <div class="teds_photos">
   
    <img class="image"src="${teds.imageUrl}">
    
    </div>
    <div class="name_price">
    <h3>${teds.name}</h3>
    <h3>${teds.price}</h3>
</div>
    <p>${teds.description}</p>
    </div>
   `
  }
  document.getElementById("app").innerHTML = `
  ${data.map(tedsTemplate).join("") }
 `
   
})



  //div.innerHTML = 
  //div.innerHTML = '+productName+';
  //mainContainer.appendChild(div);
  
//}

//});