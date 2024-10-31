
module.exports = loadTags = ([...captions],nosaj) => {
   let fcaptions = document.querySelectorAll('figcaption.f-caption');
   let figures = document.querySelectorAll('figure');
   let tagText = 'under development';
   let linx = nosaj['linx'];
   let gits = [];

   // filter captons by h3 tags
   fcaptions = [...fcaptions].filter(cap=>{
      const text = cap.textContent.toLowerCase();
      let capincluded = captions.includes(text);
      return capincluded
   })
   
   // figure captions
   fcaptions.forEach(caption=>{
      let figure = caption.parentElement;
      let h3 = document.createElement('h3')
      h3.classList.add('tag-h3')
      h3.textContent = tagText;
      figure.append(h3)
   })

   // language tags
   figures.forEach((fig,newton)=>{
   const article = fig.children[0];
   let icons = [...article.children].filter(x=>/(fa-|readme-tag)/i.test(x.classList))
   const git = [...article.children].filter(x=>/readme-tag/i.test(x.classList))
   // push valid git into gits
   if(git.length > 0){
      gits.push(git[0])
   }
   let h3 = [...fig.children].findIndex(x=>/tag-h3/i.test(x.classList))
   // icons.reduce((a,b)=> h3 == -1 ? b.classList.add('icon-top') : b.classList.add('icon-bottom'),0)
   icons.reduce((prev,curr)=>{
      if(h3 == -1){
         !curr.classList.contains('readme-tag') ? curr.classList.add('icon-top') : curr.classList.add('readme-top')
      } {
         !curr.classList.contains('readme-tag') ? curr.classList.add('icon-bottom') : curr.classList.add('readme-bottom')
      }
   },0)
})
console.log(nosaj)

console.log(gits)
// iterate over git elements
gits.forEach((icon,idx)=>{
   // click event
   icon.onclick = e => {
    console.log(linx[idx].caption)
    window.open(linx[idx].link,'_blank')
   }
})

}
