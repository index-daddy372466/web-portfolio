module.exports = showModal = () => {
    const modal = document.querySelector('.modal-wrapper')
    setTimeout(()=>{
        if(modal.classList.contains('hidden-modal')){
            modal.classList.remove('hidden-modal')
        }
    },2000)
}