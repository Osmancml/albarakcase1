// there are 3 elements as num, rem ,and sum. 
function oddishOrEvenish() {
    var num, rem, sum = 0;
    num = parseInt(document.getElementById("num").value);
    while (num) {
        rem = num % 10;
        sum = sum + rem;
        num = Math.floor(num / 10);
    }
    // this function give us the sum of digits
    document.getElementById("result").value = sum;

    const oddandeven = (sum % 2 == 0) ? "even" : "odd";
    // this function give us the numbers that we obtain from above function is even or odd
    document.getElementById("oddandeven").value = oddandeven;

}