document.getElementById('copyButton').addEventListener('click', function() {
    var text = document.getElementById('textToCopy').innerText;
    
    // Usa la API del portapapeles moderna
    navigator.clipboard.writeText(text).then(function() {
        alert('¡Texto copiado al portapapeles!');
    }).catch(function(err) {
        alert('Error al copiar el texto: ' + err);
    });
});