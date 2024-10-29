document.addEventListener('DOMContentLoaded', function () {
  console.log("Website loaded successfully.");
});

function togglePasswordVisibility(passwordId, eyeIconId) {
  const passwordField = document.getElementById(passwordId);
  const eyeIcon = document.getElementById(eyeIconId);

  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.src = "assets/img/EyeOpened.svg"; 
  } else {
    passwordField.type = "password";
    eyeIcon.src = "assets/img/EyeClosed.svg"; 
  }
}

  

document.getElementById('accountForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let valid = true;

  clearErrors();

  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.querySelectorAll('.custom-input').forEach(input => input.classList.remove('is-invalid'));

  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const password = document.getElementById('password');


  if (password.value.length < 8) {
    setError(password, 'Password must be at least 8 characters long.');
    valid = false;
  }


  if (!validateEmail(emailField.value)) {
    setError(emailField, 'Please enter a valid email address.');
    valid = false;
  }

  if (!nameField.value.trim()) {
    setError(nameField, 'Name cannot be empty.');
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
  }
});

function setError(element, message) {
  const errorDiv = document.getElementById(element.id + 'Error');
  errorDiv.textContent = message;
  element.classList.add('is-invalid');
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.querySelectorAll('.custom-input').forEach(input => input.classList.remove('is-invalid')); 
}


function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

