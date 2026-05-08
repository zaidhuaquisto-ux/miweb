// Función que actualiza la tarjeta con los datos del formulario
function updateCard() {
    // Obtener los valores de los campos de entrada
    const cardNumber = document.getElementById("card-number-input").value;
    const cardName = document.getElementById("card-name-input").value;
    const cardExpMonth = document.getElementById("card-exp-month").value;
    const cardExpYear = document.getElementById("card-exp-year").value;
    const cardCvv = document.getElementById("card-cvv").value;

    // Actualizar la tarjeta con los datos introducidos
    document.getElementById("card-number").textContent = formatCardNumber(cardNumber);
    document.getElementById("card-name").textContent = cardName || "Nombre Apellido";
    document.getElementById("card-exp").textContent = `${cardExpMonth || 'MM'}/${cardExpYear || 'AA'}`;
    document.getElementById("card-cvv").textContent = cardCvv || "CVV"; // Esta línea se puede eliminar si no quieres mostrar el CVV
}

// Formatear el número de tarjeta (Agregar espacios)
function formatCardNumber(number) {
    return number.replace(/\D/g, '').replace(/(.{4})(?=.)/g, '$1 ').trim();
}

// Evento para el botón de compra
document.querySelector('.buy-button').addEventListener('click', function() {
    const button = this;
    button.textContent = 'Cargando...';
    button.disabled = true;
    button.style.background = 'linear-gradient(145deg, #ff9800, #f57c00)'; // Cambiar color a naranja para loading

    setTimeout(() => {
        button.textContent = 'Error, no hay saldo disponible';
        button.style.background = 'linear-gradient(145deg, #f44336, #d32f2f)'; // Cambiar a rojo para error
        // Opcional: re-enable después de un tiempo
        setTimeout(() => {
            button.textContent = 'Comprar Ahora';
            button.disabled = false;
            button.style.background = 'linear-gradient(145deg, #4caf50, #45a049)'; // Volver al original
        }, 3000);
    }, 2000);
});