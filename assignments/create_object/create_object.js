function CreateObject(arr) {
    // Write your code here
    const obj={}
    for (i = 0; i < arr.length; i += 2) {
        obj[arr[i]] = arr[i + 1]
        
    }
    return obj
}

module.exports = CreateObject;