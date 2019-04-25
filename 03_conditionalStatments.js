function main() {
    const n = parseInt(readLine(), 10);
    if ((n % 2 !== 0) || (n >= 6 && n <= 20)) {
        console.log("Weird");
    } else {
        console.log("Not Weird");
    }
}