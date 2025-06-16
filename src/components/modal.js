const btnAbrir = document.getElementById('abrirModal');
const modal = document.getElementById('meuModal');
const btnFechar = document.getElementById('fecharModal');

  btnAbrir.onclick = () => modal.style.display = 'flex';
  btnFechar.onclick = () => modal.style.display = 'none';

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
};