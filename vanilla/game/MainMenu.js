
class MainMenu {
    constructor() {}

    hideSections = () => {
        const sections = document.querySelectorAll('#container section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    showSection = (sectionId) => {
        const section = document.querySelector(`#${sectionId}`);
        section.style.display = 'block';
    }
}

export default new MainMenu();