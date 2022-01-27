function Prices() {
    function calculateFinalPrice(basePrice, passengerVariation, flightVariation){
        let finalPrice = basePrice;

        finalPrice *= 1 + passengerVariation/100;
        finalPrice *= 1 + flightVariation/100;

        return finalPrice.toFixed(2);
    }
    function calculateDefaultFinalPrice(basePrice, passengerType, flightType){
        let passengerVariation = 0;
        let flightVariation = 0;
        let defaultFinalPrice = basePrice;
        if (passengerType == "regular"){
            passengerVariation = -5;
        } else if (passengerType == "vip"){
            passengerVariation = 5;
        }
        if (flightType == "economy"){
            flightVariation = -3;
        } else if (flightType == "business"){
            flightVariation = 10;
        }
        defaultFinalPrice *= 1 + passengerVariation/100;
        defaultFinalPrice *= 1 + flightVariation/100
        return defaultFinalPrice;
    }
    return {calculateFinalPrice, calculateDefaultFinalPrice};
}

module.exports = Prices ();


