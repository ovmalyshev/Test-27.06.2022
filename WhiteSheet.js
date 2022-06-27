function belong(arr) {
    function returnValue (arr) {
        var obj = {};
        var arrNew = [];
        var k = 0;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    k = k + 1;
                    obj[arr[i]] = k;
                }
            }
            k = 0;
        }
        for (var key in obj) {
            arrNew.push(obj[key]);
        } 
        var minValue = Math.min.apply(null, arrNew);
        
        for (var key in obj) {
            if (obj[key] == minValue) {
               return (key);
            }
        } 
    }

    var arrayChoose;

    function positiveFilter(value) {
        return value >= 0
    }
    function negativeFilter(value) {
        return value <= 0
    }
    
    function number(value) {
        if (typeof(value) == "number") {
            return value
        }
    }
    let positiveArrayFilter = arr.filter(positiveFilter);
    let negativeArrayFilter = arr.filter(negativeFilter);
    let numberArray = arr.filter(number);
    if (numberArray.length == arr.length || numberArray.length == arr.length-1) {
        arrayChoose = "numberArray";
    }

    if (arrayChoose == "numberArray") {
        if (positiveArrayFilter.length == arr.length-1) {
            console.log(negativeArrayFilter.join()) //
        } else if (negativeArrayFilter.length == arr.length-1){
            console.log(positiveArrayFilter.join()) //
        } else {
        console.log(returnValue(arr)) //
        }
    }

    //string
    let stringArray = arr.filter(string);
    function string(value) {
        if (typeof(value) == "string") {
            return value
        }
    }

    function notString(value) {
        if (typeof(value) !== "string") {
            return value
        }
    }
    if (stringArray.length == arr.length-1) {
        arrayChoose = "stringArrayV1";
    }
    if (arrayChoose == "stringArrayV1") {
        console.log(arr.filter(notString).join())   //
        
    }

    if (stringArray.length == arr.length) {
        arrayChoose = "stringArrayV2";
    }
    if (arrayChoose == "stringArrayV2") {
        
        console.log(returnValue(arr))   //
    }
    
    // boolen
    let bollenArray = arr.filter(boolen);
    function boolen(value) {
        return value === true || value === false
    }

    var middle = arr.map(function(value){ return (value === true || value === false) ? null : value})
    function notBoolen(value) {
    
        return value !== null;
    }

    if (bollenArray.length == arr.length-1) {
        arrayChoose = "bollenArrayV1";
        // console.log(returnValue(arr))
    }
    if (arrayChoose == "bollenArrayV1") {
        console.log(middle.filter(notBoolen).join())    //
    }

    if (bollenArray.length == arr.length) {
        arrayChoose = "bollenArrayV2";  
        // console.log(returnValue(arr))
    }
    if (arrayChoose == "bollenArrayV2") {
        console.log(returnValue(arr))   //
    }
}
belong([-8, -8, -8, -8, 1]);
belong(["-1", "5", "-2", "-3", -4]);
belong(['a', 'b', 'c', true, 'a']);
belong(['1', 2, '4', '6', '8']);
belong(['a', 'a', 'a', 'b']);
belong([true, false, true, 2, false]);
belong([true, false, true, true, true]);

belong([1, 2, 2, 2, 2])
belong(['1', 2, '4', '6', '8'])
belong([2, 2, -2, 6, 10])
belong(['a', 'a', 'b', 'a', 'a', 'a', 'a'])