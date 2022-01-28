export default function smoothScroll() {
    const linksInternos = document.querySelectorAll('a[href^="#"]')
    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        console.log(href)
        const section = document.querySelector(href)
        console.log(section)
        console.log(section.offsetParent.offsetHeight)
        scrollTo({
            top: section.getBoundingClientRect().top,
            behavior: 'smooth'
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}