document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch and display a random line
    function displayRandomLine() {
        // Fetch the content of the text file
        fetch('drawbacks.txt')
            .then(response => response.text())
            .then(data => {
                // Split the text into an array of lines
                const lines = data.split('\n');

                // Get a random index
                const randomIndex = Math.floor(Math.random() * lines.length);

                // Display the random line on the webpage
                const randomLine = lines[randomIndex];
                document.getElementById('random-line').innerText = randomLine;
            })
            .catch(error => {
                console.error('Error fetching the text file:', error);
            });
    }

    // Event listener for the button click
    document.getElementById('new-line-button').addEventListener('click', displayRandomLine);
});