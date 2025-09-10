gsap.registerPlugin(ScrollTrigger);

function animateCasque() {
  // récupérer le casque et la zone cible
  const casque = document.querySelector(".casque");
  const zone2 = document.getElementById("2");

  // position de #2 par rapport à la page
  const rect2 = zone2.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;

  // centre vertical de #2
  const targetY = rect2.top + scrollY + rect2.height / 2 - casque.height / 2;
  // position horizontale (par ex. 40px du bord gauche)
  const targetX = 40; 

  // kill l’ancienne anim
  if (window.casqueTween) window.casqueTween.kill();

  window.casqueTween = gsap.to(casque, {
    x: targetX - casque.getBoundingClientRect().left, // delta X
    y: targetY - casque.getBoundingClientRect().top,  // delta Y
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "+=100%", // sur 1 écran de scroll
      scrub: true,
      // markers: true
      onRefresh: self => self.animation && self.animation.invalidate()
    }
  });
}

animateCasque();
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
  animateCasque();
});
