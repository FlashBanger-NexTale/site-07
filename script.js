window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');

    // Hide loading screen after 3 seconds
    setTimeout(function() {
        loadingScreen.style.display = 'none';

        // Redirect to another page
        window.location.href = 'https://www.example.com'; // Replace with the URL you want to redirect to
    }, 3000); // 3000ms = 3 seconds
});
