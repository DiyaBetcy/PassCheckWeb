document.getElementById('passwordInput').addEventListener('input', function() {
    var password = this.value;
    var strengthIndicator = document.getElementById('strengthIndicator');
    var requirements = [];
  
    if (password.length < 8) {
      requirements.push("At least 8 characters long");
      passwordInput.style.border= '2px solid red';
    }
  
    if (!password.match(/[0-9]/)) {
      requirements.push("At least one number");
      passwordInput.style.border= '2px solid red';
    }
  
    if (!password.match(/[a-z]/)) {
      requirements.push("At least one lowercase letter");
      passwordInput.style.border= '2px solid red';
    }
  
    if (!password.match(/[A-Z]/)) {
      requirements.push("At least one uppercase letter");
      passwordInput.style.border= '2px solid red';
    }
  
    if (!password.match(/[^A-Za-z0-9]/)) {
      requirements.push("At least one special character");
      passwordInput.style.border= '2px solid red';
    }
  
    if (requirements.length === 0) {
      strengthIndicator.innerHTML = "Strong password!";
      strengthIndicator.style.color = "green";
      passwordInput.style.border= '2px solid green';
    } else {
      strengthIndicator.innerHTML = "Weak password. Requirements not satisfied:<br>" + requirements.join("<br>");
      strengthIndicator.style.color = "red";
      passwordInput.style.border= '2px solid red';
    }
  });