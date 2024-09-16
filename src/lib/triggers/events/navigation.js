module.exports = toggleNav = () => {
    const nav = document.getElementById('nav')
    const navbtn = document.getElementById('nav-button')
    navbtn.onclick = e => {
        if(nav.classList.contains('hidden-nav')){
            // nav.classList.remove('hidden-nav')
            // nav.classList.add('show-nav')
            nav.classList.toggle('show-nav')
        }
        console.log(nav.classList)
        // if(nav.classList.contains('show-nav')){
        //     nav.classList.remove('show-nav')
        //     nav.classList.add('hidden-nav')
        // }
    }
}