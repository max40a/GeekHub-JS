(function () {

    function randomWordGenerator() {
        function randomRange(min, max) {
            return min + Math.floor(Math.random() * (max + 1 - min));
        }

        var randomWord = "";
        var randomWordLength = randomRange(1, 10);
        for (var i = 0; i < randomWordLength; i++) {
            randomWord += String.fromCharCode(randomRange(0x0061, 0x007A));
        }
        return randomWord;
    }

    var arr = [];
    var unOrderedObj = {};
    var orderedObj = {};

    for (var j = 0; j <= 100000; j++) {
        arr[j] = randomWordGenerator();
        orderedObj[j] = randomWordGenerator();
        unOrderedObj[randomWordGenerator()] = randomWordGenerator();
    }

    function testForIter(obj) {
        var start = Date.now();
        var peek = "";
        var countOfIterations = obj.length || Object.keys(obj).length;
        for (var i = 0; i <= countOfIterations; i++) {
            peek += obj[i];
        }
        var finish = Date.now();
        return finish - start;
    }

    function testForIn(obj) {
        var start = Date.now();
        var peek = "";
        for (var key in obj) {
            peek += obj[key];
        }
        var finish = Date.now();
        return finish - start;
    }

    console.log("array for iteration: " + testForIter(arr) + " ms");
    console.log("array for in: " + testForIn(arr) + " ms");
    console.log("orderedObj for iteration: " + testForIter(orderedObj) + " ms");
    console.log("orderedObj for in: " + testForIn(orderedObj) + " ms");
    console.log("unOrderedObj for iteration: " + testForIter(unOrderedObj) + " ms");
    console.log("unOrderedObj for in: " + testForIn(unOrderedObj) + " ms");

})();