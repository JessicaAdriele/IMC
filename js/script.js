var button = document.getElementById('btn');

var height = document.getElementById('height');

var weight = document.getElementById('weight');

var span = document.getElementById('result');

var msg = "Resultado: ";


button.onclick = function(){
	if ((height.value) && (weight.value)) {

		span.innerHTML = "Resultado: " + (weight.value/(height.value*height.value));
	}else{
		span.innerHTML = "Preencha todos os campos";
	}
}
