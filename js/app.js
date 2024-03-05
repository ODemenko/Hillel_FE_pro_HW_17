const inputField = document.getElementById('textInput');
const messageDiv = document.getElementById('message');

inputField.addEventListener('focus', function() {
  messageDiv.style.display = 'block';
});

inputField.addEventListener('blur', function() {
    messageDiv.style.display = 'none';
});