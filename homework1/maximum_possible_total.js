function maxTotal(arr) {
    var res = 0;
    var maxi = 0;
    for (i = 0; i < 5; ++i) {
        maxi = Math.max.apply(Math, arr);
        res += maxi;
        arr.splice(arr.indexOf(maxi), 1);
    }
    return res;
}