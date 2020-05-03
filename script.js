const cart = document.getElementById("cart");
const productOrders = document.getElementById('product-orders');
const nameProduct = document.getElementById('name-product').innerText;
const totalView = document.getElementById("total");

var countProducts = 0;
var totalOrders = 0;


function comprar() {

	countProducts += 1;
	
	productOrders.innerHTML += `<p>${nameProduct}</p>`		


	cart.innerHTML = `<p>Carrinho: <span>${countProducts}</span></p>`;
}




