function processData(input) {
    //I've commented my first solution, which I couldn't seem to get to work. I looked at a few other examples for the second, which departs significantly from how I usually code (use of arrows to declare functions) so this was still a good learning experience
    
    // const myArray = input.split('/n');
    // var even = '';
    // var odd = '';

    // for (var i = 1; i < myArray.length; i++) {
    //     for (var j = 0; j < myArray.length[i]; j++) {
    //         if (j % 2 === 0) {
    //             even = even + myArray[i][j];
    //         } else {
    //             odd = odd + myArray[i][j];
    //         }
    //     }
    //     console.log(even + ' ' + odd);
    //     even = '';
    //     odd = '';
    // }
    let arr = input.split("\n"), even, odd;

    arr.forEach((word) => {
        even = "";
        odd = "";

        if (!isNaN(word))
            return;

        Array.from(word).forEach((letter, index) => {

            if (index === 0 || index % 2 === 0) {
                even += letter;
            } else {
                odd += letter;
            }

        });

        console.log(even.concat(" ", odd));
    });
}