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
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput};
}

module.exports = Util();
