let cart=document.querySelectorAll(".add-cart");

let product=
[
{
	name:"Amoxycillin",
	tag:"amoxi",
	price:149,
	incart:0

},{
	name:"Benzoyl PEroxide",
	tag:"ben",
	price:66,
	incart:0

},{
	name:"clop",
	tag:"clop",
	price:77,
	incart:0

},{
	name:"Doxofylline Tablets",
	tag:"doxo",
	price:77,
	incart:0

},{
	name:"Farobact 200",
	tag:"faro",
	price:444,
	incart:0

},{
	name:"Minoxidil Topical Solution",
	tag:"mini",
	price:819,
	incart:0

},{
	name:"Escitalopram Tablets",
	tag:"nexto",
	price:39,
	incart:0

},{
	name:"O-stat 120",
	tag:"ostat",
	price:333,
	incart:0

},{
	name:"Paracetamol Tablets",
	tag:"para",
	price:22,
	incart:0

},{
	name:"Willgo",
	tag:"illw",
	price:50,
	incart:0

},{
	name:"Sompraz",
	tag:"sompr",
	price:199,
	incart:0

},{
	name:"T-bact ointment",
	tag:"tbact",
	price:100,
	incart:0

},{
	name:"Vitamin C+",
	tag:"home1",
	price:99,
	incart:0

},{
	name:"Low Calorie Sweetener",
	tag:"home2",
	price:248,
	incart:0

},{
	name:"Electral Powder",
	tag:"home3",
	price:20,
	incart:0

},{
	name:"Eno Powder Lemon",
	tag:"home4",
	price:10,
	incart:0

},{
	name:"N95-Mask Grey",
	tag:"home5",
	price:499,
	incart:0

},{
	name:"Face-Shield",
	tag:"home6",
	price:399,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},{
	name:"grey",
	tag:"ww",
	price:13,
	incart:0

},
];
for (let i=0;i<cart.length;i++)
{
	// console.log(product[i]);

	cart[i].addEventListener('click',() => {
		cartno(product[i]);
		totalcost(product[i]);
		
	})
	
}

function load(){
	let productno = localStorage.getItem("cartno");
	if(productno)
	{
		document.querySelector(".navbar span").textContent=productno;

	}

}
function cartno(product) {
	
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
	setItems(product);
}
function setItems(product){	
	let cartItems=localStorage.getItem('productcart');
	cartItems=JSON.parse(cartItems);
	


	if(cartItems!= null){
		// console.log(cartItems[product.tag]);
		if(cartItems[product.tag] == undefined){
			cartItems={
				...cartItems,
				[product.tag]:product
			}
		}

		cartItems[product.tag].incart += 1 ; 
	}else{
		product.incart=1;
		cartItems={
			[product.tag]:product
		}

	}
	
	localStorage.setItem("productcart",JSON.stringify(cartItems));	


}

function totalcost(product) { 
	// console.log(product.price);
	let cartcost=localStorage.getItem("totalcost");
	// console.log(cartcost);
	


	if(cartcost!= null)
	{
		cartcost=parseInt(cartcost);
		localStorage.setItem("totalcost",cartcost+product.price);
	}else{
	localStorage.setItem("totalcost",product.price);
	}
}




function displaycart() {
	let cartItems=localStorage.getItem("productcart");
	cartItems=JSON.parse(cartItems);
	let productcontainer= document.querySelector(".product-container");
	let cartcost=localStorage.getItem("totalcost");
	// let basketbillemty=document.getElementById("empty");
	// basketbillemty.innerHTML ='';

	

	// console.log(cartItems);
	if(cartItems && productcontainer){
		// console.log(cartItems);


		productcontainer.innerHTML ='';
		Object.values(cartItems).map(item =>{
			productcontainer.innerHTML += `
			<div class="product" id="${item.tag}">
			<div class="product-title" >
			<div class="div"><img src="images/cancel1.png" width="5px" height="5px" onclick="remove('${item.tag}')" >
			
			<img src="./images/${item.tag}.png">
			
			<br><span>${item.name}</span>
			</div>
			
			</div>
			<div class="price">Rs. ${item.price}.00</div>
			<div class="quantity">${item.incart}
			<a onclick="addcar('${item.tag}')"><i class="fas fa-sort-up"></i></a>
			<a onclick="mincar('${item.tag}')"><i class="fas fa-sort-down"></i></a>
			</div>
			<div class="total">
			Rs. ${item.incart*item.price}.00
			</div>
			</div>
			</div>
			`;
			// console.log(item.tag[1]);
		});
		productcontainer.innerHTML +=`
		<div class="baskettotalcontainer" id="basket">
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



function addcar(tag){
	let cartcost=localStorage.getItem("totalcost");
	let cartItems=localStorage.getItem('productcart');
	let productno = localStorage.getItem("cartno");
	
	productno= parseInt(productno);
	cartItems=JSON.parse(cartItems);
	cartcost=parseInt(cartcost);

	let arr=new Array();
	let arr1=new Array();
	let cartval;
	arr=Object.getOwnPropertyNames(cartItems);
	for(let i=0;i<arr.length;i++)
	{
	if(tag==arr[i])
	{
	
	arr1=Object.values(cartItems[arr[i]]);
	arr1[3]+=1;
	productno+=1;
	cartItems[arr[i]].incart=arr1[3];
	cartcost+=arr1[2];

	
	}
	}
	localStorage.setItem("cartno",productno);
	localStorage.setItem("totalcost",cartcost);
	localStorage.setItem("productcart",JSON.stringify(cartItems));	
	location.reload();



}




function mincar(tag){
	let cartcost=localStorage.getItem("totalcost");
	let cartItems=localStorage.getItem('productcart');
	let productno = localStorage.getItem("cartno");
	
	productno= parseInt(productno);
	cartItems=JSON.parse(cartItems);
	cartcost=parseInt(cartcost);

	let arr=new Array();
	let arr1=new Array();
	let cartval;
	let cartpri;
	arr=Object.getOwnPropertyNames(cartItems);
	for(let i=0;i<arr.length;i++)
	{
	if(tag==arr[i])
	{
	
	arr1=Object.values(cartItems[arr[i]]);
	arr1[3]-=1;

	cartval=arr1[3];
	// arr1[2]-=arr1[2];
	// cartpri=arr1[2];
	productno-=1;
	cartItems[arr[i]].incart=arr1[3];
	// cartItems[arr[i]].price=cartpri*cartval;
	
	cartcost-=arr1[2];
	
	}
	}

	
	if (cartval===0){
		delete cartItems[tag];
		
	}
	localStorage.setItem("cartno",productno);
	localStorage.setItem("totalcost",cartcost);
	localStorage.setItem("productcart",JSON.stringify(cartItems));	
	
	location.reload();

	if(cartcost==0.00)
	{
		localStorage.clear();
		location.reload();
		let basketbill=document.getElementById("paym");
        basketbill.style.display="none"


}



}
	
	



function remove(namew){
	let cartItems=localStorage.getItem("productcart");
	cartItems=JSON.parse(cartItems);
	let arr=new Array();
	arr=Object.getOwnPropertyNames(cartItems);
	let nameq=namew;
	let valep;
	let valev;
	// console.log(typeof nameq);
	// console.log(arr);
	for(let i=0;i<arr.length;i++)
	{
	if(nameq==arr[i])
	{
		let arr3=new Array();
		// console.log(  cartItems);
		// delete cartItems.arr[i];
		arr3=Object.values(cartItems[arr[i]]);
	// arr=Object.getOwnPropertyNames(cartItems);/

	 	valep=arr3[3];
	 	valev=arr3[2];
		// let arr2=new Array();
		// arr2=Object.values(cartItems);

		delete cartItems[nameq];
		// console.log(cartItems);

	
	// 	arr2.splice(arr2.findIndex(a => a.tag === arr[i]) , 1)
    //     console.log(arr2);
	localStorage.setItem("productcart",JSON.stringify(cartItems));	


	// []
	
	}

	
	}
	// arr=Object.getOwnPropertyNames(cartItems);

	

		var x1 = document.getElementById(namew);
		if (x1.style.display === 'none') {
		x1.style.display = 'block';
		} else {
		x1.style.display = 'none';
		}
		let productno = localStorage.getItem("cartno");
		localStorage.setItem("cartno",productno-valep);
		document.querySelector(".navbar span").textContent=productno-valep;
	    let cartcost=localStorage.getItem("totalcost");
		cartcost=parseInt(cartcost);
		cartcost=cartcost-(valev*valep);
		localStorage.setItem("totalcost",cartcost);
		let productcontainer= document.querySelector(".baskettotalcontainer");
	// let cartcost=localStorage.getItem("totalcost");
	productcontainer.innerHTML =` 
	
	<div class="baskettotalcontainer" id="basket">
	<h4 class="baskettotaltitle">
	Basket Total 
	</h4>
	<h4 class="baskettotal">
	Rs. ${cartcost}.00
	</h4>
	</div>
	
	`;
	


	let basket=document.getElementById("basket");
	
	// let basketbillemty=document.getElementById("empty");
	// let productcontainer= document.querySelector(".product-container");


	if(cartcost==0.00)
	{
		localStorage.clear();
		location.reload();
		let basketbill=document.getElementById("paym");
        basketbill.style.display="none"


}

}

// let basketbill=document.getElementById("paym");
// basketbill.style.display="none"

	
load();
displaycart();


