let background_color = localStorage.getItem("background_color");
console.log(background_color)

if(background_color=="Normal"){
	document.querySelector("body").style.background = "#041E42";
	document.querySelector("#navegation").style.background = "#375176";
	document.querySelector("#header").style.background = "#18345c";
	document.querySelector("#footer").style.background = "#18345c";
} else if (background_color=="Black"){
	document.querySelector("body").style.background = "#212121";
	document.querySelector("#navegation").style.background = "#424242";
	document.querySelector("#header").style.background = "black";
	document.querySelector("#footer").style.background = "black";
} else if(background_color=="Claro"){
	document.querySelector("body").style.background = "#1DA1F2";
	document.querySelector("#navegation").style.background = "#46a1d9";
	document.querySelector("#header").style.background = "blue";
	document.querySelector("#footer").style.background = "blue";
} else if(background_color=="Green"){
	document.querySelector("body").style.background = "#78C257";
	document.querySelector("#navegation").style.background = "#80a96d";
	document.querySelector("#header").style.background = "green";
	document.querySelector("#footer").style.background = "green";
} else if(background_color=="Red"){
	document.querySelector("body").style.background = "#E50914";
	document.querySelector("#navegation").style.background = "#cc3139";
	document.querySelector("#header").style.background = "red";
	document.querySelector("#footer").style.background = "red";
} else if(background_color=="pacman"){
	document.querySelector("body").removeAttribute("style")
	document.querySelector("body").className = "pacman"
}

document.querySelector("#comment_btn").addEventListener("click", comment)

function comment(e){
	e.preventDefault
	comment = document.querySelector("#comment").value
	comment = document.createElement("li")
	comment.className = "comment"
	
	comment_btn = document.createElement("button")
	comment_btn.textContent = "X"
	console.log(comment_btn)
	
	comment_btn.className = "delete"
	console.log(comment_btn)
	
	comment.textContent = document.querySelector("#comment").value
	comment.append(comment_btn)
	console.log(comment)
	
	comments = document.querySelector(".comments")
	comments.appendChild(comment)
}

document.querySelector(".comments").addEventListener("click", delete_comment)

function delete_comment(e){
	e.preventDefault
	if(e.target.classList.contains("delete")){
		comments = document.querySelector(".comments")
		if(confirm("Tem a certeza?")){
			let to_delete = e.target.parentElement
			comments.removeChild(to_delete)
		}}
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
