const reverseString = function(word) {
    let letters = word.split("")
    let reverse = ""
    for (let i = 0; i < word.length; i++) {
        reverse += letters.pop();
    }
    return reverse;
    // Alternately, split("").reverse().join() just streamlines this.
};

// Do not edit below this line
module.exports = reverseString;
