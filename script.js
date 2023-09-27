// Get references to the textarea and button
const inputTextArea = document.getElementById("convertToupperCase");
const convertButton = document.getElementById("convertButton");
let returntext = document.getElementById("changedText");

// Add a click event listener to the button
convertButton.addEventListener("click", function() {
    // Get the text from the textarea
    const text = inputTextArea.value;

    // Check if the textarea is empty
    if (text.trim() === "") {
        returntext.innerText="Textarea is empty. Please enter some text.";
        return;
    }

    // Convert the text to uppercase
    const uppercaseText = text.toUpperCase();

    // Display the uppercase text in an alert
    returntext.innerText="Uppercase Text:\n" + uppercaseText;
    // alert();
});
