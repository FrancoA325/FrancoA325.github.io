document.addEventListener("DOMContentLoaded", function() {
    loadMenu('header', 'components/nav_main.json');
    loadMenu('footer', 'components/nav_footer.json');
});

function loadMenu(containerId, jsonFile) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById(containerId);
            data.forEach((item, index) => {
                if (index > 0) {
                    const separator = document.createElement("span");
                    separator.textContent = " | ";
                    container.appendChild(separator);
                }
                const link = document.createElement("a");
                link.textContent = item.name;
                link.href = item.url;
                container.appendChild(link);
            });
        })
        .catch(error => console.error("Error fetching menu:", error));
}

function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

function validateAIM() {
    window.open("https://webaim.org/search/?q=afsd", "_blank");
}