// Reverse word in a sentences
function reverseWords(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

let sentence = "Hello World";
console.log(reverseWords(sentence));

// Remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log(removeDuplicates(arr));

//Count vowels in a string
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

let str = "Hello World";
console.log(countVowels(str));
