function checkEvenOdd() {
    let num = document.getElementById("numberInput").value;
    let resultText = "";

    if (num === "") {
        resultText = "Please enter a number.";
    } else if (num % 2 === 0) {
        resultText = num + " is Even.";
    } else {
        resultText = num + " is Odd.";
    }

    document.getElementById("result").innerText = resultText;
}

console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
