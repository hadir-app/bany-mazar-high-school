/**
 * animations.js – إضافة حركة قوية وعصرية باستخدام GSAP و ScrollTrigger
 * يتم تحميل هذا الملف من index.html بعد تحميل مكتبة GSAP.
 * يضيف تأثيرات الدخول للعنصر، حركة الخلفية للبانر، وتفاعل سلس عند التمرير.
 */

// تأكد من أن DOM جاهز قبل تنفيذ السكريبت
document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------
  // 1. إعدادات عامة للـ GSAP
  // ------------------------------------------------------------
  gsap.defaults({ ease: 'power2.out', duration: 0.6 });

  // ------------------------------------------------------------
  // 2. حركة العنصر العلوي (Topbar) و Navbar عند التحميل
  // ------------------------------------------------------------
  const topBar = document.querySelector('.official-topbar');
  const header = document.querySelector('#topHeader');
  if (topBar) {
    gsap.from(topBar, { y: -50, opacity: 0, delay: 0.2 });
  }
  if (header) {
    gsap.from(header, { y: -70, opacity: 0, delay: 0.4 });
  }

  // ------------------------------------------------------------
  // 3. تأثير Fade‑Up مع تأخير متدرج لجميع الأقسام (section) والعناصر ذات الصنف .surface-card
  // ------------------------------------------------------------
  const fadeElems = document.querySelectorAll('section, .surface-card, .hero-content-wrap, .metrics-ribbon');
  fadeElems.forEach((elem, i) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: 'top 85%', // يبدأ عندما يصل العنصر إلى 85% من نافذة العرض
        toggleActions: 'play none none reverse',
      },
      y: 30,
      opacity: 0,
      delay: i * 0.05, // تأخير بسيط لإعطاء شعور الترصيع
    });
  });

  // ------------------------------------------------------------
  // 4. حركة Parallax للبانر الرئيسي (hero) – تكبير خفيف عند سحب الصفحة
  // ------------------------------------------------------------
  const heroImg = document.querySelector('#heroMainImg');
  if (heroImg) {
    gsap.to(heroImg, {
      scrollTrigger: {
        trigger: heroImg,
        start: 'top top',
        scrub: true,
        // يتيح سحب الصورة عند التمرير
      },
      scale: 1.1,
      ease: 'none',
    });
  }

  // ------------------------------------------------------------
  // 5. أزرار CTA – تكبير عند المرور (hover) باستخدام CSS مترافق
  // ------------------------------------------------------------
  const ctaButtons = document.querySelectorAll('.btn-institutional');
  ctaButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.07, duration: 0.2 });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.2 });
    });
  });

  // ------------------------------------------------------------
  // 6. شفافية طبقة العلامة المائية (watermark) مع السحب للصفحة
  // ------------------------------------------------------------
  const watermark = document.querySelector('.stationery-watermark-layer');
  if (watermark) {
    gsap.to(watermark, {
      scrollTrigger: {
        trigger: watermark,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0.25, // توهّج خفيف أثناء التمرير
    });
  }

  // ------------------------------------------------------------
  // 7. تفعيل Smooth Scroll للروابط داخل القائمة (للتوافق مع HTML5)
  // ------------------------------------------------------------
  const navLinks = document.querySelectorAll('.primary-nav a[data-section]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        // استخدام التمرير السلس الأصلي للمتصفح
        const headerOffset = 80; // مسافة علوية لتجنب تغطية العنصر بالهيدر
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  // ------------------------------------------------------------
  // 8. تفعيل ScrollTrigger.refresh() بعد تحميل جميع الصور لضمان دقة الحسابات
  // ------------------------------------------------------------
  const images = document.images;
  let loaded = 0;
  const total = images.length;
  if (total === 0) {
    ScrollTrigger.refresh();
  } else {
    for (const img of images) {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === total) ScrollTrigger.refresh();
        });
        img.addEventListener('error', () => {
          loaded++;
          if (loaded === total) ScrollTrigger.refresh();
        });
      }
    }
    if (loaded === total) ScrollTrigger.refresh();
  }
});
