const endpointContainer = document.querySelector('.end-point-container')
const edpointImg = document.querySelector('.end-point-img')
const fw = document.querySelectorAll('.forward')
const pv = document.querySelectorAll('.prev')
console.log(fw)    
console.log(pv)    

let media
module.exports = endpoint = async() => {

    console.log(endpointContainer)
    media = await fetch('/api/media').then(r=>r.json()).then(d=>{
        let files = [...d.media]
        let target, src;
        for( target = 0; target < files.length; target++){
            fw.forEach(el=>{
                el.onclick=e=>{
                    (target+=1)
                    target%=files.length;
                    src = files[target]
                    edpointImg.src = `./media/${src}`
                }
            })
            
            pv.forEach(el=>{
                el.onclick=e=>{
                    (target-=1)
                    if(target < 0)target = files.length-1
                    src = files[target]
                    edpointImg.src = `./media/${src}`
                }
            })
        }

    })
}