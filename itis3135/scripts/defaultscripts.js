document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header', 'components/header.html');
    loadHTML('footer', 'components/footer.html');
    displayDateTime();
});

function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById('dateTime').innerText = `Today is ${formattedDate}`;
}

function greetUser() {
    const userName = document.getElementById('userName').value;
    const userMood = document.getElementById('userMood').value;
    document.getElementById('greeting').innerText = `The Funky Ant welcomes you, ${userName}! We're glad you are doing ${userMood}!`;
}

function checkPolygon() {
    let favoriteNumber = parseFloat(document.getElementById('favoriteNumber').value);
    favoriteNumber = Math.abs(Math.round(favoriteNumber));
    const polygons = ["monogon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    const polygonName = polygons[favoriteNumber - 1] || "polygon with more than 10 sides";
    alert(`The polygon with ${favoriteNumber} sides is called a ${polygonName}.`);
}

function tires() {
    alert("Funky Ant is analyzing tire performance!");
}

function suspension() {
    alert("Funky Ant is optimizing suspension!");
}

function price() {
    alert("Funky Ant is calculating pricing!");
}
function teamInfoModal() {
    document.getElementById("teamInfoModal").classList.add("show");
}

function submitTeamInfo() {
    const teamName = document.getElementById("teamName").value;
    const teamMembers = document.getElementById("teamMembers").value;
    const teamLocation = document.getElementById("teamLocation").value;

    const teamInfoMessage = `Team Name: ${teamName}\nTeam Members: ${teamMembers}\nTeam Location: ${teamLocation}`;

    if (confirm(`${teamInfoMessage}\n\nIs this information correct?`)) {
        alert("Thank you for providing your team information!");
        document.getElementById("teamInfoModal").classList.remove("show");
    }
}

function mailingModal() {
    document.getElementById("mailingModal").classList.add("show");
}

function mailingList() {
    const email = document.getElementById("email").value;

    if (confirm(`Is ${email} the correct email address?`)) {
        alert("Thank you for signing up for our mailing list!");
        document.getElementById("mailingModal").classList.remove("show");
    }
}