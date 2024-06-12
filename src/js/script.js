document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('userId');

    fetch('dist/json/info.json')
        .then(response => response.json())
        .then(data => {
            const userData = data.find(item => item.id === userId);
            if (userData) {
                localStorage.setItem('bgColor', userData["bg-color"]); // Store background color in localStorage
                console.log("bgcolor");
            }
        })
        .catch(error => {
            console.error('Error fetching the JSON data:', error);
        });
});

// Button click event to redirect user
document.querySelectorAll('.Buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        localStorage.setItem('clickedId', id); // Store clicked ID in localStorage
        fetch('dist/json/info.json')
            .then(response => response.json())
            .then(data => {
                const userData = data.find(item => item.id === id);
                if (userData) {
                    localStorage.setItem('bgColor', userData["bg-color"]); // Store background color in localStorage
                }
            })
            .then(() => {
                window.location.href = 'user.html'; // Redirect to the user page
            })
            .catch(error => {
                console.error('Error fetching the JSON data:', error);
            });
    });
});
