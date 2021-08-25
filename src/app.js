let posicionPrincipal = window.pageYOffset;

window.onscroll = () => {
  if( window.innerWidth > 375 ){
    desplazamientoHeaderDesktop();
  } else {
    esconderBarras();
  }
};

function desplazamientoHeaderDesktop(){
  const fakeH = document.querySelector('#fakeHeader');
  if ( window.pageYOffset >= 150 ) {
    fakeH.style.top = '0px';
    fakeH.style.opacity = '1';
  } else {
    fakeH.style.top = '-75px';
    fakeH.style.opacity = '0';
  }
}

function esconderBarras(){
  let desplazamiento = window.pageYOffset;
  const barraFooter = document.querySelector('#footerMobile');
  const searchBar = document.querySelector('#searchBar');
  if ( posicionPrincipal >= desplazamiento ){
    barraFooter.classList.remove('hide');
    searchBar.classList.remove('hide');
  } else {
    barraFooter.classList.add('hide');
    searchBar.classList.add('hide');
  }

  posicionPrincipal = desplazamiento;
}

