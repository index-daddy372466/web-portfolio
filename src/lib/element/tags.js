
module.exports = loadTags = ([...captions]) => {
   let fcaptions = document.querySelectorAll('figcaption.f-caption')
   console.log(captions)
   let tagText = 'under development'
   fcaptions = [...fcaptions].filter(cap=>{
      // console.log(cap)
      const text = cap.textContent.toLowerCase();
      let capincluded = captions.includes(text);
      // if(capincluded)order.push(text)
      return capincluded
   })
   console.log(fcaptions)
   fcaptions.forEach(caption=>{
      let figure = caption.parentElement;
      let h3 = document.createElement('h3')
      h3.classList.add('tag-h3')
      h3.textContent = tagText;
      figure.append(h3)
   })
   
}