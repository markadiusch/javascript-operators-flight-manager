"use strict"
function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers){
        let totalDistributedPassengers = 0;
        let value;
        for (value in distributedPassengers){
            totalDistributedPassengers += distributedPassengers[value];
        }
        return totalDistributedPassengers;
    }
    function calculateTotalNumberOfPassengers(amountOfPassengers){
        let sumOfPassengers = 0;
        let value;
        for (value of amountOfPassengers){
            sumOfPassengers += value;
        }
        return sumOfPassengers;
    }
    function checkInput(input){
        if (input == "" || isNaN(input)){
            throw new Error("Input is empty or is not a number")
        }
    }
    function calculateTotalDistance(arrayOfDistance){
        let distance;
        let totalDistance = 0;
        for (distance of arrayOfDistance){
            if (distance>=0){
                totalDistance += distance;
            }
        }
        
        return totalDistance;
    }
    function calculateBonusPoints(arrayOfDistanceBusiness, arrayOfDistanceEconomy, businessBonus, economyBonus){
        return calculateTotalDistance(arrayOfDistanceBusiness) * businessBonus/100 + calculateTotalDistance(arrayOfDistanceEconomy) * economyBonus/100;
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}

module.exports = Util();
