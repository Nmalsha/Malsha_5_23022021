
fetch("http://localhost:3000/api/teddies")
.then(function(res) {
return res.json();
  })
.then(function(data) {
  var imageURL = data[0].imageUrl;
console.log(imageURL);

//document.querySelector(".card-img-top").innerHTML += 'src= $'

});