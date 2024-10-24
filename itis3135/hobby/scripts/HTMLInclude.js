function loadHTML(divId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(divId).innerHTML = data;
        });
}

// Load header and footer
document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header', 'components/header.html');
    loadHTML('footer', 'components/footer.html');
});