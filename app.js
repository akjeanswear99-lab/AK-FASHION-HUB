const API_URL = "https://script.google.com/macros/s/AKfycbzwHZTCg_A7a8GGbqvtj2j31BfZMf7db8G6PeL8mSuItoCBF6V2NjgrxrTJvTnMD7MV/exec";

fetch(API_URL)
.then(res => res.json())
.then(data => {

let html = "";

for(let i=1;i<data.length;i++){

html += `
<div class="product">
<h3>${data[i][2]}</h3>
<p><b>UID:</b> ${data[i][0]}</p>
<p><b>Color:</b> ${data[i][5]}</p>
<p><b>Size:</b> ${data[i][6]}</p>
<p><b>Price:</b> ₹${data[i][8]}</p>
<p><b>Stock:</b> ${data[i][10]}</p>
</div>
`;

}

document.getElementById("products").innerHTML = html;

});
function addProduct(){

const product = {


name: document.getElementById("name").value,

color: document.getElementById("color").value,

size: document.getElementById("size").value,

price: document.getElementById("price").value,

stock: document.getElementById("stock").value

};

fetch(API_URL,{
method:"POST",
body:JSON.stringify(product)
})
.then(res=>res.text())
.then(msg=>{

alert("Product Added");

location.reload();

});

}
