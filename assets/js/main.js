function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);

 
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos de peso e altura.";
    return;
  }

  
  altura = altura / 100; 

  
  var imc = peso / (altura * altura);


  var categoria = "";
  if (imc < 18.5) {
    categoria = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso normal";
  } else if (imc >= 24.9 && imc < 30) {
    categoria = "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    categoria = "Obesidade grau 1";
  } else if (imc >= 34.9 && imc < 40) {
    categoria = "Obesidade grau 2";
  } else {
    categoria = "Obesidade grau 3";
  }

  
  var resultadoTexto = "Seu IMC é: " + imc.toFixed(2) + "<br>Categoria: " + categoria;
  document.getElementById("resultado").innerHTML = resultadoTexto;
}


document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault(); 
  calcularIMC(); 
});

