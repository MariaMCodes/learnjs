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

//String concatenation
function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial + lastNameInitial;

}

console.log(concatInitials("J", "D"));

//Text ellipsis Project II
export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    let test = text.substring(0, 10);
    return test + "...";
}

//String Interpolation
function sayHello(name) {
    return `Hello ${name}`;
}

console.log(sayHello("Alex")); //"Hello Alex"


//String interpolation advanced
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(getFullName("Sam", "Doe")); // "Sam Doe"


//Multiline string
function getMultilineString() {
    return `I am learning JavaScript 
        and I found it to be
        quite fun!`;
}

//Capitalize word
function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

console.log(capitalize("sam")); // "Sam"

//Name variations Project
export function getNumberOfChars(name) {
    // number of characters in: name
    return name.length;

}

export function getFirstChar(name) {
    // first character of: name
    return name[0];
}

export function getLastChar(name) {
    // last character of: name
    return name.at(-1);
}

export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase();
}

export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toUpperCase();
}

export function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
}