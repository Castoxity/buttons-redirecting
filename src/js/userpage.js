document.addEventListener('DOMContentLoaded', () => {
    const clickedId = localStorage.getItem('clickedId');
    const bgColor = localStorage.getItem('bgColor');

    if (clickedId && bgColor) {
        const parent = document.getElementById('UParent');
        parent.style.backgroundColor = bgColor;
        const userIdDiv = document.getElementById('UserId');
        userIdDiv.textContent = clickedId;
    } else {
        console.error('Error: Missing clickedId or bgColor in localStorage');
    }
});