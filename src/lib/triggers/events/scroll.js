const workCon = document.getElementById('work')
// disable sroll for main content
const disableScroll = () => {
    workCon.classList.remove('yes-scroll')
    workCon.classList.add('no-scroll')
    document.body.classList.remove('yes-scroll')
    document.body.classList.add('no-scroll')
}
// enable sroll for main content
const enableScroll = () => {
    workCon.classList.remove('no-scroll')
    workCon.classList.add('yes-scroll')
    document.body.classList.add('yes-scroll')
    document.body.classList.remove('no-scroll')
}


module.exports = {enableScroll,disableScroll}