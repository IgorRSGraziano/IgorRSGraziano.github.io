export default function mainContainerHighlight() {
    addEventListener('mousemove', element => {
        document.querySelector('[data-main-container]')
        const mouseHoverElement = element.target
        if (mouseHoverElement.closest('[data-main-container]') !== null && !document.querySelector('[data-container-highlighter="true"]')) {
            document.querySelectorAll('[data-main-container]').forEach(el => {
                el == mouseHoverElement ? null : el.dataset.mainContainer = 'false'
            })
            mouseHoverElement.closest('[data-main-container]').dataset.mainContainer = 'true';
        }
    })
}