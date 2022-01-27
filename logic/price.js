function Prices() {
    function calculateFinalPrice(basePrice, passengerVariation, flightVariation){
        let finalPrice = basePrice;

        finalPrice *= 1 + passengerVariation/100;
        finalPrice *= 1 + flightVariation/100;

        return finalPrice.toFixed(2);
    }
    function calculateDefaultFinalPrice(basePrice, passengerType, flightType){
        let finalPrice = basePrice;

        switch (passengerType.toUpperCase()) {
            case 'REGULAR': finalPrice *= 0.95;
                break;
            case 'VIP': finalPrice *= 1.05;
                break;
        }

        switch (flightType.toUpperCase()){
            case 'ECONOMY': finalPrice *= 0.97;
                break;
            case 'BUSINESS': finalPrice *= 1.10;
                break;
        }

        return finalPrice.toFixed(2);

    }
    return {calculateFinalPrice, calculateDefaultFinalPrice};
}

module.exports = Prices ();


