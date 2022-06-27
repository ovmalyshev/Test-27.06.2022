function date_nb_days (a0, a, p) {
    var amount;
    var i = 0;
    for (a0; a0 < a; a0 = a0 + a0*p/100/360) {
        amount = a0 + a0*p/100/360;
        i = i + 1;
    }
    // console.log(amount, i)

    const date = new Date('2016-01-01');
    // console.log(date)
    date.setDate(date.getDate() + i);
    // return console.log(date.toLocaleDateString().toString());
    // --------------------
    // variant 1
    
    var d = date.toLocaleDateString().toString().split('-');
    console.log(d)
    var newDate = d.map((value) => value.length > 1 ? value : "0" + value).join('-');
    console.log(newDate);
    // --------------------
    // variant 2
    
    const dateDate = new Date(2016, 0, 02 + i);
    // dateDate.setDate(dateDate.getDate() + i);
    console.log(dateDate.toISOString().split('T')[0]);
    
}

date_nb_days(3525, 4822, 3);