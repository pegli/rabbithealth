
exports.arrayToDate = function(arr) {
    if (!arr || arr.length < 1) return undefined;
    var dt = new Date();
    dt.setFullYear(arr.shift() || 0);
    dt.setMonth((arr.shift() || 1) - 1);
    dt.setDate(arr.shift() || 1);
    dt.setHours(arr.shift() || 0);
    dt.setMinutes(arr.shift() || 0);
    dt.setSeconds(arr.shift() || 0);
    return dt;
};

exports.dateToArray = function(dt) {
    if (!dt) return undefined;
    var a = [];
    a.push(dt.getFullYear());
    a.push(dt.getMonth()+1);
    a.push(dt.getDate());
    a.push(dt.getHours());
    a.push(dt.getMinutes());
    a.push(dt.getSeconds());
    // trim off trailing zeros
    while (a[a.length-1] == 0) a.pop();
    return a;
}
