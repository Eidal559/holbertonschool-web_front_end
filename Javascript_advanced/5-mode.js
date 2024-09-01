function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    // Define the different modes using changeMode
    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add a paragraph to the body
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Create the Spooky button
    var spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.onclick = spooky;
    document.body.appendChild(spookyButton);

    // Create the Dark mode button
    var darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.onclick = darkMode;
    document.body.appendChild(darkModeButton);

    // Create the Scream mode button
    var screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.onclick = screamMode;
    document.body.appendChild(screamModeButton);
}

main();
