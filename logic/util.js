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
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();
