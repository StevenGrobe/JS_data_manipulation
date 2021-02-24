console.log(`${cities.length} communes chargées`);

function ready(callback) {
  if (document.readyState != 'loading'){
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

// insérer votre code ci-dessous
function main() {
  const el = document.createElement('div');
  el.innerHTML = 'Je suis un div';
  document.body.appendChild(el);
}

ready(main);
