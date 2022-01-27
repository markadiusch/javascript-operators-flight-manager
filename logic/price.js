function Prices() {
    function calculateFinalPrice(basePrice, passengerVariation, flightVariation){
        let finalPrice = basePrice;

        finalPrice *= 1 + passengerVariation/100;
        finalPrice *= 1 + flightVariation/100;

        return finalPrice.toFixed(2);
    }
    return {calculateFinalPrice};
}

module.exports = Prices ();


