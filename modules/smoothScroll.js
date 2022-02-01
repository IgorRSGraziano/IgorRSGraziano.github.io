export default function smoothScroll() {
    const internalLinks = document.querySelectorAll('a[href^="#"]')
    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        scrollTo({
            top: section.getBoundingClientRect().top,
            behavior: 'smooth'
        })
    }

    internalLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}