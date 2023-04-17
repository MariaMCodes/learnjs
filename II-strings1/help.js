//String Length
function getCharCount(str) {
    return str.length;
}
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); //8

//Upper Case
function shoutMyName(name) {
    return name.toUpperCase();
}

console.log(shoutMyName("Sam")); //SAM

//Lower Case
function lowerName(name) {
    return name.toLowerCase();
}

console.log(lowerName("SAM")); //sam

//Get First Character
function getFirstCharacter(name) {
    return name[0];
}

console.log(getFirstCharacter("Amy")); //A

//Get Last Character
function getLastCharacter(name) {
    return name.at(-1);
}

console.log(getLastCharacter("Sam")); //m

//Skip first character
function skipFirstCharacter(text) {
    return text.substring(1);
}

console.log(skipFirstCharacter("Xcode")); //code


//Text ellipsis Project 
export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    return text.substring(0, 10);

}