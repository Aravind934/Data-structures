const getUniqueValues = (arr) => {
    if (!arr.length) return arr;
    let frequency = {}, result = []
    //get frequency of every array elements
    for (item of arr) {
        if (!frequency[item]) frequency[item] = 1
        else frequency[item] += 1
    }
    //filter the unique elements
    for (item in frequency) {
        if (frequency[item] === 1) result.push(+item)
    }
    return result //O(n)
}

// let res = getUniqueValues([12, 12, 34, 45, 67, 67, 10, 20]);
// console.log(res)
