const $ = (elemento) => document.querySelector(elemento);

$("#entrar").addEventListener("click", (ev) => {
  ev.preventDefault();

  const string = localStorage.getItem("usuario");
  const usuarioCadastrado = JSON.parse(string);

  const { login, senha } = usuarioCadastrado;

  const dadosCorretos =
    login === $("#login").value && senha === $("#senha").value;
  console.log(dadosCorretos);

  if (!dadosCorretos) {
    alert();
    return;

  }

  window.location.href = "./cpaas.html";
});
