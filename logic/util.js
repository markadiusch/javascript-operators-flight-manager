function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers){
        let totalDistributedPassengers = 0;
        let value;
        for (value of distributedPassengers){
            totalDistributedPassengers += distributedPassengers[value];
        }
        return totalDistributedPassengers;
    }
    
    return {calculateTotalDistributedPassengers};
}

module.exports = Util();
