function weIrDStRiNgCaSe(str) {
    var arr = str.split(' ');
    var newArr
    // if (arr[0].charAt(0).toUpperCase() !== arr[0].charAt(0)) {
    //     arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
    // }
    for (var i = 0; i < arr.length; i++) {
       
            arr[i] = arr[i].split('').map(function(value, index) {
                return index % 2 == 0 ? value.toUpperCase() : value.toLowerCase();
                }).join('') 
       
        }
    
    var newStr = arr.join(' ');
    console.log(newStr);
}
weIrDStRiNgCaSe('String');
