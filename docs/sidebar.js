document.addEventListener("DOMContentLoaded", async function () {
  return await fetch("./sidebar.html")
  .then(response => response.text())
  .then(data => {
	  // Insere o conteúdo carregado no contêiner do sidebar
	  document.getElementById('sidebar-container').innerHTML = data;


  })
  .catch(error => console.error('Erro ao carregar a sidebar:', error));
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.submenu a').forEach(link => {
        link.addEventListener('click', () => {
            // Remove a classe 'active' de todos os links
            document.querySelectorAll('.submenu a').forEach(item => {
                item.classList.remove('active');
            });

            // Adiciona a classe 'active' ao link clicado
            link.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
	const sidebarContainer = document.getElementById('sidebar-container');

	// Verifica se o sidebar-container já tem o conteúdo carregado
	if (sidebarContainer && sidebarContainer.innerHTML.trim() !== '') {
		initializeSidebar();
	} else {
		// Observador de mutação para detectar mudanças no sidebar-container
		const observer = new MutationObserver((mutationsList, observer) => {
			for (let mutation of mutationsList) {
				if (mutation.type === 'childList' && sidebarContainer.innerHTML.trim() !== '') {
					initializeSidebar();
					observer.disconnect(); // Para de observar após a inicialização
					break;
				}
			}
		});

		observer.observe(sidebarContainer, { childList: true });
	}

	function initializeSidebar() {
		const sidebar = document.querySelector('.sidebar');
		const content = document.querySelector('.content');

		if (sidebar && content) {
			const toggleButton = document.createElement('button');
			toggleButton.classList.add('menu-toggle');
			toggleButton.textContent = '☰'; // Ícone de hambúrguer
			document.body.appendChild(toggleButton);

			toggleButton.addEventListener('click', () => {
				sidebar.classList.toggle('open');
				content.classList.toggle('shifted'); // Ajusta o conteúdo quando o sidebar está aberto
			});
		} else {
			console.error('Elementos necessários não encontrados: .sidebar ou .content');
		}
	}
});
