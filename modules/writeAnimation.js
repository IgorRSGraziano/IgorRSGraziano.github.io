export default function writeAnimation() {
    const textToWrite = document.querySelector('.introduction-occupation')
    function typeWriter(textElement) {
        const textArray = textElement.textContent.split('')
        textElement.innerHTML = ''
        textArray.forEach((letter, index) => {
            setTimeout(() => textElement.innerHTML += letter, 80 * index)
        })
    }
    typeWriter(textToWrite)
}