var Obj1 = {
    name: "lohitha",
    age: 23,
    phonenumber: 33
};
console.log(Obj1);
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === "number" || resultConversion == "asnumber") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26, "asnumber");
console.log(combineAges);
var combineNames = combine("Anna", "Max", "as-text");
console.log(combineNames);
var combineNamesWithStrings = combine("30", "20", "asnumber");
console.log(combineNames);
