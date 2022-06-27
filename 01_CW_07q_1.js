function longest (a, b) {
    var arrB = b.split('');
    for (var i = 0; i < arrB.length; i++) {
        if (a.indexOf(arrB[i]) == -1){
            a = a.concat(arrB[i]);
        }
    };
    console.log(a.split('').sort().join('').replace(/(.)(?=.*\1)/g, ""));
    
}
longest ("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz");
