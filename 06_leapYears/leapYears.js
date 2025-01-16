const leapYears = function(year) {
    const yearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const fourHundredYears = year % 400 === 0;

    if (yearDivisibleByFour && (!isCentury || fourHundredYears)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
