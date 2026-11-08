/**
 * ============================================================================
 * animations.js – محرك الحركة التفاعلي السلس والآمن (Safe Interactive Motion Engine)
 * ============================================================================
 * - مصمم للعمل سواء مع GSAP أو باستخدام IntersectionObserver الأصلي للمتصفح (Progressive Enhancement)
 * - يحترم تفضيل المستخدم لتقليل الحركة (prefers-reduced-motion)
 * - يحمي البانر الرئيسي والشريط الإحصائي من الوميض لتسريع LCP = 0.8s
 * - يحافظ على وضوح شعار المدرسة المحفور في الخلفية المائية
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. فحص تفضيل تقليل الحركة
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    return;
  }

  const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  if (hasGsap) {
    window.gsap.defaults({ ease: "power2.out", duration: 0.65 });

    // ظهور لطيف للبطاقات أسفل البانر (دون لمس عناصر الـ Hero لتجنب الوميض وتأخر LCP)
    const revealTargets = document.querySelectorAll(
      "main .section-band, .about-editorial-grid, .faculty-cards-grid, .moments-bento-grid, .quick-portals-grid, .location-master-card"
    );

    revealTargets.forEach((elem) => {
      window.gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 20,
        opacity: 0.2,
        duration: 0.6,
      });
    });

    // تأثير خفيف لحركة ناعمة على أزرار البوابات
    const interactiveTiles = document.querySelectorAll(".portal-tile, .btn-institutional");
    interactiveTiles.forEach((tile) => {
      tile.addEventListener("mouseenter", () => {
        window.gsap.to(tile, { y: -3, duration: 0.18 });
      });
      tile.addEventListener("mouseleave", () => {
        window.gsap.to(tile, { y: 0, duration: 0.18 });
      });
    });
  } else {
    // البديل الأصلي الخفيف والسريع عند عدم تحميل مكتبة GSAP الخارجية
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("motion-revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
      );

      document
        .querySelectorAll(
          "main .section-band, .principal-executive-card, .about-editorial-grid, .faculty-cards-grid, .moments-bento-grid, .quick-portals-grid, .location-master-card"
        )
        .forEach((el) => {
          el.classList.add("motion-ready");
          observer.observe(el);
        });
    }
  }
});
