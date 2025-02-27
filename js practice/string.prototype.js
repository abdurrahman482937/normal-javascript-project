const string = "abdurrahman with raisa";

console.log(string.length); // check string length!
console.log(string[17]); // check string 17 num.. item!
console.log(string.charAt(21)); // check string 17 num.. item!
console.log(string.indexOf("raisa", 17)); // check string start for raisa index!
console.log(string.lastIndexOf("raisa", 17)); // check string start for last raisa index!
console.log(string.slice(17, 22)); // check fast index to last index in string !
console.log(string.substring(17, 0)); // & same deferent! check fast index to last index in string !
console.log(string.split("", 11)); // string in array !
console.log(string.includes("raisa", 17)); // check string is includes? !
console.log(string.startsWith("abdurrahman")); // check string !
console.log(string.endsWith("raisa", 22)); // check string !
console.log(string.concat(" === ", string)); // check string !
console.log(string.repeat(5)); // check string !
console.log(string.trimStart()); // check string !
console.log(string.trim()); // check string !
console.log(string.trimEnd()); // check string !
console.log(string.padStart(25)); // check string !
console.log(string.padEnd(25, "12345")); // check string !
console.log(string.localeCompare('abdurrahman with raisa')); // check string !
console.log(string.search('raisa')); // check string !
console.log(string.match('raisa')); // check string !
console.log(string.matchAll('raisa')); // check string !
console.log(string.replace(/r/g, e => e.toUpperCase())); // check string !
console.log(string.replaceAll('r', e => e.toUpperCase())); // check string !
console.log(string.charCodeAt()); // check string !
console.log(string.codePointAt()); // check string !
console.log(string.toLowerCase()); // check string !
console.log(string.toUpperCase()); // check string !
console.log(string.toLocaleLowerCase('en')); // check string !
console.log(string.toLocaleUpperCase('tr')); // check string !
// console.log(string.length); // check string !
// console.log(string.length); // check string !

// just try!
/**

**/
