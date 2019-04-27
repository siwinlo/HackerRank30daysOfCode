function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    let str = ''
    for (let i = arr.length-1; i >= 0; i--){
        str += arr[i] + ' ';
    }
    console.log(str);
}
