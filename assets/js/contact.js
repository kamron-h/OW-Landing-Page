document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Checking if required fields are filled out
    console.log("Checked field validation");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const companyField = document.getElementById("company");
const jobTitleField = document.getElementById("job");
const messageField = document.getElementById("message");

    // console.log("Checking if forms are empty");
    // if (nameField.value.trim() === "" || emailField.value.trim() === "" || companyField.value.trim() === "" || jobTitleField.value.trim() === "" || messageField.value.trim() === "") {
    //     alert("Please fill out all required fields.");
    //     return;
    // }

    // Code to clear the form fields
    console.log("Clearing fields");
    nameField.value = "";
    emailField.value = "";
    companyField.value = "";
    jobTitleField.value = "";
    messageField.value = "";
    document.querySelectorAll(".form-check-input").forEach(input => input.checked = false);
    
    // Activate the modal named "modal-1"
    console.log("Activating modal named modal-1");
    const modal = new bootstrap.Modal(document.getElementById('modal-1'));
    modal.show();
    
    // If you still want to redirect after showing the modal, use the following code with an appropriate delay:
    setTimeout(() => window.location.href = "index.html", 2000); // Waits for 5 seconds

    // Displaying the thank you message (using a modal or alert)
    // alert("Gratitude from the Digital Heart of OurCulture. Thank you for reaching out and entrusting your vision with us. We deeply value the connection we're building. Rest assured, we will meticulously review your message and our team will be in touch soon. Let's shape the digital future together!");

    // Redirecting to the index.html file
    // window.location.href = "index.html";
});
