document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (checkPassword()) {
                console.log('Form submitted successfully');
            } else {
                console.log('Form validation failed');
            }
        });
    }
});

function checkPassword() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    if (passwordInput && confirmPasswordInput) {
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if (passwordValue !== confirmPasswordValue) {
            console.log('Passwords do not match');
            return false;
        }
    }
    return true;
}