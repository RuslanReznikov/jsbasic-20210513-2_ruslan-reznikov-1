function hideSelf() {
  // ваш код...
  const btn = document.querySelector('.hide-self-button') ;
  function hideBtn() {
    btn.hidden = true ;
  }
  btn.addEventListener('click' , hideBtn )
}