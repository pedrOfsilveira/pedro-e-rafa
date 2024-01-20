let voltar = document.querySelector('#voltar');

document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = ['Amor da minha vida,'];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector('#title').innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 50);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    } else {
      // Adicionamos uma condição extra para garantir que a animação seja encerrada corretamente
      document.querySelector('#linda').innerHTML = '';
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    } else {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = [
    'Abóbora',
    'Rabanete',
    'Alface',
    'Rúcula',
    'Beterraba',
    'Cenoura',
    'Couve',
  ];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector('#text').innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 50);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  function StartTextAnimation(i) {
    if (i === dataText.length) {
      i = 0; // Reset to the beginning
    }

    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = ['Cheddar', 'Gouda', 'Parmesão', 'Provolone', 'Mussarela'];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector('#linda').innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 50);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    } else {
      // Adicionamos uma condição extra para garantir que a animação seja encerrada corretamente
      document.querySelector('#linda').innerHTML = '';
    }
  }

  function StartTextAnimation(i) {
    if (i === dataText.length) {
      i = 0; // Reset to the beginning
    }

    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    } else {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

voltar.addEventListener('click', () => {
  voltar.classList.add('jello');

  voltar.setAttribute('disabled', '');

  setTimeout(() => {
    voltar.classList.remove('jello');
  }, 600);
  setTimeout(() => {
    voltar.removeAttribute('disabled');
  }, 2000);
});
