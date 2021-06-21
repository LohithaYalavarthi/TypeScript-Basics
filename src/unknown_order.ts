let userInput : unknown
let userName : string

userInput=5;
userInput="Max"

//unknown
if(typeof userInput == "string"){
    userName = userInput
}


//never logic

function generateError(message : string , code : number){
    throw {message,errorCode : code}
}

generateError("An error code", 500);

function sendAnalytics (data : string){

    console.log(data);
}

sendAnalytics("Hello this is stting")
