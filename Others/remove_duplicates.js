//Remove duplicates form an array


//easy method in ES6
//const newArr = [...new Set(arr)];

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
function remove_duplicates(arr) {
    var obj = {};
    var ret_arr = [];
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    console.log(obj);
    for (var key in obj) {
        ret_arr.push(key);
    }
    return ret_arr.map(Number);
}
console.log(remove_duplicates(arrOfNum)); // [1, 2, 4, 5, 6]