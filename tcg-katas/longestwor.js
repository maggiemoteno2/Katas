function findLongest(str) {
    var spl = str.split(' ');
    console.log(spl)
    var longest = 0;
    for (var i in spl) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }

    }
    return longest
}

console.log(findLongest('The quick white fox jumped around the massive dog'))