
let submit = document.getElementById('submit');
let post = document.getElementById('posted-comments');
let pop = document.getElementById('edu-popup');



// Comment console functionality on portfolio page
submit.addEventListener("click", function(e) {
	e.preventDefault();
	let name = document.getElementById('name').value;
	let comment = document.getElementById('comment').value;
	let p = document.createElement('p');
	let span = document.createElement('span');
	let text = `${name}: ${comment}`;

	if (name.length > 0 && comment.length > 0) {
		post.appendChild(p).appendChild(document.createTextNode(text));
	} else if (name.length == 0) {
		alert("Please enter your name");
	} else {
		alert("Please enter a comment");
	}
	

	console.log(this.post);


});

