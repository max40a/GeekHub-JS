(function () {

    var car = {
        speed: 300,
        mark: 'BMW',
        color: 'Red',
        manual: false,
        engine: {
            power: 640,
            numberOfCylinders: 8,
            glowPlugs: {
                vendor: "Bosh",
                numberOfElectrodes: 2
            }
        }
    };

    function cloneObject(obj) {
        var clone = {};
        for (var key in obj) {
            (typeof obj[key] === 'object') ? clone[key] = cloneObject(obj[key]) : clone[key] = obj[key];
        }
        return clone;
    }

    var newCar = cloneObject(car);
    car.speed = 320;
    car.engine.power = 690;
    car.engine.glowPlugs.numberOfElectrodes = 1;

    console.log(car);
    console.log(newCar);

})();