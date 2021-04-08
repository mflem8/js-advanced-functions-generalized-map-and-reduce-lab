function map(array, callBack) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        newArray.push(callBack(element))
    }
    return newArray;
}

function reduce(array, callBack, startingPoint) {
    let newArray = (!!startingPoint) ? startingPoint : array[0]
    let i = (!!startingPoint) ? 0 : 1
    for (; i < array.length; i++) {
        newArray = callBack(array[i], newArray)
    }
    return newArray;
}