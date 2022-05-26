function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }

function logShout(string) {
    console.log(string.toUpperCase())  
}
function logWhisper(string) {
    console.log(string.toLowerCase())
 }
 function sayHiToHeadphonedRoommate(string) {
    if (string ==('hello')) {
        return "I can't hear you!"
     } else if (string ==('HELLO')) {
         return  "YES INDEED!"
     } if (string ==("Let's have dinner together!")) {
         return "I would love to!"
     }
    }
    const string = "Hello!";

console.log(string);
console.log(string.toUpperCase());

console.log(string === string.toUpperCase());
    
console.log(string);
console.log(string.toLowerCase());

console.log(string === string.toLowerCase());