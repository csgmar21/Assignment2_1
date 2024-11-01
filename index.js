function reverseString() {
    const userInput = document.getElementById("userInput").value;
    const reversed = userInput.split("").reverse().join("");
    document.getElementById("result").textContent = reversed;
}
