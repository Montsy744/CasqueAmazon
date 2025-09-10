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