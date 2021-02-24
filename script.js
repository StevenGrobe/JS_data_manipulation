console.log(`${cities.length} communes chargées`);

// Fonction qui affiche les villes avec une population > 300 000
function getCitiesPopSup300000() {
    const cityArray = cities.filter((city) => city.population > 300000)
    console.log(cityArray);
    cityArray.sort(function (prev, curr) {
        return prev.population - curr.population;
    });
}

// Fonction qui cherche les villes en fonction du departement en utilisant la fonction displayCity
function getCitiesByDept(codePostal) {
    const codePostalArray = cities.filter((city) => city.codeDepartement == codePostal)
    codePostalArray.forEach((city) => {
        console.log(displayCity(city));
    });
}

// Fonction qui affiche les villes
function displayCity(city) {
    return `${city.codeDepartement} - ${city.nom}`
}

//Affichage de mes fonctions
getCitiesPopSup300000();
getCitiesByDept(74);

