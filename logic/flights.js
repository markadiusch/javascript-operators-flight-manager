function Flights() {
    let flights;
    function calculateNumberOfFlights(passengers, capacity){

        if (passengers % capacity){
            flights = passengers/capacity;
        } else {
            flights = math.floor(passengers/capacity)+1;
        }
        return {calculateNumberOfFlights};
    }
}

module.exports = Flights();


