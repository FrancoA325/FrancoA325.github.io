document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header', 'components/header.html');
    loadHTML('footer', 'components/footer.html');

    document.getElementById('introForm').addEventListener('submit', function(event) {
        event.preventDefault();
        displayFormData();
    });

    document.getElementById('introForm').addEventListener('reset', function() {
        document.getElementById('result').innerHTML = '';
    });
});

function addCourse() {
    const coursesContainer = document.getElementById('coursesContainer');
    const newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.name = 'courses[]';
    newCourseInput.required = true;
    coursesContainer.appendChild(newCourseInput);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        coursesContainer.removeChild(newCourseInput);
        coursesContainer.removeChild(deleteButton);
    };
    coursesContainer.appendChild(deleteButton);
}

function displayFormData() {
    const form = document.getElementById('introForm');
    const formData = new FormData(form);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    formData.forEach((value, key) => {
        const p = document.createElement('p');
        p.innerText = `${key}: ${value}`;
        resultDiv.appendChild(p);
    });

    const resetLink = document.createElement('a');
    resetLink.href = '#';
    resetLink.innerText = 'Reset';
    resetLink.onclick = function() {
        form.reset();
        resultDiv.innerHTML = '';
    };
    resultDiv.appendChild(resetLink);
}