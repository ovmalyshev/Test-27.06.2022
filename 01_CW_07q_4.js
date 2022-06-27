function pairs (m, n) {
    var arr = [];
    for (var i = m; i <= n; i++) {
        for (var x = i; x <= n; x++) {
            arr.push([i, x]);
        }
    }
   
    return console.log(arr);
    // var arr = [];
    // for (var i = m; i <= n; i++) {
    //     for (var x = i; x <= n; x++) {
    //         var str = '';
    //         srt = '(' + i + ', ' + x + ')'; 
    //         arr.push(srt);
    //     }
    // }
    // var arr1 = [];
    // arr1.push('a');
    // console.log(arr1)
    // return console.log(arr);
//  i x  
//  2 2
//  2 3
//  2 4
//  3 3
//  3 4
//  4 4


    
}
pairs(2, 4);