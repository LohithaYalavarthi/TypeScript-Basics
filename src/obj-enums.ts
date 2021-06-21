// this is not a good syntax
const person:{
    name : string,
    age : number
} ={
    name : "Maximillian",
    age : 30,
    
}
// Its not good to explicitly define here , let typesscript infer based on the assignment 
enum RoleIdentifier {
    ADMIN,READ_ONLY,AUTHOR
}
//this is a better syntax
const person1:{
    name : string,
    age : number,
    hobbies : string[],
    role : [number,string],
    roleIdentifier : number
} = {
    name : "Maximillian",
    age : 30,
    hobbies :['Sports','Cooking'], //here typescript detects its of string[]
    role :[2,"author"],
    roleIdentifier: RoleIdentifier.ADMIN
}

let favoriteActivities : string[]; // this will tell array of strings
favoriteActivities=["Sports"];

console.log(person1.name)
person1.role.push("admin")

for (const values of person1.hobbies){
    console.log("values",values)
}
for (const hobby of person1.hobbies){
    console.log(hobby)
}
if(person1.roleIdentifier === RoleIdentifier.ADMIN){
 console.log("is admin")
}
