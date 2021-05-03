// this is not a good syntax
var person = {
    name: "Maximillian",
    age: 30
};
// Its not good to explicitly define here , let typesscript infer based on the assignment 
//this is a better syntax
var person1 = {
    name: "Maximillian",
    age: 30,
    hobbies: ['Sports', 'Cooking'] //here typescript detects its of string[]
};
var favoriteActivities; // this will tell array of strings
favoriteActivities = ["Sports"];
console.log(person1.name);
for (var _i = 0, person1_1 = person1; _i < person1_1.length; _i++) {
    var values = person1_1[_i];
    console.log("values", values);
}
for (var _a = 0, _b = person1.hobbies; _a < _b.length; _a++) {
    var hobby = _b[_a];
    console.log(hobby);
}
