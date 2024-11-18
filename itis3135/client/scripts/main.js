function loadHTML(divId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(divId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header', 'components/header.html');
    loadHTML('footer', 'components/footer.html');
});