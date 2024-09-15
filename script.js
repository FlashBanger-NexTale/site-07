window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');

    // Hide loading screen after 3 seconds
    setTimeout(function() {
        loadingScreen.style.display = 'none';

        // Redirect to another page
        window.location.href = 'https://flashbanger-nextale.github.io/site-07/rules.html'; // Replace with the URL you want to redirect to
    }, 5000); // 3000ms = 3 seconds
});
