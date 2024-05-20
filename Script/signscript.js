document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Save username and password to localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  
  alert('Registration successful!');
  this.reset();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var loginUsername = document.getElementById('loginUsername').value;
  var loginPassword = document.getElementById('loginPassword').value;
  
  var storedUsername = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');
  
  if (loginUsername === storedUsername && loginPassword === storedPassword) {
      alert('Login successful!');
  } else {
      alert('Incorrect username or password. Please try again.');
  }
  this.reset();
});
function validateForm() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var passwordPattern = /^(?=.*\d)(?=.*[!*$])\S{7,}$/;

  if (!passwordPattern.test(password)) {
      alert("Пароль должен содержать не менее 7 символов, включая цифры и символы !, *, $.");
      return false;
  }

  if (password !== confirmPassword) {
      alert("Пароли не совпадают.");
      return false;
  }

  return true;
}