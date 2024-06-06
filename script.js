// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validación básica
    if (username === '' || password === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Crear una petición POST
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirigir a la página principal o mostrar un mensaje de éxito
        window.location.href = '/dashboard';
      } else {
        // Mostrar un mensaje de error
        alert('Credenciales incorrectas.');
      }
    })
    .catch(error => console.error('Error:', error));
  });