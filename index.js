function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('show'));
    document.getElementById(tabId).classList.add('show');
}

function reverseString() {
    const userInput = document.getElementById("reverseInput").value;
    const reversed = userInput.split("").reverse().join("");
    document.getElementById("reverseResult").textContent = reversed;
}

function checkPalindrome() {
    const input = document.getElementById("palindromeInput").value;
    const reversed = input.split("").reverse().join("");
    const result = input === reversed ? "It's a palindrome!" : "Not a palindrome.";
    document.getElementById("palindromeResult").textContent = result;
}

function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const tipAmount = (tipPercentage / 100) * subtotal;
    const totalAmount = subtotal + tipAmount;
    document.getElementById("totalResult").textContent = "Total amount including tip: $" + totalAmount.toFixed(2);
}
