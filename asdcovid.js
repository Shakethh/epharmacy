













let cart2=document.querySelectorAll(".add---cart");

let product2=
[
{

	name:"Surgical mask",
	tag:"mask2",
	price:10,
	incart:0

},{
	name:"N95 mask",
	tag:"mask",
	price:99,
	incart:0

},{
	name:"WildCraft mask",
	tag:"mask1",
	price:150,
	incart:0

},{
	name:"Cloth mask",
	tag:"clothm",
	price:25,
	incart:0

},{
	name:"Dettol sanitizer",
	tag:"sanid",
	price:50,
	incart:0

},{
	name:"Savlon sanitizer",
	tag:"sanis",
	price:249,
	incart:0

},{
	name:"Dr.TRUST oximeter",
	tag:"oxi",
	price:99,
	incart:0

},{
	name:"Dr.TRUST thermometer",
	tag:"dt",
	price:499,
	incart:0

},{
	name:"SIMZO Infrared thermometer",
	tag:"it",
	price:1599,
	incart:0

},{
	name:"Dettol handwash",
	tag:"dh",
	price:49,
	incart:0

},{
	name:"SmartCare gloves",
	tag:"stglv",
	price:799,
	incart:0

},
{
    name:"Sanitizing Wipes",
	tag:"wipe",
	price:199,
	incart:0


}
];
for (let i=0;i<cart2.length;i++)
{
	cart2[i].addEventListener('click',() => {
		cartno(product2[i]);
		totalcost(product2[i]);
	})
	
}

function load(){
	let productno = localStorage.getItem("cartno");
	if(productno)
	{
		document.querySelector(".navbar span").textContent=productno;
		document.querySelector(".sticky span").textContent=productno;

	}

}
function cartno(product2) {
	
	let productno = localStorage.getItem("cartno");
	
	productno= parseInt(productno);
	
	if(productno)
	{
		localStorage.setItem("cartno",productno+1);
		document.querySelector(".navbar span").textContent=productno+1;
		document.querySelector(".sticky span").textContent=productno+1;
	}else{
		localStorage.setItem("cartno",1);
		document.querySelector(".navbar span").textContent=1;
		document.querySelector(".sticky span").textContent=1;

	}
	setItems(product2);
}
function setItems(product2){	
	let cartItems=localStorage.getItem('productcart');
	cartItems=JSON.parse(cartItems)
	


	if(cartItems!= null){
		// console.log(cartItems[product.tag]);
		if(cartItems[product2.tag] == undefined){
			cartItems={
				...cartItems,
				[product2.tag]:product2
			}
		}

		cartItems[product2.tag].incart += 1 ; 
	}else{
		product2.incart=1;
		cartItems={
			[product2.tag]:product2
		}

	}
	
	localStorage.setItem("productcart",JSON.stringify(cartItems));	


}

function totalcost(product2) { 
	// console.log(product.price);
	let cartcost=localStorage.getItem("totalcost");
	// console.log(cartcost);
	


	if(cartcost!= null)
	{
		cartcost=parseInt(cartcost);
		localStorage.setItem("totalcost",cartcost+product2.price);
	}else{
	localStorage.setItem("totalcost",product2.price);
	}
}

function displaycart() {
	let cartItems=localStorage.getItem("productcart");
	cartItems=JSON.parse(cartItems);
	let productcontainer= document.querySelector(".product-container");
	let cartcost=localStorage.getItem("totalcost");

	// console.log(cartItems);
	if(cartItems && productcontainer){
		// console.log(cartItems);
		productcontainer.innerHTML ='';
		Object.values(cartItems).map(item =>{
			productcontainer.innerHTML += `
			<div class="product">
			<img src="images/cancel1.png" width="10px" height="10px" onclick="remove()" >
			<img src="./images/${item.tag}.png"><span>${item.name}</span>
			</div>
			<div class="price">Rs. ${item.price}.00</div>
			<div class="quantity">${item.incart}
			<i class="fas fa-sort-up"></i>
			<i class="fas fa-sort-down"></i>
			</div>
			<div class="total">
			Rs. ${item.incart*item.price}.00
			</div>
			`;
		});
		productcontainer.innerHTML +=`
		<div class="baskettotalcontainer">
		<h4 class="baskettotaltitle">
		Basket Total 
		</h4>
		<h4 class="baskettotal">
		Rs. ${cartcost}.00
		</h4>
		</div>
		`;

	}


	
}


load();
displaycart();