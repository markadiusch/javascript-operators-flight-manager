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
        if (input == "" || isNaN(x)){
            throw new Error("Input is empty or is not a number")
        }
    }
    function calculateTotalDistance(arrayOfDistance){
        let value = 0;
        let totalDistance = 0;
        for (value of arrayOfDistance){
            if (value>=0){
                totalDistance += value;
            }
        }
        
        return totalDistance;
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance};
}

module.exports = Util();
