gsap.registerPlugin(ScrollTrigger);

function animateCasque() {
  // Mesures dynamiques (au cas où la fenêtre change)
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Distance à parcourir depuis le centre vers le coin bas‑droite
  // Ici on “vise” ~40px du bord (à adapter à la taille de l'image)
  const targetX = vw / 2 - 40;
  const targetY = vh / 2 - 40;

  // On crée/kill l'anim si on recalcul
  if (window.casqueTween) { window.casqueTween.kill(); }

  window.casqueTween = gsap.to(".casque", {
    // translation relative depuis le centre
    x: targetX,
    y: targetY,
    scale: 0.5,                // 2× plus petit
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "+=100%",           // 100vh
      scrub: true,
      // markers: true,        // décommenter pour debugger
      onRefresh: self => self.animation && self.animation.invalidate()
    }
  });
}

animateCasque();
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
  animateCasque();
});