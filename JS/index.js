/* code des btn de la prtie header*/
const menu = document.getElementById('menu');
const compte = document.getElementById('compte');
const panier = document.getElementById('panier');
const ajoutPanier = document.getElementById('btnAjouterPanier');

menu.addEventListener('click', () => { 
  window.open('https://www.amazon.fr/');
})

compte.addEventListener('click', () => {
  window.open('https://www.amazon.fr/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2F%3Flanguage%3Dfr_FR%26currency%3DEUR%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=frflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
});

panier.addEventListener('click', () => {
  window.open('https://www.amazon.fr/-/en/gp/cart/view.html?ref_=nav_cart');
});

ajoutPanier.addEventListener('click', () => {
  window.open('https://www.amazon.fr/AGV-22-06-Casque-Int%C3%A9gral-Homologu%C3%A9/dp/B0BJG3X29V/ref=sr_1_1_sspa?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ID9HW212XCT6&dib=eyJ2IjoiMSJ9.BH70JooI41xUN8f8V1FU6vsN8EYdOC5R1OUhF7hDkzpwd_ojl383qoUxKWLCLiy6Fo1GB4qvcYkC6DhZzCPfCkVVzRZEoYMtg2qFQ3RnSYjiu5pLZ5IU_0XcGpcOPh_NBCSSr-WdG9ur5kRw2AWrvDpLkokEd40cJeHMKMPW3eN0xkoCvGOFlxI0AwZEQACHBtCttaBLmSICluGflFxUerAWiWHHJ-TSq8crbRNhwChOw6fYebEnvnZviZQ4miwGdzWWG5XgDkt9yLm_AP7HNPVoOFh5RozHBbV5RCEkg-A.8_JLqfjLmV1JmyDFvL-F9uQcPnfAjWGniA6Yyn1XAGQ&dib_tag=se&keywords=casque%2Bmoto&qid=1757586297&sprefix=casque%2Bmoto%2Caps%2C76&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
});


window.addEventListener("load", () => {
  const imgCasque = document.querySelector("#imgCasque");

  // cacher au départ
  imgCasque.style.opacity = 0;


  // apparition après 3 secondes
  setTimeout(() => {
    imgCasque.style.opacity = 1;
  }, 3000);
});


window.addEventListener('scroll', function () {
    let scrolled = window.scrollY; // Récupère la position du défilement vertical
    let parallaxElements = document.querySelectorAll('.parallax'); // Sélectionne tous les éléments parallax

    // calcule un scale réaliste
    let scale = 1 - scrolled / 1000;
    if (scale < 0.6) scale = 0.6;

    parallaxElements.forEach(function (element) {

        element.style.transform = `translateY(${scrolled * 0.8}px) scale(${scale})`;
    });
});
