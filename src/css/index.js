// Carregar links do localStorage
let links = JSON.parse(localStorage.getItem('planilhaLinks')) || [];

// Função para renderizar os botões de links
function renderLinks() {
  const container = document.getElementById('linksContainer');
  container.innerHTML = '';
  links.forEach((link, index) => {
    const button = document.createElement('button');
    button.className = 'linkButton';
    button.textContent = link.descricao;
    button.onclick = () => window.open(link.url, '_blank');
    container.appendChild(button);
  });
}

// Modal
const modal = document.getElementById('modal');
const addButton = document.getElementById('addButton');
const closeBtn = document.querySelector('.close');
const confirmButton = document.getElementById('confirmButton');
const linkInput = document.getElementById('linkInput');
const descInput = document.getElementById('descInput');

// Abrir modal
addButton.onclick = () => {
  modal.style.display = 'block';
};

// Fechar modal
closeBtn.onclick = () => {
  modal.style.display = 'none';
};

// Fechar modal clicando fora
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Confirmar e adicionar link
confirmButton.onclick = () => {
  const url = linkInput.value.trim();
  const descricao = descInput.value.trim();
  if (url && descricao) {
    links.push({ url, descricao });
    localStorage.setItem('planilhaLinks', JSON.stringify(links));
    renderLinks();
    linkInput.value = '';
    descInput.value = '';
    modal.style.display = 'none';
  } else {
    alert('Por favor, preencha ambos os campos.');
  }
};

// Renderizar links iniciais
renderLinks();
