console.log(`${cities.length} communes chargées`);

let newArray = cities.filter((element) => element.population > 300000)
newArray.sort(function(a,b) {
    return b.population - a.population;
});
console.log(newArray)

function getCitiesByDept (codePostal) {
    let codePostalArray = cities.filter((element) => element.codeDepartement == codePostal)
    for (let i = 0; i < codePostalArray.length; i++) {
        console.log(codePostalArray[i].nom);
    }
};

getCitiesByDept(74);

