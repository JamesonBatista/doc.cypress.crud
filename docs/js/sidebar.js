document.addEventListener("DOMContentLoaded", async function () {
  return await fetch("../js/sidebar.js")
  .then(response => response.text())
  .then(data => {
	  // Insere o conteúdo carregado no contêiner do sidebar
	  document.getElementById('sidebar-container').innerHTML = data;

	  // Aplica eventos de clique somente após o conteúdo ser inserido no DOM
	  document.querySelectorAll('.menu-button').forEach(button => {
		  button.addEventListener('click', () => {
			  const submenu = button.nextElementSibling;
			  if (submenu) {
				  submenu.classList.toggle('hidden');
				  button.querySelector('svg').classList.toggle('rotate-90');
			  }
		  });
	  });
  })
  .catch(error => console.error('Erro ao carregar a sidebar:', error));
});