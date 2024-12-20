document.addEventListener("DOMContentLoaded", async function () {
  return await fetch("./sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      // Insere o conteúdo carregado no contêiner do sidebar
      document.getElementById("sidebar-container").innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar a sidebar:", error));
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".submenu a").forEach((link) => {
    link.addEventListener("click", () => {
      // Remove a classe 'active' de todos os links
      document.querySelectorAll(".submenu a").forEach((item) => {
        item.classList.remove("active");
      });

      // Adiciona a classe 'active' ao link clicado
      link.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.getElementById("sidebar-container");

  // Verifica se o sidebar-container já tem o conteúdo carregado
  if (sidebarContainer && sidebarContainer.innerHTML.trim() !== "") {
    initializeSidebar();
  } else {
    // Observador de mutação para detectar mudanças no sidebar-container
    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "childList" &&
          sidebarContainer.innerHTML.trim() !== ""
        ) {
          initializeSidebar();
          observer.disconnect(); // Para de observar após a inicialização
          break;
        }
      }
    });

    observer.observe(sidebarContainer, { childList: true });
  }

  function initializeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    if (sidebar && content) {
      const toggleButton = document.createElement("button");
      toggleButton.classList.add("menu-toggle");
      toggleButton.textContent = "☰"; // Ícone de hambúrguer
      document.body.appendChild(toggleButton);

      toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        content.classList.toggle("shifted"); // Ajusta o conteúdo quando o sidebar está aberto
      });
    } else {
      console.error(
        "Elementos necessários não encontrados: .sidebar ou .content"
      );
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const json6 = {
    c: "POST",
    r:"GET",
    u: "PUT",
    d:"DELETE",
    post: "POST",
    p: "POST",
    put: "PUT",
    pu: "PUT",
    delete: "DELETE",
    d: "DELETE",
    get: "GET",
    g: "GET",
    patch: "PATCH",
    pa: "PATCH",
    form: "form",
    f: "form",
    auth: "auth",
    au: "auth",
    status: "status",
    statusCode: "status",
    st: "status",
    stc: "status",
    headers: "headers",
    header: "headers",
    hs: "headers",
    h: "headers",
    schema: "schema",
    schemas: "schema",
    sc: "schema",
    contract: "schema",
    body: "body",
    payload: "body",
    b: "body",
    pl: "body",
    qs: "qs",
    param: "qs",
    params: "qs",
    pr: "qs",
    mock: "mock",
    m: "mock",
    failOnStatusCode: "failOnStatusCode",
    fs: "failOnStatusCode",
    env: "env",
    timeout: "timeout",
    tt: "timeout",
    encoding: "encoding",
    en: "encoding",
    gzip: "gzip",
    retryOnStatusCodeFailure: "retryOnStatusCodeFailure",
    rsc: "retryOnStatusCodeFailure",
    retryOnNetworkFailure: "retryOnNetworkFailure",
    rnf: "retryOnNetworkFailure",
    followRedirect: "followRedirect",
    fd: "followRedirect",
    text: "text",
    t: "text",
    search: "search",
    sh: "search",
    condition: "condition",
    cdt: "condition",
    save: "save",
    s: "save",
    saveRequest: "saveRequest",
    sr: "saveRequest",
    request: "request",
    rq: "request",
    e: "expect",
    ex: "expect",
  };
  const json_6 = JSON.stringify(json6, null, 2);
  document.getElementById("json6").textContent = json_6;

  ////
  const json1 = {
    get: "https://reqres.in/api/users/2",
  };

  const json_1 = JSON.stringify(json1, null, 2);
  document.getElementById("json1").textContent = json_1;
  //
  const json2 = {
    get: "reqres/2",
  };

  const json_2 = JSON.stringify(json2, null, 2);
  document.getElementById("json2").textContent = json_2;
  //
  const json3 = {
    get: "reqres/2",
    expect: "email, first_name, last_name, avatar",
  };

  const json_3 = JSON.stringify(json3, null, 2);
  document.getElementById("json3").textContent = json_3;
  //
  const json4 = {
    get: "reqres/2",
    expect: "email, first_name, last_name, avatar",
    save: "url, text",
  };
  const json_4 = JSON.stringify(json4, null, 2);
  document.getElementById("json4").textContent = json_4;
  //

  const json5 = [
    {
      get: "reqres/2",
      expect: "email, first_name, last_name, avatar",
      save: "url, text, first_name",
    },
    {
      text: "Usind data saved in before request",
      post: "reqres",
      body: {
        name: "faker.name",
        first_name: "{first_name}",
        text: "{text}",
      },
    },
  ];

  const json_5 = JSON.stringify(json5, null, 2);
  document.getElementById("json5").textContent = json_5;

  /////
});

document.addEventListener("DOMContentLoaded", () => {
  const json7 = [
    {
      t: "generate token",
      p: "/login",
      b: { username: "admin", password: "admin" },
      s: "token",
    },
    {
      g: "/projects",
      h: { authorization: "{token}" },
    },
    {
      t: "create a new project",
      p: "/projects",
      b: {
        name: "faker.name",
        leader: "Alice Johnson",
        description: "faker.text",
        endDate: "2024-11-09",
      },
      s: "id",
    },
    {
      t: "delete project id {id}",
      d: "/projects/{id}",
    },
  ];

  const json_7 = JSON.stringify(json7, null, 2);
  document.getElementById("json7").textContent = json_7;
});
