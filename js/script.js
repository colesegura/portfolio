document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            window.location.href = this.getAttribute('data-project');
        });
    });
});
