function findMatching(array, string) {
    return array.filter(function (array) {
        return array.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array, string) {
    return array.filter(function (array) {
        return array[0].toLowerCase() === string[0].toLowerCase()
    })
}

function matchName(array, string) {
    return array.filter(function (array) {
        return array.name === string
    })
}