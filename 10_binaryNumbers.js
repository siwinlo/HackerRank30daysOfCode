function main() { 
    const n = parseInt(readLine(), 10);
    const countArray = [];
    let count = 0;
    // this converts the string into binary (radix=2) and splits it into an array of single digits
    let inputBinary = n.toString(2).split('');

    inputBinary.forEach((digit, index)=> {
        //these two "if" statements count the 1s
        if (digit === '1') {
            count++;
            // this if statement ends the count when we get to the last digit of the binary sequence
            if (index === inputBinary.length-1){
                countArray.push(count);
            }
            // if we come across a digit which is not '1' (i.e., '0'), set the counter to 0
        } else {
            countArray.push(count);
            count = 0;
        }
    });
    // This line reverses countArray so we see the largest value first
    console.log(countArray.sort((a, b) => b - a)[0]);
}
