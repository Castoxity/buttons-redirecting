// Fetch the JSON data
fetch('dist/json/info.json')
    .then(response => response.json())
    .then(data => {
        // Process the JSON data
        data.forEach(item => {
            const button = document.getElementById(item.id);
            if (button) {
                button.addEventListener('click', () => {
                    if (item.url) {
                        window.location.href = item.url;
                    } else {
                        alert('No URL found for this button');
                    }
                });
                parent.style.backgroundColor = item["bg-color"];
            }
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });
