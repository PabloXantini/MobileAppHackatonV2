//Aqui voy a usar a SW para guardar temporalmente las cosas
const info1 = document.querySelector('#formInicio');
const info2 = document.querySelector('#fomrFinal');

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }