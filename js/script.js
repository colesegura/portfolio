document.addEventListener("DOMContentLoaded", function() {
    const projectLinks = document.querySelectorAll('.project');

    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.querySelector('.overlay').style.opacity = 1;
        });
        link.addEventListener('mouseleave', function() {
            this.querySelector('.overlay').style.opacity = 0;
        });
        link.addEventListener('click', function() {
            window.location.href = this.querySelector('.view-link').href;
        });
    });
});
