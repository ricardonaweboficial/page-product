const cart = document.getElementById("cart");
const productOrders = document.getElementById('product-orders');
const nameProduct = document.getElementById('name-product').innerText;
const valueProduct = document.getElementById('value').innerText.substr(2,2);
const totalView = document.getElementById("total");
const dropdown = document.getElementsByClassName('dropdown');

var countProducts = 0;
var totalOrders = 0; 

if(productOrders.innerText == '') {// If not exist products in cart show..
	dropdown[0].children[0].innerHTML = 'Empty';
}

// Function Buy with Views Products 
function comprar() {
	countProducts += 1; // Total of Orders
	totalOrders += Number(valueProduct); // Total Value Products

	if(countProducts > 0) { // If exist products in cart show..
		dropdown[0].children[0].innerHTML = 'Your cart lines:';	
	}


	cart.innerHTML = `<p>Carrinho: <span>${countProducts}</span></p>`; // View Orders
	productOrders.innerHTML += `<p>${countProducts}. ${nameProduct}</p>`; // View Products and index
	totalView.innerText = `Total: R$${totalOrders}`; // View Total value products
}

cart.addEventListener('click', () => { // Function Dropdown Show and Hidden
	dropdown[0].classList.toggle('toggle');
});



