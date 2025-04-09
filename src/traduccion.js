// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    // Obtiene todos los elementos con la clase "traducible"
    const elementosTraducibles = document.querySelectorAll('.traducible');
    
    // Recorre cada elemento y cambia su contenido según el idioma
    elementosTraducibles.forEach(elemento => {
      if (idioma === 'es') {
        // Cambia el contenido al valor en español
        elemento.textContent = elemento.getAttribute('data-es');
      } else if (idioma === 'en') {
        // Cambia el contenido al valor en inglés
        elemento.textContent = elemento.getAttribute('data-en');
      }
    });
  }
  document.getElementById('btn-idioma-es').addEventListener('click', () => cambiarIdioma('es'));
  document.getElementById('btn-idioma-en').addEventListener('click', () => cambiarIdioma('en'));