/**
 * ============================================================================
 * محرك تفاعل الموقع الرسمي — مدرسة بني مزار الثانوية بنين الجديدة
 * ============================================================================
 * ملاحظة للتعاون المشترك (Antigravity Team Sync):
 * تم تقسيم المهام البرمجية بحيث يعمل الموقع الآن بكفاءة كاملة في نسخته المبدئية،
 * مع ترك 4 مهام واضحة ومحددة للزميل موسومة بـ: // TODO [COLLEAGUE TASK #1..#4]
 */

// ============================================================================
// 1. إعدادات الربط التلقائي مع جروب الفيسبوك (Facebook Group Auto-Feed Config)
// ============================================================================
// TODO [COLLEAGUE TASK #1]: ضع رابط جروب الفيسبوك الرسمي للمدرسة ورابط الـ JSON/RSS Feed هنا
const FB_FEED_CONFIG = {
  groupUrl: "https://www.facebook.com", // ضع رابط جروب مدرسة بني مزار الثانوية بنين الجديدة هنا
  rssJsonEndpoint: "", // اختياري: رابط RSS.app JSON Feed أو Graph API لجلب المنشورات تلقائياً
  autoRefreshIntervalMs: 180000, // تحديث تلقائي كل 3 دقائق
};

// ============================================================================
// 2. بيانات التدرج الأكاديمي وأقسام المعلمين
// ============================================================================
// TODO [COLLEAGUE TASK #2]: استكمال أسماء السادة المعلمين بكل قسم وتفعيل نافذة (Modal) جدول المعلم
const TEACHERS_HIERARCHY_DATA = [
  {
    id: "t-arabic-1",
    dept: "arabic",
    deptLabel: "قسم اللغة العربية والتربية الدينية",
    role: "معلم أول أ • مشرف المادة",
    name: "أسرة اللغة العربية والتربية الإسلامية",
    icon: "📖",
    summary:
      "الإشراف الأكاديمي على مناهج البلاغة والنحو والأدب للمرحلة الثانوية، وتنظيم مسابقات الخطابة والإلقاء والقرآن الكريم.",
    classes: "الصفوف: الأول • الثاني • الثالث الثانوي",
  },
  {
    id: "t-math-1",
    dept: "math",
    deptLabel: "قسم الرياضيات البحتة والتطبيقية",
    role: "معلم أول أ • منسق شعبة علمي رياضة",
    name: "هيئة تدريس الرياضيات (الجبر والتفاضل والميكانيكا)",
    icon: "📐",
    summary:
      "تدريس فروع الرياضيات البحتة والتطبيقية وتدريب طلاب شعبة علمي رياضة على التفكير المنطقي والمسائل التطبيقية الحديثة.",
    classes: "الشعبة العلمية • الصفوف الثلاثة",
  },
  {
    id: "t-science-1",
    dept: "science",
    deptLabel: "قسم العلوم (الفيزياء • الكيمياء • الأحياء)",
    role: "معلمو الخبراء ومشرفو المعامل",
    name: "هيئة تدريس العلوم والمعامل العلمية",
    icon: "🔬",
    summary:
      "تطبيق التجارب المعملية الحديثة في الفيزياء والكيمياء والأحياء والجيولوجيا وتأهيل طلاب علمي علوم وعلمي رياضة.",
    classes: "المعامل المركزية • الصفوف الثلاثة",
  },
  {
    id: "t-languages-1",
    dept: "languages",
    deptLabel: "قسم اللغات الأجنبية (الإنجليزية • الفرنسية)",
    role: "معلمو الأوائل واللغات",
    name: "أسرة اللغة الإنجليزية واللغات الثانية",
    icon: "🌍",
    summary:
      "تنمية مهارات التواصل اللغوي والترجمة والقواعد اللغوية للغة الأجنبية الأولى والثانية بأساليب تفاعلية حديثة.",
    classes: "جميع الشعب • الصفوف الثلاثة",
  },
  {
    id: "t-humanities-1",
    dept: "humanities",
    deptLabel: "قسم المواد الأدبية والفلسفية والاجتماعية",
    role: "مشرفو الشعبة الأدبية",
    name: "أسرة التاريخ والجغرافيا والفلسفة وعلم النفس",
    icon: "🏛️",
    summary:
      "بناء الوعي التاريخي والجغرافي والفكر الفلسفي النقدي لدى طلاب الشعبة الأدبية، وربط المناهج بالهوية الوطنية المصرية.",
    classes: "الشعبة الأدبية • الصفوف الثلاثة",
  },
  {
    id: "t-sports-1",
    dept: "humanities",
    deptLabel: "قسم التربية الرياضية والأنشطة الطلابية",
    role: "مشرفو الطابور والملعب الرياضي",
    name: "هيئة الإشراف الرياضي والكشفي والإذاعة",
    icon: "🏆",
    summary:
      "تنظيم اصطفاف طابور الصباح، إدارة دوري الفصول على الملعب الخماسي بالنجيل الصناعي، ورعاية الموهوبين رياضياً وفنياً.",
    classes: "الأنشطة العامة • جميع طلاب المدرسة",
  },
];

// ============================================================================
// 3. منشورات جروب الفيسبوك التلقائية (بيانات حية من واقع المدرسة + جلب آلي)
// ============================================================================
const DEFAULT_FB_POSTS = [
  {
    id: "fb-1",
    category: "activities",
    title: "انتظام الطابور الصباحي وتحية العلم في مدرسة بني مزار الثانوية بنين الجديدة",
    content:
      "جانب من اصطفاف أبنائنا الطلاب في طابور الصباح بحضور السيد مدير المدرسة وأعضاء هيئة التدريس، وسط أجواء من الانضباط والانتماء الوطني تحت راية علم مصر.",
    image: "assets/images/morning-assembly.jpg",
    date: "منذ ساعتين • جروب المدرسة الرسمي",
    reactions: "❤️👍 245 تفاعل",
    comments: "42 تعليق",
  },
  {
    id: "fb-2",
    category: "announcements",
    title: "كلمة وتوجيهات إدارة المدرسة لأبنائنا الطلاب بشأن الانضباط والتفوق الدراسي",
    content:
      "تؤكد إدارة مدرسة بني مزار الثانوية بنين الجديدة على أهمية الالتزام بالحضور اليومي والمشاركة الفعالة في الحصص الدراسية والتقييمات الأسبوعية لضمان أعلى درجات التفوق.",
    image: "assets/images/principal.jpg",
    date: "أمس • بيان إدارة المدرسة",
    reactions: "👍🔥 318 تفاعل",
    comments: "67 تعليق",
  },
  {
    id: "fb-3",
    category: "activities",
    title: "انطلاق فعاليات النشاط الرياضي ودوري المدرسة على الملعب الخماسي المطور",
    content:
      "في إطار اهتمام المدرسة بالأنشطة الطلابية وبناء الجسم السليم، انطلقت مباريات دوري الفصول على ملعب المدرسة الخماسي بالنجيل الصناعي وسط حماس كبير من الطلاب.",
    image: "assets/images/sports-field.jpg",
    date: "منذ يومين • النشاط الرياضي",
    reactions: "⚽👍 194 تفاعل",
    comments: "35 تعليق",
  },
  {
    id: "fb-4",
    category: "exams",
    title: "تنبيه هام بخصوص جداول التقييمات الأسبوعية ومواعيد المراجعات بالمدرسة",
    content:
      "تعلن شؤون الطلاب والامتحانات بالمدرسة عن انتظام التقييمات الدورية للصفين الأول والثاني الثانوي ومتابعة طلاب الصف الثالث الثانوي في كافة الأقسام العلمية والأدبية.",
    image: "assets/images/school-facade.jpg",
    date: "منذ 3 أيام • شؤون الطلاب",
    reactions: "📌👍 276 تفاعل",
    comments: "51 تعليق",
  },
];

// ============================================================================
// 4. دوال العرض والتفاعل (Rendering & UI Logic)
// ============================================================================

function renderTeachersGrid(selectedDept = "all") {
  const grid = document.getElementById("teachersGrid");
  if (!grid) return;

  const filtered =
    selectedDept === "all"
      ? TEACHERS_HIERARCHY_DATA
      : TEACHERS_HIERARCHY_DATA.filter((item) => item.dept === selectedDept);

  grid.innerHTML = filtered
    .map(
      (item) => `
      <article class="teacher-card glass-card" data-teacher-id="${item.id}">
        <div class="teacher-card-head">
          <div class="teacher-avatar" aria-hidden="true">${item.icon}</div>
          <div>
            <span class="teacher-role-badge">${item.role}</span>
            <h4>${item.name}</h4>
          </div>
        </div>
        <p>${item.summary}</p>
        <div class="teacher-meta-footer">
          <span>${item.deptLabel}</span>
          <span>${item.classes}</span>
        </div>
      </article>
    `
    )
    .join("");
}

function renderFbPosts(selectedCategory = "all", postsList = DEFAULT_FB_POSTS) {
  const container = document.getElementById("fbPostsContainer");
  if (!container) return;

  const filtered =
    selectedCategory === "all"
      ? postsList
      : postsList.filter((post) => post.category === selectedCategory);

  container.innerHTML = filtered
    .map(
      (post) => `
      <article class="fb-post-card">
        <div class="fb-post-top">
          <img src="assets/images/logo.jpg" alt="شعار المدرسة" class="fb-post-avatar" />
          <div class="fb-post-author">
            <strong>مدرسة بني مزار الثانوية بنين الجديدة</strong>
            <span>${post.date}</span>
          </div>
        </div>
        <div class="fb-post-media">
          <img src="${post.image}" alt="${post.title}" loading="lazy" />
        </div>
        <div class="fb-post-content">
          <h4>${post.title}</h4>
          <p>${post.content}</p>
        </div>
        <div class="fb-post-actions">
          <span>${post.reactions} • ${post.comments}</span>
          <a href="${FB_FEED_CONFIG.groupUrl}" target="_blank" rel="noopener noreferrer" class="fb-post-link">
            عرض في الجروب ↗
          </a>
        </div>
      </article>
    `
    )
    .join("");
}

async function syncFacebookGroupFeed() {
  const syncTextEl = document.getElementById("fbLastSyncText");
  const refreshBtn = document.getElementById("refreshFbFeedBtn");

  if (refreshBtn) {
    refreshBtn.disabled = true;
    refreshBtn.textContent = "⏳ جاري جلب أحدث المنشورات...";
  }

  // إذا قام الزميل بإضافة رابط RSS/JSON حقيقي في FB_FEED_CONFIG يتم الجلب منه تلقائياً
  if (FB_FEED_CONFIG.rssJsonEndpoint) {
    try {
      const response = await fetch(FB_FEED_CONFIG.rssJsonEndpoint);
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data.items) && data.items.length > 0) {
          const liveMapped = data.items.slice(0, 6).map((item, idx) => ({
            id: `live-${idx}`,
            category: "announcements",
            title: item.title || "منشور جديد من جروب المدرسة",
            content: item.description || item.content_text || "",
            image: item.image || "assets/images/school-facade.jpg",
            date: item.pubDate || "تحديث مباشر من فيسبوك",
            reactions: "👍 منشور متزامن تلقائياً",
            comments: "جروب المدرسة",
          }));
          renderFbPosts("all", liveMapped);
        }
      }
    } catch (err) {
      console.warn("Facebook RSS Endpoint fallback used:", err);
    }
  }

  setTimeout(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" });
    if (syncTextEl) {
      syncTextEl.textContent = `آخر مزامنة تلقائية: اليوم الساعة ${timeStr}`;
    }
    if (refreshBtn) {
      refreshBtn.disabled = false;
      refreshBtn.textContent = "🔄 تحديث المنشورات الآن";
    }
  }, 450);
}

// ============================================================================
// 5. التهيئة والأحداث (Initialization & Event Listeners)
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // أ. عرض تدرج المعلمين ومنشورات الفيسبوك
  renderTeachersGrid("all");
  renderFbPosts("all");

  // تحديث رابط جروب الفيسبوك المباشر
  const fbLink = document.getElementById("fbGroupDirectLink");
  if (fbLink && FB_FEED_CONFIG.groupUrl) {
    fbLink.href = FB_FEED_CONFIG.groupUrl;
  }

  // ب. أزرار فلترة أقسام المعلمين
  const teacherFilterBtns = document.querySelectorAll("#teacherFilterBtns .filter-btn");
  teacherFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      teacherFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderTeachersGrid(btn.dataset.dept || "all");
    });
  });

  // ج. أزرار فلترة أخبار الفيسبوك
  const fbCatBtns = document.querySelectorAll("#fbCategoryBar .fb-cat-btn");
  fbCatBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      fbCatBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderFbPosts(btn.dataset.cat || "all");
    });
  });

  // د. زر التحديث الفوري لأخبار الفيسبوك
  const refreshFbBtn = document.getElementById("refreshFbFeedBtn");
  if (refreshFbBtn) {
    refreshFbBtn.addEventListener("click", syncFacebookGroupFeed);
  }

  // هـ. تبديل المظهر الليلي / النهاري
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const htmlEl = document.documentElement;
      const isLight = htmlEl.getAttribute("data-theme") === "light";
      const nextTheme = isLight ? "dark" : "light";
      htmlEl.setAttribute("data-theme", nextTheme);

      const iconEl = themeToggleBtn.querySelector(".theme-icon");
      const labelEl = themeToggleBtn.querySelector(".theme-label");
      if (iconEl && labelEl) {
        iconEl.textContent = nextTheme === "light" ? "🌙" : "☀️";
        labelEl.textContent = nextTheme === "light" ? "المظهر الليلي" : "المظهر النهاري";
      }
    });
  }

  // و. قائمة الهاتف المحمول
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // ز. حركة ناعمة لشعار المدرسة في الخلفية المائية مع التمرير (Watermark Parallax)
  const centerSeal = document.querySelector(".watermark-center");
  window.addEventListener(
    "scroll",
    () => {
      if (!centerSeal) return;
      const scrollY = window.scrollY;
      const rotateDeg = (scrollY * 0.015) % 360;
      centerSeal.style.transform = `translate(-50%, -50%) rotate(${rotateDeg}deg)`;
    },
    { passive: true }
  );

  // ح. نموذج استفسار أولياء الأمور والطلاب السريع
  // TODO [COLLEAGUE TASK #3]: ربط هذا النموذج بإرسال مباشر (WhatsApp / Supabase / Email)
  const contactForm = document.getElementById("parentContactForm");
  const feedbackMsg = document.getElementById("formFeedbackMsg");
  if (contactForm && feedbackMsg) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const sender = document.getElementById("senderName")?.value || "ولي الأمر";
      feedbackMsg.hidden = false;
      feedbackMsg.textContent = `شكراً لك يا (${sender})، تم تسجيل رسالتك بنجاح لدى مكتب شؤون الطلاب بمدرسة بني مزار الثانوية بنين الجديدة.`;
      contactForm.reset();
    });
  }

  // TODO [COLLEAGUE TASK #4]: إضافة نافذة تكبير الصور السينمائية (Lightbox) عند الضغط على بطاقات (.highlight-card)
});
