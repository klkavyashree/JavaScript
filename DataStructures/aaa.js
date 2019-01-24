var arr = [["1:"], ["2:"]]

data = [1, 2, 3, 4];

for (let i = 0; i < data.length; i++) {
    var j = 1;
    var rem = data[i] % 2;

    while (arr[rem][j] != undefined) {
        j++
    }
    arr[rem][j] = data[i];
}
console.log(arr)


