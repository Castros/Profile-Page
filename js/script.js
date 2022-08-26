const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')


btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
});

window.addEventListener("load", function() {
  setTimeout(
    function open(event){
      document.querySelector(".popup").style.display = "block"
    },
    1000
  )
});

document.querySelector("#close").addEventListener
("click", function() {
  document.querySelector(".popup").style.display = "none";
});

