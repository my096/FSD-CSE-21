

// function sum(a, b) {
//     return a + b;
// }
// function sumwithMsg(cb,msg) {
//     const result = cb(23, 43);
//     const fresult = "Hii " + msg + " Your score is " + result;
//     console.log(fresult);
// }
// sumwithMsg(sum,"Mr. Mohit");



function sum(a, b) {
    return a + b;
}
function add(ab) {
    const result = ab(4, 6);
    console.log(result);
}
add(sum);