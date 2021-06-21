// this is not a good syntax
var person = {
    name: "Maximillian",
    age: 30
};
// Its not good to explicitly define here , let typesscript infer based on the assignment 
var RoleIdentifier;
(function (RoleIdentifier) {
    RoleIdentifier[RoleIdentifier["ADMIN"] = 0] = "ADMIN";
    RoleIdentifier[RoleIdentifier["READ_ONLY"] = 1] = "READ_ONLY";
    RoleIdentifier[RoleIdentifier["AUTHOR"] = 2] = "AUTHOR";
})(RoleIdentifier || (RoleIdentifier = {}));
//this is a better syntax
var person1 = {
    name: "Maximillian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, "author"],
    roleIdentifier: RoleIdentifier.ADMIN
};
var favoriteActivities; // this will tell array of strings
favoriteActivities = ["Sports"];
console.log(person1.name);
person1.role.push("admin");
for (var _i = 0, _a = person1.hobbies; _i < _a.length; _i++) {
    var values = _a[_i];
    console.log("values", values);
}
for (var _b = 0, _c = person1.hobbies; _b < _c.length; _b++) {
    var hobby = _c[_b];
    console.log(hobby);
}
if (person1.roleIdentifier === RoleIdentifier.ADMIN) {
    console.log("is admin");
}
