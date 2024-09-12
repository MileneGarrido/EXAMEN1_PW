function calcularIMC() {
    
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    
    
    // Calcular el IMC
    const imc = peso / (altura * altura);

    document.getElementById("resultadoIMC").innerText=
        (altura > 0 && peso > 0)? imc.toFixed(2) :" "

}
calcularIMC()
