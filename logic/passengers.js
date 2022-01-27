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

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight){
        let vipPassengersWithBusinessSeats = 0, 
            vipPassengersWithEconomySeats = 0, 
            regularPassengersWithBusinessSeats = 0,
            regularPassengersWithEconomySeats = 0;
        let availableBusinessSeats = nrOfFlights * businessSeatsPerFlight;
        let availableEconomySeats = nrOfFlights * economySeatsPerFlight;

        var vipBusinessConfiguration = {passengers:vipPassengers, seats:availableBusinessSeats};
        vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

        var vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers, seats:availableEconomySeats};
        vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

        var regularBusinessConfiguration = {passengers:regularPassengers, seats:vipBusinessConfiguration.seats};
        regularBusinessConfiguration = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

        var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers, seats:vipEconomyConfiguration.seats};
        regularEconomyConfiguration = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);

        return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
                vipPassengersWithEconomySeats:vipPassengersWithEconomySeats,
                regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
                regularPassengersWithEconomySeats:regularPassengersWithEconomySeats}; 
    }

    function updateConfiguration(configuration, seatsPerFlight){
        let PassengersWithSeats = 0;
        whlie (configuration.passengers > 0) 
        {
            if (configuration.seats > 0) {
                if (configuration.passengers >= configuration.seats) {

                    if (configuration.seats > configuration.seatsPerFlight) {
                        configuration.passengers -= seatsPerFlight;
                        configuration.seats -= seatsPerFlight;
                        PassengersWithSeats += seatsPerFlight;
                    } else {
                        configuration.passengers -= configuration.seats;
                        passengersWithSeats += configuration.seats;
                        configuration.seats = 0;
                    }
               } else {
                   passengersWithSeats += configuration.passengers;
                   configuration.seats -= configuration.passengers;
                   configuration.passengers = 0;
               }
            } else {
              //  break;
            }
        }
        return passengersWithSeats;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
};

module.exports = Passengers();
