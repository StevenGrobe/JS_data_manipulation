console.log(`${cities.length} communes chargées`);

// Variable globales à changer
const codeDept = '74';
const cityName = 'Annecy';

// Fonction qui filtre toutes les villes par le département précisé et qui va créé un tableau de nos valeurs
function getCitiesByDept(codeDept) {
    const CitiesByDeptArray = cities.filter((city) => city.codeDepartement === codeDept);
    return CitiesByDeptArray;
}

// Fonction qui récupère les valeurs souhaité de notre tableau
function displayCity(city) {
    return `${city.codeDepartement} - ${city.nom} - ${city.population}`;
}

// Fonction qui créé un tableau de villes en fonction du département précisé
function getArrayCities(codeDept) {
    const cities74 = getCitiesByDept(codeDept).map(city => displayCity(city)) // Map va creer tableau, displayCity va afficher nos villes dans ce tableau
    console.log('Villes du département ' + codeDept, cities74);
}

// Fonction qui va chercher dans CitiesByDeptArray les villes qui sont égale à la variable cityName
function getCityByName(cityName) {
    const foundCity = getCitiesByDept(codeDept).find(city => city.nom === cityName); // find recherche une ville = à la variable cityName
    console.log(foundCity);
}

// Fonction qui fait la somme de la population des villes de notre tabLeau CitiesByDeptArray
function getSumPopByDept(dept) {
    const sum = getCitiesByDept(dept).reduce((prev, curr) => prev + curr.population, 0);
    console.log('La population total du département', dept, 'est', sum, 'habitants');
}

// Affichage de nos fonctions
getArrayCities(codeDept);
getCityByName(cityName);
getSumPopByDept(codeDept);