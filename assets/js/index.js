document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Checking if required fields are filled out
    const emailField = document.getElementById("email");

    if (emailField.value.trim() === "") {
        alert("There was an error, please properly fill out the email field.");
        return;
    }

    // Code to clear the form fields
    emailField.value = "";
    document.querySelectorAll(".form-check-input").forEach(input => input.checked = false);
    
    // Activate the modal named "modal-1"
    const modal = new bootstrap.Modal(document.getElementById('modal-0'));
    modal.show();

    // If you still want to redirect after showing the modal, use the following code with an appropriate delay:
    setTimeout(() => window.location.href = "index.html", 1200); // Waits for 5 seconds
    
    // Displaying the thank you message (using a modal or alert)
    // alert("Gratitude from the Digital Heart of OurCulture. Thank you for reaching out and entrusting your vision with us. We deeply value the connection we're building. Rest assured, we will meticulously review your message and our team will be in touch soon. Let's shape the digital future together!");

    // Redirecting to the index.html file
    // window.location.href = "index.html";
});