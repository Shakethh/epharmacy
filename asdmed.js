

function load(){
	let productno = localStorage.getItem("cartno");
	if(productno)
	{
		document.querySelector(".navbar span").textContent=productno;
		document.querySelector(".sticky span").textContent=productno;

        

	}

}