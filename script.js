let input = document.querySelectorAll("#section input");

let selected = document.querySelector("#aside #selected img");

input.forEach( element => {
	element.addEventListener('click', function() {
		if(this.checked) {
			var chosen = this.nextElementSibling.src;
			selected.src = chosen;
		}
	});
});