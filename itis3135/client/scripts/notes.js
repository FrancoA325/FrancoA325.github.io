document.addEventListener('DOMContentLoaded', function() {
    const pptContainer = document.getElementById('ppt-container');
    const iframe = document.createElement('iframe');
    iframe.src = 'images/notes.ppt';
    iframe.width = '100%';
    iframe.height = '600px';
    iframe.frameBorder = '0';
    pptContainer.appendChild(iframe);
});