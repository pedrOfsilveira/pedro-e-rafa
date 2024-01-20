let voltar = document.querySelector('a');
let vamo = document.querySelector('#vamo');
let body = document.querySelector('body');

voltar.addEventListener('click', () => {
  vamo.classList.remove('hidden');
  vamo.scrollIntoView();

  setTimeout(() => {
    voltar.setAttribute('href', 'index.html');
  }, 1000);
});

window.onload = function () {
  document.getElementById('loading').style.display = 'none';
  body.classList.remove('overflow');
  window.scrollTo(0, document.body.scrollHeight);
};
