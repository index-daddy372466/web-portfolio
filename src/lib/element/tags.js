
module.exports = loadTags = ([...captions]) => {
   let fcaptions = document.querySelectorAll('figcaption.f-caption')
   let figures = document.querySelectorAll('figure')
   let tagText = 'under development'

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
   let icons = [...article.children].filter(x=>/fa-/i.test(x.classList))
   let h3 = [...fig.children].findIndex(x=>/tag-h3/i.test(x.classList))
   icons.reduce((a,b)=>{
      if(h3==-1){
         b.classList.add('icon-top')
      } else {
         b.classList.add('icon-bottom')
      }
   },0)
   })
   
}