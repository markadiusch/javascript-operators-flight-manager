function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray){
        let passengersNumber = 0;
        let passengers;
        for(passengers of passengersArray){
            passengersNumber += passengers;
        }
        if (passengersNumber > flightCapacity){
            throw new Error("The number of passengers is more then the capacity.");
        } 
        return passengersNumber;
    }
    return {checkFlightCapacity};
};

module.exports = Passengers();
