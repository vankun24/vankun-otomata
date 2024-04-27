document.getElementById("sciForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var numberInput = document.getElementById("number").value;
    var resultElement = document.getElementById("result");
    var pattern = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
    if (pattern.test(numberInput)) {
        resultElement.textContent = "Wow, you're right it's a scientific number!🤩";
        resultElement.style.color = "#333";
    } else {
        resultElement.textContent = "Oh no, you're wrong that's not a scientific number😔";
        resultElement.style.color = "#333"; 
    }
});