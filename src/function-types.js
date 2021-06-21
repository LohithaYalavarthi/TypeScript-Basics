function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is", num);
}
var combineValues;
combineValues = add(2, 3);
combineValues = 5;
var alone;
alone = add;
alone(5, 6);
alone = printResult;
alone(4, 5);
var morePrecise;
var morePrintPrecise;
morePrintPrecise = add;
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    var need = cb(result);
    console.log("need", need);
}
addAndHandle(2, 3, function (result) {
    console.log("trace", result);
    // return result
});
