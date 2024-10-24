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
    alert("Funky Ant is optimizing aerodynamics!");
}

function teamInfo() {
    alert("Add some team info here!");
    const teamName = prompt("Please enter your team name:");
    const teamMembers = prompt("Please enter your team members (comma separated):");
    const teamLocation = prompt("Please enter your team location:");
    alert(`Team Name: ${teamName}\nTeam Members: ${teamMembers}\nTeam Location: ${teamLocation}`);
    if (confirm("Is this information correct?")) {
        alert("Thank you for providing your team information!");
    }
}

function mailingList() {
    alert("Welcome to the Funky Ant mailing list!");
    const email = prompt("Please enter your email address:");
    if (email) {
        alert(`Thank you for joining the Funky Ant mailing list, ${email}!`);
    }
}