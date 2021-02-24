console.log(`${cities.length} communes chargées`);

function ready(callback) {
  if (document.readyState != 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

// insérer votre code ci-dessous
const codeDept = '38';

function getCitiesByDept(codeDept) {
  const CitiesByDeptArray = cities.filter((city) => city.codeDepartement === codeDept);
  return CitiesByDeptArray;
}

function displayCity(city) {
  return `${city.nom}`;
}

function getArrayCities(codeDept) {
  const arrayNul = getCitiesByDept(codeDept).map(city => displayCity(city))
  return arrayNul;
}

const arrayNul = getArrayCities(codeDept)
console.log(arrayNul)

function main() {
  for (let i = 0; i < arrayNul.length; i++) {
    const el = document.createElement('option');
    el.innerHTML = arrayNul[i];
    document.body.appendChild(el);
  }
}

ready(main);

