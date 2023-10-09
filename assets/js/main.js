function calcularIMC() {
    // Obter os valores de peso e altura do formulário
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
  
    // Verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos de peso e altura.";
      return;
    }
  
    // Calcular o IMC
    var imc = peso / (altura * altura);
  
    // Determinar a categoria do IMC
    var categoria = "";
    if (imc < 18.5) {
      categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      categoria = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      categoria = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
      categoria = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
      categoria = "Obesidade grau 2";
    } else {
      categoria = "Obesidade grau 3";
    }
  
    // Exibir o resultado
    var resultadoTexto = "Seu IMC é: " + imc.toFixed(2) + "<br>Categoria: " + categoria;
    document.getElementById("resultado").innerHTML = resultadoTexto;
  }
  
  // Associar a função de cálculo ao formulário
  document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Impedir o envio do formulário padrão
    calcularIMC(); // Chamar a função de cálculo do IMC
  });