function flipImage(element) {
    element.classList.toggle('flipped');

    // Encuentra el elemento de mensaje dentro del contenedor actual
    const messageElement = element.querySelector('.message');

    // Alternar la visibilidad del mensaje
    if (messageElement.style.visibility === 'visible') {
        messageElement.style.visibility = 'hidden';
    } else {
        messageElement.style.visibility = 'visible';
    }
}
