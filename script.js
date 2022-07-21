const Bg_blue = document.querySelector(".Blue")
const Bg_black = document.querySelector(".Black")
const Bg_claro = document.querySelector(".Claro")
const Bg_green = document.querySelector(".Green")
const Bg_red = document.querySelector(".Red")
const Pacman = document.querySelector("#pacman")

let background_color = localStorage.getItem("background_color");

Bg_blue.addEventListener("click", (e) =>{
	e.preventDefault();
	let background_color="Normal"
	document.querySelector("body").style.background = "#041E42";
	document.querySelector(".aside").style.background = "#375176";
	document.querySelector("#navegation").style.background = "#375176";
	document.querySelector("#header").style.background = "#18345c";
	document.querySelector("#footer").style.background = "#18345c";
	localStorage.setItem("background_color", background_color);
})

Bg_black.addEventListener("click", (e) =>{
	e.preventDefault();
	let background_color="Black"
	document.querySelector("body").style.background = "#212121";
	document.querySelector(".aside").style.background = "#424242";
	document.querySelector("#navegation").style.background = "#424242";
	document.querySelector("#header").style.background = "black";
	document.querySelector("#footer").style.background = "black";
	localStorage.setItem("background_color", background_color);
})

Bg_claro.addEventListener("click", (e) =>{
	e.preventDefault();
	let background_color="Claro"
	document.querySelector("body").style.background = "#1DA1F2";
	document.querySelector(".aside").style.background = "#46a1d9";
	document.querySelector("#navegation").style.background = "#46a1d9";
	document.querySelector("#header").style.background = "blue";
	document.querySelector("#footer").style.background = "blue";
	localStorage.setItem("background_color", background_color);
})

Bg_green.addEventListener("click", (e) =>{
	e.preventDefault();
	let background_color="Green"
	document.querySelector("body").style.background = "#78C257";
	document.querySelector(".aside").style.background = "#80a96d";
	document.querySelector("#navegation").style.background = "#80a96d";
	document.querySelector("#header").style.background = "green";
	document.querySelector("#footer").style.background = "green";
	localStorage.setItem("background_color", background_color);
})

Bg_red.addEventListener("click", (e) =>{
	e.preventDefault();
	let background_color="Red"
	document.querySelector("body").style.background = "#E50914";
	document.querySelector(".aside").style.background = "#cc3139";
	document.querySelector("#navegation").style.background = "#cc3139";
	document.querySelector("#header").style.background = "red";
	document.querySelector("#footer").style.background = "red";
	localStorage.setItem("background_color", background_color);
})

Pacman.addEventListener("mouseenter", (e) =>{
	e.preventDefault();
	let background_color="pacman"
	document.querySelector("body").removeAttribute("style")
	document.querySelector("body").className = "pacman"
	localStorage.setItem("background_color", background_color);
})

if(background_color=="Normal"){
	document.querySelector("body").style.background = "#041E42";
	document.querySelector("#navegation").style.background = "#375176";
	document.querySelector(".aside").style.background = "#375176";
	document.querySelector("#header").style.background = "#18345c";
	document.querySelector("#footer").style.background = "#18345c";
} else if (background_color=="Black"){
	document.querySelector("body").style.background = "#212121";
	document.querySelector("#navegation").style.background = "#424242";
	document.querySelector(".aside").style.background = "#424242";
	document.querySelector("#header").style.background = "black";
	document.querySelector("#footer").style.background = "black";
} else if(background_color=="Claro"){
	document.querySelector("body").style.background = "#1DA1F2";
	document.querySelector("#navegation").style.background = "#46a1d9";
	document.querySelector(".aside").style.background = "#46a1d9";
	document.querySelector("#header").style.background = "blue";
	document.querySelector("#footer").style.background = "blue";
} else if(background_color=="Green"){
	document.querySelector("body").style.background = "#78C257";
	document.querySelector("#navegation").style.background = "#80a96d";
	document.querySelector(".aside").style.background = "#80a96d";
	document.querySelector("#header").style.background = "green";
	document.querySelector("#footer").style.background = "green";
} else if(background_color=="Red"){
	document.querySelector("body").style.background = "#E50914";
	document.querySelector("#navegation").style.background = "#cc3139";
	document.querySelector(".aside").style.background = "#cc3139";
	document.querySelector("#header").style.background = "red";
	document.querySelector("#footer").style.background = "red";
} else if(background_color=="pacman"){
	document.querySelector("body").className = "pacman"
	document.querySelector("body").removeAttribute("style")
}

let body = document.querySelector("body")
body.addEventListener("mousemove", current_position)

function current_position(e){
	console.log(1)
	e.preventDefault
	let position = document.querySelector("#current_position")
	console.log(position)
	position.textContent = ` x:${e.clientX} y:${e.clientY}`
}
