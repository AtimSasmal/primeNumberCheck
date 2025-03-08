function checkPrime() {
    const num = document.getElementById("number").value;
    const resultElement = document.getElementById("result");
    
    // Check if input is a valid number
    if (num === "" || isNaN(num)) {
        resultElement.textContent = "Please enter a valid number!";
        resultElement.style.color = "red";
        return;
    }

    const n = parseInt(num);

    // Check if the number is prime
    if (n <= 1) {
        resultElement.textContent = `${n} is not a prime number.`;
        resultElement.style.color = "red";
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            resultElement.textContent = `${n} is a prime number!`;
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = `${n} is not a prime number.`;
            resultElement.style.color = "red";
        }
    }
}
