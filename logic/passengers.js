function Passengers() {
    function checkFlightCapacity(capacity, passengersArray){
        let totalPassengers = 0;
        let passengers;
        for(passengers of passengersArray){
            totalPassengers += passengers;
        }

        if (totalPassengers<=capacity){
            return totalPassengers;
        } else {
            throw new Error("The number of passengers is more then the capacity.");
        }
    };
}

module.exports = Passengers();
