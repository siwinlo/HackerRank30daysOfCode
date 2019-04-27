function processData(input) {
    //Enter your code here
    input = input.split('\n');
    const phoneBook = [];

    for (let i = 1; i <= input[0]; i++) {
        var entry = input[i].split(' ');
        phoneBook[entry[0]] = entry[1];
    }

    for (i = (parseInt(input[0]) + 1); i < input.length; i++) {
        if (phoneBook[input[i]]) {
            console.log(input[i] + '=' + phoneBook[input[i]]);
        } else {
            console.log('Not found');
        }
    }
}