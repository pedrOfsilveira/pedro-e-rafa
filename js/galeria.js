const botaoDireito = document.querySelector('.botao-direita');

let indexAtivo = 0;

const grupos = document.getElementsByClassName('card-wrapper');

botaoDireito.addEventListener('click', () => {
  botaoDireito.classList.add('jello');

  botaoDireito.setAttribute('disabled', '');

  moveProxima();

  setTimeout(() => {
    botaoDireito.classList.remove('jello');
  }, 600);
  setTimeout(() => {
    botaoDireito.removeAttribute('disabled');
  }, 2000);
});

function moveUltima() {}

function moveProxima() {
  const proximoIndex = indexAtivo + 1 <= grupos.length - 1 ? indexAtivo + 1 : 0;

  const grupoAtual = document.querySelector(`[data-index="${indexAtivo}"]`),
    proximoGrupo = document.querySelector(`[data-index="${proximoIndex}"]`);
  console.log(grupoAtual);
  grupoAtual.dataset.status = 'after';
  proximoGrupo.dataset.status = 'active';

  indexAtivo = proximoIndex;
}
