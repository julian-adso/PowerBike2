document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.querySelector('.login-button');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission for this demo
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Basic validation
            if (username.trim() === '' || password.trim() === '') {
                alert('Por favor, completa todos los campos.');
                return;
            }

            // Simulate login attempt
            loginButton.textContent = 'Ingresando...';
            loginButton.disabled = true;

            // Simulate a network request
            setTimeout(() => {
                // For demo, let's just log to console and reset
                console.log('Login attempt:', { username, password });
                alert(`Intento de inicio de sesión para: ${username}`);
                
                loginButton.textContent = 'Ingresar';
                loginButton.disabled = false;
                // loginForm.reset(); // Optionally reset form fields
            }, 1500);
        });
    }

    // Small interactive effect for input fields
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
});

