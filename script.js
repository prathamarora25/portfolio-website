document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Console output
    console.log("----- New Message -----");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("-----------------------");

    console.table({ name, email, message });

    // Show success message
    document.getElementById("successMsg").innerText =
      "✅ Message sent successfully!";

    // Reset form
    form.reset();
  });

});