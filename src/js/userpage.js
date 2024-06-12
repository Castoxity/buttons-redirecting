document.addEventListener('DOMContentLoaded', () => {
    const clickedId = localStorage.getItem('clickedId');
    const bgColor = localStorage.getItem('bgColor');

    if (clickedId && bgColor) {
        const parent = document.getElementById('UParent');
        parent.style.backgroundColor = bgColor;
        // Add more style settings as needed
    } else {
        console.error('Error: Missing clickedId or bgColor in localStorage');
    }
});
