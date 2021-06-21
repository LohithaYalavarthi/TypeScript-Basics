var userInput;
var userName;
userInput = 5;
userInput = "Max";
//unknown
if (typeof userInput == "string") {
    userName = userInput;
}
//never logic
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error code", 500);
function sendAnalytics(data) {
    console.log(data);
}
sendAnalytics("Hello this is stting");
