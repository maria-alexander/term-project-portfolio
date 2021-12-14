let pop = document.getElementById('edu-popup');
let popBox = document.querySelector('.popup-box');
let close = document.querySelector('.close');

let degreeCards = document.getElementById('degreeBox');
const loader = document.getElementById('loader');

//show loading
function loading() {
	loader.hidden = false;
}

function complete() {
	if (!loader.hidden) {
		loader.hidden = true;
	}
}

// show popup on button click
pop.addEventListener("click", function() {

	popBox.style.display = "block";

	

	async function myDegrees() {
	loading();

	await fetch('/college.json')
	.then((response) => response.json())
	.then((degrees) =>

		degreeCards.innerHTML = `<div class="card">
			<h1 class="graduation">${degrees.degrees[0].Degree1.Year}</h1>
			<h2>${degrees.degrees[0].Degree1.School}</h2>
			<h4><em>${degrees.degrees[0].Degree1.Program}, ${degrees.degrees[0].Degree1.Type}</em></h4>
		</div>

		<div class="card">
			<h1 class="graduation">${degrees.degrees[0].Degree2.Year}</h1>
			<h2>${degrees.degrees[0].Degree2.School}</h2>
			<h4><em>${degrees.degrees[0].Degree2.Program}, ${degrees.degrees[0].Degree2.Type}</em></h4>
		</div>

		<div class="card">
			<h1 class="graduation">${degrees.degrees[0].Degree3.Year}</h1>
			<h2>${degrees.degrees[0].Degree3.School}</h2>
			<h4><em>${degrees.degrees[0].Degree3.Program}, ${degrees.degrees[0].Degree3.Type}</em></h4>
		</div>`
		

		)

	complete();
	}

	myDegrees();

});

// close on exit click
close.addEventListener("click", function() {
	popBox.style.display = "none";
});