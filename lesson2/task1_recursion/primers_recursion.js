;(function () {

    function getPrimes(countOfPrimers) {
        var startNumber = 2;
        var arrayOfPrimers = [];
        return function computeOfPrimers() {
            if (countOfPrimers <= 0) {
                return arrayOfPrimers;
            }
            if (isNatural(startNumber)) {
                arrayOfPrimers.push(startNumber++);
                return computeOfPrimers(--countOfPrimers);
            }
            startNumber++;
            return computeOfPrimers(countOfPrimers);
        }()
    }

    function isNatural(number) {
        var answer;
        for (var i = 2; i <= number / 2; i++) {
            answer = (number % i !== 0);

        }
        return answer;
    }

    console.log(getPrimes(10));
})();