document.addEventListener('DOMContentLoaded', () => {
    const clickedId = localStorage.getItem('clickedId');

    if (clickedId) {
        fetch('dist/json/info.json')
            .then(response => response.json())
            .then(data => {
                const userData = data.find(item => item.id === clickedId);
                if (userData) {
                    const parent = document.getElementById('UParent');
                    parent.style.backgroundColor = userData["bg-color"];
                    const userIdDiv = document.getElementById('UserId');
                    userIdDiv.textContent = clickedId;
                } else {
                    console.error('Error: No data found for clickedId in info.json');
                }
            })
            .catch(error => {
                console.error('Error fetching the JSON data:', error);
            });
    } else {
        console.error('Error: Missing clickedId in localStorage');
    }
});
