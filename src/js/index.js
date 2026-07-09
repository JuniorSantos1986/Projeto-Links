const pageKey = document.body?.dataset?.pageKey || 'default';
const STORAGE_KEY = `planilhaLinks:${pageKey}`;

function getStoredLinks() {
  try {
    const rawLinks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(rawLinks) ? rawLinks : [];
  } catch {
    return [];
  }
}

function isValidHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

let links = getStoredLinks();

function persistLinks(nextLinks) {
  links = [...nextLinks];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

function renderLinks() {
  const container = document.getElementById('linksContainer');
  if (!container) {
    return;
  }

  container.innerHTML = '';

  links.forEach((link) => {
    const row = document.createElement('div');
    row.className = 'containerPlanilhas';

    const description = document.createElement('p');
    description.textContent = link.descricao;

    const anchor = document.createElement('a');
    anchor.className = 'planilhaAction';
    anchor.textContent = 'Visualizar';
    anchor.href = link.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';

    row.appendChild(description);
    row.appendChild(anchor);
    container.appendChild(row);
  });
}

const modal = document.getElementById('modal');
const addButton = document.getElementById('addButton');
const closeBtn = document.querySelector('.close');
const confirmButton = document.getElementById('confirmButton');
const linkInput = document.getElementById('linkInput');
const descInput = document.getElementById('descInput');

function setModalVisibility(isVisible) {
  if (!modal) {
    return;
  }

  modal.style.display = isVisible ? 'block' : 'none';

  if (isVisible && linkInput) {
    linkInput.focus();
  }
}

if (addButton) {
  addButton.addEventListener('click', () => {
    setModalVisibility(true);
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    setModalVisibility(false);
  });
}

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    setModalVisibility(false);
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && modal.style.display === 'block') {
    setModalVisibility(false);
  }
});

if (confirmButton && linkInput && descInput) {
  const submitNewLink = () => {
    const url = linkInput.value.trim();
    const descricao = descInput.value.trim();

    if (!url || !descricao) {
      alert('Por favor, preencha ambos os campos.');
      return false;
    }

    if (!isValidHttpUrl(url)) {
      alert('Informe uma URL valida iniciando com http:// ou https://.');
      return false;
    }

    const nextLinks = [...links, { url, descricao }];
    persistLinks(nextLinks);
    renderLinks();

    linkInput.value = '';
    descInput.value = '';
    setModalVisibility(false);
    return true;
  };

  confirmButton.addEventListener('click', () => {
    submitNewLink();
  });

  [linkInput, descInput].forEach((input) => {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        submitNewLink();
      }
    });
  });
}

renderLinks();
