window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document. querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let faultyItems = document.getElementById("faultyItems"); 
    
        faultyItems.style.visibility = "hidden";   

        event.preventDefault();

        formSubmission(window.document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    });
}); 

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
        let planetsPicked = pickPlanet(listedPlanets);
        console.log(planetsPicked);
        addDestinationInfo(window.document, planetsPicked.name, planetsPicked.diameter, planetsPicked.star,
            planetsPicked.distance, planetsPicked.moons, planetsPicked.image);
        });
