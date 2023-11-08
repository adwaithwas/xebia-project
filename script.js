const uploadForm = document.getElementById('upload-form');
const catImageInput = document.getElementById('cat-image');
const catGallery = document.getElementById('cat-gallery');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const file = catImageInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = (event) => {
            const image = document.createElement('img');
            image.src = event.target.result;
            catGallery.appendChild(image);
        };

        reader.readAsDataURL(file);
    }
});
