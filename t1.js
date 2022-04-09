let sentence1 = prompt('your sentence: ');
let word1 = prompt('enter your word: ')
function findWord(word, sentence){

let aSen = sentence.split(' ');

const isEx = aSen.filter((item) => { return item === word});

return isEx[0] === word;
}
console.log(findWord(word1, sentence1));
