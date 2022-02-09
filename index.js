const string = "Let\'s have dinner together!"

const roommateResponeOne = "I can\'t hear you!"

const roommateResponeTwo = "YES INDEED!"

const roommateResponseThree = "I would love to!"


function shout(string) {
   return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return roommateResponeOne;
    } if (string === string.toUpperCase()) {
        return (roommateResponeTwo);
       } if (string === "LET\'S HAVE DINNER TOGETHER!"); {
    return roommateResponseThree;}
    }

 