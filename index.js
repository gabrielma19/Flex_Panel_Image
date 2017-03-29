initialize(loadAfter);

function loadAfter() {
  function toggleOpen(){
      panel.classList.toggle('open')
      console.log('Funfa')
    }
  
  const selectors =  '.panel'
  let elements = document.querySelectorAll(selectors);
  Array.from(elements).forEach(panel => 
      panel.addEventListener('click', toggleOpen));
  
  
  
}

