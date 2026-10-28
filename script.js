const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbwWKqlXlVDVhx7dT09CZmGWp9uGM8w39nb2XFSuk5xgE71VsM0MsIoRw7fGU42mfqpa5g/exec";
const form = document.getElementById("formulario")
const aviso = document.getElementById("aviso")
form.addEventListener("submit", function(evento){
  evento.preventDefault();
  aviso.textContent = "Enviando..."
  fetch(URL_PLANILHA,{
    method: "POST",
    mode: "no-cors",
    body: new FormData(form)
  })
    .then(function () {
      aviso.textContent = "Enviado com sucesso!";
      form.reset(); // limpa os campos
    })
    .catch(function () {
      aviso.textContent = "Erro ao enviar. Tente de novo.";
    });
})

