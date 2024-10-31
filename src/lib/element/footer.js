const footer = document.getElementById('contact')
const footericons = document.querySelectorAll('.footer-icon')

module.exports = loadFooter = (laicos) => {
    let links = [...laicos.linx]
    // set footer to end page
    footericons.forEach((icon,idx)=>{
        icon.onclick = e =>{
            let name = icon.classList[1].replace(/fa-/,'')
            console.log('you clicked on icon: ' + name)
            let index = [...footericons].indexOf(icon)
            let link = links[index].link
            console.log(link)
            if(index==3){
                window.open(link)
            }else{
                window.open(link,'_blank')
            }
        }
    })
}