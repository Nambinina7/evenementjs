//"Fonctionnalité 1"
let footer = document.querySelector("footer");
var count = 0;
footer.addEventListener("click", function(){ 
		count++;
	console.log(`click  ${count}`);
});

//"Fonctionnalité 2"
let menu = document.getElementById("navbarHeader");
let btnmenu = document.getElementsByClassName("navbar-toggler")[0];
let menuStatus = false;
 btnmenu.addEventListener("click", function(){ 
		if(menuStatus == false){
			menu.classList.remove("collapse");
			menuStatus = true;
		}
		else if(menuStatus == true){
			menu.classList.add("collapse");
			menuStatus = false;
		}
 
});


//ole.log("Fonctionnalité 3"
let editmenu = document.getElementsByClassName("card-text")[0];
let editbtnmenu = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

 editbtnmenu.addEventListener("click", function(){ 
  editmenu.style.color = "red";
});

//"Fonctionnalité 4"
let editmenu1 = document.getElementsByClassName("card-text")[1];
let editbtnmenu1 = document.getElementsByClassName("btn-outline-secondary")[1];
let x = false;
 editbtnmenu1.addEventListener("click", function(){ 
 	if(x == false){
 		editmenu1.style.color = "green";
 		x = true;
 	}
 	else if(x == true){
 		editmenu1.style.color = "black";
 		x = false;
 	}
  
});
//"Fonctionnalité 5"

let navbar = document.querySelector(".navbar");
let lien = document.getElementsByTagName("link")[0];
let z = false;
	navbar.addEventListener("dblclick", function(){ 
		if(z == false){
			lien.setAttribute("href", "#") ;
			z = true;
		}
		else if(z == true){
			lien.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
			z = false;
		}
	
});

	//"Fonctionnalité 6"
	let viewbtn = document.querySelectorAll(".btn.btn-sm.btn-success");
	for (var i = 0; i < viewbtn.length; i++) {
		let b = false;
		let card_image = viewbtn[i].parentNode.parentNode.parentNode.previousElementSibling;
		let card_text = viewbtn[i].parentNode.parentNode.previousElementSibling;
		viewbtn[i].addEventListener("mouseover", function(){ 
			if(b == false){
				card_image.style.width = "20%";
			 card_text.style.display = "none";
			 b = true;
			}
			else if(b == true){
				card_image.style.width = "100%";
				card_text.style.display = " inline-block";
			 b = false;
			}
			
		});
	}

	//"Fonctionnalité 7"
	let flechebtn = document.querySelectorAll(".btn.btn-secondary.my-2")[0];
	let card = document.getElementsByClassName("card");
	flechebtn.addEventListener("click", function(){
			firstcard = card[0].parentNode;
			lastcard = card[5].parentNode;
			parent = lastcard.parentNode;
			parent.insertBefore(lastcard,firstcard );
	});



	


