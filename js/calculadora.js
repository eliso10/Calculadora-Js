function sumar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 + num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
  }
  
  function restar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 - num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
  }
  
  function multiplicar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 * num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
  }
  
  function dividir() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    if (num2 === 0) {
      document.getElementById('resultado').textContent = "No se puede dividir por cero";
      return;
    }
    
    var resultado = num1 / num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
  }