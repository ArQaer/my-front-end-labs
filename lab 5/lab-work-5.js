const listOfCars = [];
const needToEnterCars = 5;
let carLeftToEnter = needToEnterCars + 1;
const engineDisplacementLimit = 2.0; 
let carsWithBigEngine = 0;

for (let i = 0; i < needToEnterCars; i++) {
    carLeftToEnter -= 1;
    listOfCars[i] = {
        FirmName : '',
        ModelName : '',
        EngineDisplacement : 0
    }
    listOfCars[i].FirmName = String(prompt(`Car left: ${carLeftToEnter} \nEnter brand of car:`));
    if (listOfCars[i].FirmName === '' || listOfCars[i].FirmName === 'null'){
        do {
            alert("You are not enter any name")
            listOfCars[i].FirmName = String(prompt(`Car left: ${carLeftToEnter} \nEnter brand of car:`));
        } while (listOfCars[i].FirmName === '' || listOfCars[i].FirmName === 'null')
    }
    listOfCars[i].ModelName = String(prompt(`Car left: ${carLeftToEnter} \nEnter model of car:`));
    if (listOfCars[i].ModelName ==='' || listOfCars[i].ModelName === 'null'){
        do {
            alert("You are not enter any model")
            listOfCars[i].ModelName = String(prompt(`Car left: ${carLeftToEnter} \nEnter model of car:`));
        } while (listOfCars[i].ModelName === '' || listOfCars[i].ModelName === 'null')
    }
    listOfCars[i].EngineDisplacement = Number(prompt(`Car left: ${carLeftToEnter} \nEnter engine displacement of car(example:1.6 or 3.5 or 2.0):`));
    if (isNaN(listOfCars[i].EngineDisplacement) || listOfCars[i].EngineDisplacement === 0){
        do {
            alert("You are not enter engine displacement")
            listOfCars[i].EngineDisplacement = Number(prompt(`Car left: ${carLeftToEnter} \nEnter engine displacement of car(example:1.6 or 3.5 or 2.0):`));
        } while (isNaN(listOfCars[i].EngineDisplacement) || listOfCars[i].EngineDisplacement === 0)
    }
}

console.log(listOfCars);

for (let i = 0; i < listOfCars.length; i++) {
    if (listOfCars[i].EngineDisplacement > engineDisplacementLimit) {
        console.log(`${listOfCars[i].FirmName} ${listOfCars[i].ModelName} has engine ${listOfCars[i].EngineDisplacement} l. it's more than ${engineDisplacementLimit} l.`);
        carsWithBigEngine++;
    }
}

if (carsWithBigEngine === 0) {
    console.log(`All cars has engine less than ${engineDisplacementLimit} l.`);
}