console.log(`${cities.length} communes chargées`);

let resultArray = []; // Tableau vide

for (let i = 0; i < cities.length; i++) { // Compare la population et push dans tableau vide
    if (cities[i].population > 300000) {
        resultArray.push(cities[i]);
    }
}

resultArray.sort(function(a, b)  { // Range de façon décroissante la population
    return b.population - a.population;
});

for (let j = 0; j < resultArray.length; j++) { // Affichage de mon nouveau tableau
    console.log(resultArray[j].nom, '(' + resultArray[j].population + ' habitants)');
}
