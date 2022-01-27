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

    function distributeAllSeatsToAllPassengers(vipPassengers, normalPassengers, flights, businessSeats, economySeats){
        let passengers;
        let distribution = {
            vipPassengersWithBusinessSeats: 0,
            vipPassengersWithEconomySeats: 0,
            regularPassengersWithBusinessSeats: 0,
            regularPassengersWithEconomySeats: 0
        };

        for(passengers of vipPassengers){
            if (businessSeats>0){
                vipPassengersWithBusinessSeats += passengers;
            } else if (economySeats>0) {
                vipPassengersWithEconomySeats += passengers;
            }
        }

        for(passengers of normalPassengers){
            if (businessSeats>0){
                regularPassengersWithBusinessSeats =+ passengers;
            } else if (economySeats>0){
                regularPassengersWithEconomySeats =+ passengers;
            }
        }

        return {distributeAllSeatsToAllPassengers}; 
    }
    return {checkFlightCapacity};
};

module.exports = Passengers();
