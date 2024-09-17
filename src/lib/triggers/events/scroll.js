const workCon = document.getElementById('work')
// disable sroll for main content
const disableScroll = () => {
    workCon.classList.remove('yes-scroll')
    workCon.classList.add('no-scroll')
}
// enable sroll for main content
const enableScroll = () => {
    workCon.classList.remove('no-scroll')
    workCon.classList.add('yes-scroll')
}


module.exports = {enableScroll,disableScroll}