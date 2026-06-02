function submitRegistration() {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var eventType = document.getElementById('eventType').value;
  if (!name || !email || !eventType) {
    alert('Please fill in name, email, and event type.');
    return false;
  }
  var status = document.getElementById('status');
  status.textContent = 'Thank you, ' + name + '! You are registered for ' + eventType + '.';
  return false;
}
