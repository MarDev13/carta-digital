
function cambiarIdioma(idioma) {

  const elementosTraducibles = document.querySelectorAll('.traducible');
  elementosTraducibles.forEach(elemento => {
    if (idioma === 'es') {
      elemento.textContent = elemento.getAttribute('data-es');
    } else if (idioma === 'en') {
      elemento.textContent = elemento.getAttribute('data-en');
    }
  });
}
document.getElementById('btn-idioma-es').addEventListener('click', () => cambiarIdioma('es'));
document.getElementById('btn-idioma-en').addEventListener('click', () => cambiarIdioma('en'));

