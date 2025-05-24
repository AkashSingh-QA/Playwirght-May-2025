function reverseWordOrder(Sentence) {
    let words = Sentence.split(' ');  // Split by space, not by character
    let reversedSentence = words.reverse().join(' ');
    return reversedSentence;
}
//hello updated 
// Example usage
let sentence = "I am new to Playwright With Javascript";
let result = reverseWordOrder(sentence);
console.log(result);  // Output: "Javascript With Playwright to new am I"npx pla