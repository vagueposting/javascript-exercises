const reverseString = function(word) {
    let letters = word.split("")
    let reverse = ""
    for (let i = 0; i < word.length; i++) {
        reverse += letters.pop();
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
