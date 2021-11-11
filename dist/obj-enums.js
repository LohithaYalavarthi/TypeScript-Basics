"use strict";
// this is not a good syntax
const person = {
    name: "Maximillian",
    age: 30,
};
// Its not good to explicitly define here , let typescript infer based on the assignment 
var RoleIdentifier;
(function (RoleIdentifier) {
    RoleIdentifier[RoleIdentifier["ADMIN"] = 0] = "ADMIN";
    RoleIdentifier[RoleIdentifier["READ_ONLY"] = 1] = "READ_ONLY";
    RoleIdentifier[RoleIdentifier["AUTHOR"] = 2] = "AUTHOR";
})(RoleIdentifier || (RoleIdentifier = {}));
//this is a better syntax
const person1 = {
    name: "Maximillian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, "author"],
    roleIdentifier: RoleIdentifier.ADMIN
};
let favoriteActivities; // this will tell array of strings
favoriteActivities = ["Sports"];
console.log(person1.name);
person1.role.push("admin");
for (const values of person1.hobbies) {
    console.log("values", values);
}
for (const hobby of person1.hobbies) {
    console.log(hobby);
}
if (person1.roleIdentifier === RoleIdentifier.ADMIN) {
    console.log("is admin");
}
//# sourceMappingURL=obj-enums.js.map