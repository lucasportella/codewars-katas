function twoSort(array) {
    const star = array.sort()[0]
    return star.split('').join('***')
}

testArray = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]

console.log(twoSort(testArray));
