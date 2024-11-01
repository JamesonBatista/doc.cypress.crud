var a = {
  post: "https://reqres.in/api/users",
  body: { name: "Jam Batista", email: "cypresscrud@crud.com" },
};
var testa = `describe("/post", () => {
  it("users", () => {
    cy.crud("post");
  });
});`;

// Formata e exibe o JSON em um elemento com id "json"
document.getElementById("a").innerText = JSON.stringify(a, null, 2);
document.getElementById("testa").innerText = testa;