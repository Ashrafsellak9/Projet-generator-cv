document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('identifiant');
    const passwordInput = document.getElementById('motDePasse');

    
    const storedUserData = {
        username: 'sellakachraf@gmail.com',
        password: 'Ashrafines@2003'
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            alert('Please enter both username and password.');
            return;
        }

        
        if (username === storedUserData.username && password === storedUserData.password) {
            
            window.location.href = 'formulaire.html';
        } else {
            alert('Incorrect username or password.');
        }
    });
});



