const form = document.getElementById('registration-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const organization = document.getElementById('organization').value;
  const hobbies = document.getElementById('hobbies').value;

  // Validation
  let errorMessage = '';
  if (!firstName || !lastName || !email || !password || !confirmPassword || !organization) {
    errorMessage = 'Please fill out all required fields.';
  } else if (password !== confirmPassword) {
    errorMessage = 'Passwords do not match.';
  }

  if (errorMessage) {
    resultDiv.innerHTML = `<p id="error-message">${errorMessage}</p>`;
  } else {
    resultDiv.innerHTML = `<p>Welcome ${firstName} ${lastName}!</p>`;
    form.reset();
  }
});
