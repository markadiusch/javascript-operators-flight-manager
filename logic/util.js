function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers){
        let totalNumOfPassengers = 0;
        totalNumOfPassengers = distributedPassengers.vipPassengersWithBusinessSeats + distributedPassengers.vipPassengersWithEconomySeats + distributedPassengers.regularPassengersWithBusinessSeats + distributedPassengers.regularPassengersWithEconomySeats;
        
    };
    return {calculateTotalDistributedPassengers};
}

module.exports = Util();
