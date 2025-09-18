document.addEventListener('DOMContentLoaded', () => {

    const projectModal = document.getElementById('project-modal');
    const projectModalClose = projectModal?.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalTechStack = document.getElementById('modal-tech-stack');
    const modalLink = document.getElementById('modal-link');
    const mainHeader = document.getElementById('main-header');

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            modalTitle.textContent = card.dataset.title;
            modalImage.src = card.dataset.image;
            modalDescription.textContent = card.dataset.description;
            modalTechStack.textContent = 'Technologies: ' + card.dataset.tech;
            modalLink.href = card.dataset.link || '#';
            projectModal.style.display = 'block';
        });
    });

    if (projectModalClose) {
        projectModalClose.addEventListener('click', () => {
            projectModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == projectModal) {
            projectModal.style.display = 'none';
        }
    });

    if (mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        });
    }
});