/**
 * ============================================================================
 * الموقع الرسمي — مدرسة بني مزار الثانوية الجديدة بنين (شرق المحطة)
 * ============================================================================
 * المهام المشتركة مع الزميل (Colleague Tasks):
 * ابحث عن الوسم: // TODO [COLLEAGUE TASK #1..#4]
 */

// TODO [COLLEAGUE TASK #1]: إضافة رابط جروب الفيسبوك الفعلي ورابط JSON/RSS Feed للجلب الحي
const FB_FEED_CONFIG = {
  groupUrl: "https://www.facebook.com",
  rssJsonEndpoint: "", // ضع رابط RSS.app JSON Feed هنا ليتم تحديث المنشورات تلقائياً
  rotateIntervalMs: 6000,
};

// TODO [COLLEAGUE TASK #2]: استكمال بيانات وأسماء وصور السادة المعلمين وإضافة نافذة (Modal) لكل معلم
const TEACHERS_DATA = [
  {
    id: 1,
    category: "leadership",
    name: "إدارة المدرسة",
    role: "القيادة المدرسية",
    subject: "الإشراف العام والانضباط",
    photo: "assets/images/principal.jpg",
    initials: "إم",
  },
  {
    id: 2,
    category: "leadership",
    name: "وكيل شؤون الطلاب",
    role: "وكيل المدرسة",
    subject: "شؤون الطلاب والامتحانات",
    photo: "",
    initials: "وش",
  },
  {
    id: 3,
    category: "senior",
    name: "أسرة اللغة العربية",
    role: "كبير معلمي اللغة العربية",
    subject: "اللغة العربية والتربية الدينية",
    photo: "",
    initials: "ع",
  },
  {
    id: 4,
    category: "senior",
    name: "أسرة الرياضيات",
    role: "كبير معلمي الرياضيات",
    subject: "الرياضيات البحتة والتطبيقية",
    photo: "",
    initials: "ر",
  },
  {
    id: 5,
    category: "departments",
    name: "أسرة العلوم العملية",
    role: "معلمو الخبراء",
    subject: "الفيزياء • الكيمياء • الأحياء",
    photo: "",
    initials: "عل",
  },
  {
    id: 6,
    category: "departments",
    name: "أسرة اللغات والمواد الأدبية",
    role: "مشرفو الأقسام",
    subject: "اللغات • التاريخ • الجغرافيا • الفلسفة",
    photo: "",
    initials: "ل",
  },
];

// منشورات جروب الفيسبوك التي تظهر داخل الإطار العنابي (تتبدل تلقائياً أو بالنقر)
const FACEBOOK_POSTS = [
  {
    id: "post-1",
    date: "منذ ساعتين • جروب المدرسة الرسمي",
    text: "انتظام طابور الصباح وتحية العلم في مدرسة بني مزار الثانوية الجديدة بنين (شرق المحطة) بحضور إدارة المدرسة والسادة المعلمين.",
    image: "assets/images/morning-assembly.jpg",
    likes: "248",
    comments: "45 تعليق",
  },
  {
    id: "post-2",
    date: "أمس • النشاط الرياضي",
    text: "فعاليات النشاط الرياضي ودوري الفصول على الملعب الخماسي المطور بالنجيل الصناعي بالمدرسة لرعاية المواهب الرياضية.",
    image: "assets/images/sports-field.jpg",
    likes: "195",
    comments: "32 تعليق",
  },
  {
    id: "post-3",
    date: "منذ يومين • بيان إدارة المدرسة",
    text: "ترحب إدارة مدرسة بني مزار الثانوية الجديدة بنين بأبنائها الطلاب وتؤكد على الالتزام بالحضور اليومي ومتابعة التقييمات الأسبوعية.",
    image: "assets/images/school-facade.jpg",
    likes: "312",
    comments: "64 تعليق",
  },
];

let currentFbIndex = 0;
let fbPostsList = [...FACEBOOK_POSTS];

// 1. عرض شبكة بطاقات المعلمين
function renderTeachers(filterCat = "all") {
  const grid = document.getElementById("teachersGrid");
  if (!grid) return;

  const list =
    filterCat === "all"
      ? TEACHERS_DATA
      : TEACHERS_DATA.filter((item) => item.category === filterCat);

  grid.innerHTML = list
    .map((t) => {
      const avatarContent = t.photo
        ? `<img src="${t.photo}" alt="${t.name}" />`
        : `<span>${t.initials}</span>`;

      return `
        <article class="teacher-item-card" data-teacher-id="${t.id}">
          <div class="teacher-circle-avatar">
            ${avatarContent}
          </div>
          <h4>${t.name}</h4>
          <span class="t-role">${t.role}</span>
          <span class="t-subject">${t.subject}</span>
        </article>
      `;
    })
    .join("");
}

// 2. عرض المنشور النشط داخل إطار فيسبوك العنابي
function renderActiveFacebookPost(index = 0) {
  const cardEl = document.getElementById("fbActivePostCard");
  const dotsEl = document.getElementById("fbDotsContainer");
  if (!cardEl || fbPostsList.length === 0) return;

  const post = fbPostsList[index % fbPostsList.length];

  cardEl.innerHTML = `
    <div class="fb-card-top">
      <div class="fb-page-info">
        <img src="assets/images/logo.jpg" alt="شعار المدرسة" />
        <div>
          <strong>فيسبوك المدرسة</strong>
          <span>${post.date}</span>
        </div>
      </div>
      <div class="fb-blue-badge" aria-hidden="true">f</div>
    </div>

    <div class="fb-card-text">
      ${post.text}
    </div>

    <div class="fb-card-photo">
      <img src="${post.image}" alt="منشور فيسبوك المدرسة" />
    </div>

    <div class="fb-card-Reactions">
      <span>❤️ 👍 ${post.likes}</span>
      <div class="fb-action-btns">
        <span>👍 أعجبني</span>
        <span>💬 ${post.comments}</span>
      </div>
    </div>
  `;

  if (dotsEl) {
    dotsEl.innerHTML = fbPostsList
      .map(
        (_, i) =>
          `<button type="button" class="fb-dot ${i === index ? "active" : ""}" data-index="${i}" aria-label="منشور ${i + 1}"></button>`
      )
      .join("");

    dotsEl.querySelectorAll(".fb-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        currentFbIndex = Number(dot.dataset.index || 0);
        renderActiveFacebookPost(currentFbIndex);
      });
    });
  }
}

// 3. جلب تلقائي من RSS JSON إذا تم إعداده
async function tryFetchLiveFacebookFeed() {
  if (!FB_FEED_CONFIG.rssJsonEndpoint) return;
  try {
    const res = await fetch(FB_FEED_CONFIG.rssJsonEndpoint);
    if (!res.ok) return;
    const data = await res.json();
    if (Array.isArray(data.items) && data.items.length > 0) {
      fbPostsList = data.items.slice(0, 4).map((item, idx) => ({
        id: `live-${idx}`,
        date: item.pubDate || "تحديث تلقائي من الجروب",
        text: item.title || item.content_text || "منشور جديد من جروب المدرسة",
        image: item.image || "assets/images/morning-assembly.jpg",
        likes: "متزامن",
        comments: "جروب الفيسبوك",
      }));
      renderActiveFacebookPost(0);
    }
  } catch (err) {
    console.warn("Using default Facebook posts:", err);
  }
}

// 4. تهيئة الصفحة والأحداث
document.addEventListener("DOMContentLoaded", () => {
  renderTeachers("all");
  renderActiveFacebookPost(0);
  tryFetchLiveFacebookFeed();

  // تحديث رابط الجروب الخارجي
  const extLink = document.getElementById("fbGroupExternalLink");
  if (extLink && FB_FEED_CONFIG.groupUrl) {
    extLink.href = FB_FEED_CONFIG.groupUrl;
  }

  // التبديل التلقائي لمنشورات الفيسبوك داخل الإطار
  setInterval(() => {
    currentFbIndex = (currentFbIndex + 1) % fbPostsList.length;
    renderActiveFacebookPost(currentFbIndex);
  }, FB_FEED_CONFIG.rotateIntervalMs);

  // أزرار فلترة أقسام المعلمين
  const deptBtns = document.querySelectorAll("#deptTabs .dept-tab");
  deptBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      deptBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderTeachers(btn.dataset.dept || "all");
    });
  });

  // قائمة الموبايل
  const burgerBtn = document.getElementById("burgerBtn");
  const navMenu = document.getElementById("navMenu");
  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // نموذج تواصل أولياء الأمور
  // TODO [COLLEAGUE TASK #3]: ربط النموذج بواتساب المدرسة وإضافة نافذة جدول الحصص
  const contactForm = document.getElementById("contactForm");
  const successMsg = document.getElementById("contactSuccessMsg");
  if (contactForm && successMsg) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      successMsg.hidden = false;
      successMsg.textContent = "تم استلام رسالتك بنجاح لدى إدارة مدرسة بني مزار الثانوية الجديدة بنين.";
      contactForm.reset();
    });
  }

  // TODO [COLLEAGUE TASK #4]: تفعيل تكبير الصور (Lightbox) عند الضغط على صور قسم أعظم اللحظات البارزة
});
