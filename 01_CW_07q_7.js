function easywallpaper (l, w, h) {
    if (l == 0 || w == 0 || h == 0){
        amount = 0
    } else {
        let area = 2*(l + w) * h;
        var amount = Math.ceil(area/0.52/10*1.15);
        var amount1 = area/0.52/10*1.15;
    }
    var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    
    return console.log(numbers[amount], amount, amount1);
}

easywallpaper(4.2, 3.5, 3.0);