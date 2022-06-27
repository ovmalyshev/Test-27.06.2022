function convertstringtocamelcase(str) {
    var separator = str.indexOf('-') == -1 ? '_' : '-'
    var arr = str.split(separator);
    // if (arr[0].charAt(0).toUpperCase() !== arr[0].charAt(0)) {
    //     arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
    // }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].charAt(0).toUpperCase() !== arr[i].charAt(0)) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
    }
    var newStr = arr.join('');
    console.log(newStr);
}
convertstringtocamelcase('The-Stealth-Warrior');
