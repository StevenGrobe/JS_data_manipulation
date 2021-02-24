console.log(`${cities.length} communes chargées`);

let newArray = cities.filter((element) => element.population > 300000)
newArray.sort(function(a,b) {
    return b.population - a.population;
});
console.log(newArray)

function getCitiesByDept (codePostal) {
    let codePostalArray = cities.filter((element) => element.codeDepartement == codePostal)
    codePostalArray.forEach((element) => {
        console.log(displayCity(element));
    });
}

function displayCity (city) {
        return `${city.codeDepartement} - ${city.nom}` 
}

getCitiesByDept(74);
