function Prices() {
    function calculateFinalPrice(basePrice, passengerVariation, flightVariation){
        let finalPrice = 0;

        finalPrice = basePrice + passengerVariation * basePrice + flightVariation * (basePrice - passengerVariation * basePrice);

        return finalPrice.toFixed(2);
    }
    return {calculateFinalPrice};
}

module.exports = Prices ();


