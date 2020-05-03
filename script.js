const cart = document.getElementById("cart");
const productOrders = document.getElementById('product-orders');
const nameProduct = document.getElementById('name-product').innerText;
const valueProduct = document.getElementById('value').innerText.substr(2,2);
const totalView = document.getElementById("total");
const dropdown = document.getElementsByClassName('dropdown');

var countProducts = 0;
var totalOrders = 0.00;

if(productOrders.innerText == '') {
	dropdown[0].children[0].innerHTML = 'Empty';
}
	
function comprar() {
	countProducts += 1;
	totalOrders += Number(valueProduct);

	if(countProducts > 0) {
		dropdown[0].children[0].innerHTML = 'Your cart lines:';	
	}
	cart.innerHTML = `<p>Carrinho: <span>${countProducts}</span></p>`;
	productOrders.innerHTML += `<p>${countProducts}. ${nameProduct}</p>`
	totalView.innerText = `Total: R$${totalOrders}`;
}

cart.addEventListener('click', () => {
	dropdown[0].classList.toggle('toggle');
});



