/* code des btn de la prtie header*/
const menu = document.getElementById('menu');
const compte = document.getElementById('compte');
const panier = document.getElementById('panier');

menu.addEventListener('click', () => { 
  window.open('https://www.amazon.fr/');
})

compte.addEventListener('click', () => {
  window.open('https://www.amazon.fr/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2F%3Flanguage%3Dfr_FR%26currency%3DEUR%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=frflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
});

panier.addEventListener('click', () => {
  window.open('https://www.amazon.fr/-/en/gp/cart/view.html?ref_=nav_cart');
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
