// this is not a good syntax
const person:{
    name : string,
    age : number
} ={
    name : "Maximillian",
    age : 30,
    
}
// Its not good to explicitly define here , let typesscript infer based on the assignment 

//this is a better syntax
const person1 = {
    name : "Maximillian",
    age : 30,
    hobbies :['Sports','Cooking'] //here typescript detects its of string[]
}

let favoriteActivities : string[]; // this will tell array of strings
favoriteActivities=["Sports"];

console.log(person1.name)

for (const values of person1.hobbies){
    console.log("values",values)
}
for (const hobby of person1.hobbies){
    console.log(hobby)
}

