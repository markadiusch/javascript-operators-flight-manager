function Flights() {
    let flights;
    function calculateNumberOfFlights(passengers, capacity){

        if (passengers % capacity == 0){
            flights = passengers/capacity;
        } else {
            flights = math.floor(passengers/capacity)+1;
        }
        return {calculateNumberOfFlights};
    }
}

module.exports = Flights();


