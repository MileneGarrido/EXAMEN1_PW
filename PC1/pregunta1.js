function calcularEdad() {
    
    document.getElementById('nombre').value = 'Milene Salma';
    document.getElementById('apellido').value = 'Garrido Paredes';

    //año 
    const anioA = new Date().getFullYear();

    // año de naci
    const anioNacimiento = document.getElementById('anioNacimiento').value;

    // 
    
    const edad = anioA - parseInt(anioNacimiento);
    
    document.getElementById("edad").value=
      (anioNacimiento)? edad :" "

}
calcularEdad()
