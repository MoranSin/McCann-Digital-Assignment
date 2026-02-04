document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default submit
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(el => el.remove());

    // Fullname validation
    const fullname = form.fullname;
    if (!fullname.value.trim()) {
      showError(fullname, "יש להזין שם מלא");
      valid = false;
    }

    // Phone validation (simple pattern: digits only, min 7 digits)
    const phone = form.phone;
    const phonePattern = /^\d{7,}$/;
    if (!phone.value.trim()) {
      showError(phone, "יש להזין מספר טלפון");
      valid = false;
    } else if (!phonePattern.test(phone.value.trim())) {
      showError(phone, "יש להזין מספר טלפון תקין");
      valid = false;
    }

    // Email validation
    const email = form.email;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError(email, "יש להזין כתובת מייל");
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, "יש להזין כתובת מייל תקינה");
      valid = false;
    }

    // Select validation
    const hall = form.hall;
    if (!hall.value) {
      showError(hall, "יש לבחור עיר מהרשימה");
      valid = false;
    }

    if (valid) {
      alert("הטופס נשלח בהצלחה!");
      form.submit(); // submit form if valid
    }
  });

  // Function to show error message
  function showError(input, message) {
    const error = document.createElement("small");
    error.classList.add("error-message");
    error.style.color = "red";
    error.style.display = "block";
    error.style.position = "absolute";
    error.textContent = message;

    if (input.type === "checkbox") {
      input.closest(".checkbox-group").appendChild(error);
    } else {
      input.parentElement.appendChild(error);
    }
  }
});
