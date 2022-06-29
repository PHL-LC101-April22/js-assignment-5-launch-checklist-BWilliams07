require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let form = document.querySelector("form");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then( function(json) {
                const missionTarget = document.getElementById("missionTarget");
                missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[4].name}</li>
               <li>Diameter: ${json[4].diameter}</li>
               <li>Star: ${json[4].star}</li>
               <li>Distance from Earth: ${json[4].distance}</li>
               <li>Number of Moons: ${json[4].moons}</li>
               <img src="${json[4].image}"></img>
            </ol>
            `
         });
        });
        
}
            
     
 function validateInput(testInput) {
     if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    } else {
        return "Not a Number";
     }
 }
 
 function formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass) {
    let form = document.querySelector("form");
    if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty"
    || validateInput(cargoMass) === "Empty") {
        alert("All fields required!");
        
    } 
    else if (validateInput(pilotName) === "Is a Number" || validateInput(copilotName) === "Is a Number"
    || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("All fields required!");
     }
    else {
         
        if (fuelLevel < 10000) {   
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
        }
        if (cargoMass > 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
        }
        if (cargoMass > 10000 && fuelLevel < 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
        }
        
        if (cargoMass <= 10000 && fuelLevel >= 10000) {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
            faultyItems.style.visibility = "visible";
        };
    }
}
 
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let picked = Math.floor(Math.random() * planets.length);
    return planets[picked];
}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
