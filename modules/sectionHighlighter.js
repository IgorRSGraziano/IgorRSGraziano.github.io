export default function sectionHighlighter() {
    const linksInternos = document.querySelectorAll('a[href^="#"]')
    function sectionHighlighter(event) {
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.dataset.containerHighlighter = 'true';
        setTimeout(() => section.dataset.containerHighlighter = 'false', 1100)
        section.parentElement.dataset.mainContainer = 'true'
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', sectionHighlighter)
    })
}