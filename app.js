/**
 * ============================================================================
 * البوابة الرسمية — مدرسة بني مزار الثانوية الجديدة بنين (شرق المحطة)
 * المحرك التفاعلي المعماري (app.js)
 * ============================================================================
 * مهام التعاون المشترك المخصصة للزميل (Colleague Assigned Data & Features):
 * - TODO [COLLEAGUE TASK #1]: إدخال رابط جروب الفيسبوك الفعلي ورابط RSS/JSON في FB_FEED_CONFIG
 * - TODO [COLLEAGUE TASK #2]: إدخال الأسماء الكاملة للسادة المعلمين في FACULTY_DEPARTMENTS
 * - TODO [COLLEAGUE TASK #3]: تحديث أسماء أوائل الصفوف الثلاثة والجدول الفعلي في PORTAL_MODALS_CONTENT
 * - TODO [COLLEAGUE TASK #4]: ربط نموذج تواصل أولياء الأمور (#contactForm) بواتساب أو بريد المدرسة
 */

// ============================================================================
// 1. إعدادات الربط التلقائي مع جروب الفيسبوك الرسمي
// ============================================================================
// TODO [COLLEAGUE TASK #1]: ضع رابط جروب الفيسبوك الرسمي للمدرسة ورابط الـ JSON Feed هنا
const FB_FEED_CONFIG = {
  groupUrl: "https://www.facebook.com",
  rssJsonEndpoint: "", // ضع رابط RSS.app JSON Feed هنا للجلب التلقائي المباشر
  rotateIntervalMs: 7000,
};

// ============================================================================
// 2. أيقونات أكاديمية متجهة (SVG) لأقسام هيئة التدريس
// ============================================================================
const DEPT_ICONS = {
  arabic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  math: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 22 22 22 12 2"/><line x1="12" y1="10" x2="12" y2="16"/></svg>`,
  science: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><line x1="5.52" y1="16" x2="18.48" y2="16"/></svg>`,
  languages: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  humanities: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
  sports: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
};

// TODO [COLLEAGUE TASK #2]: استكمال أسماء السادة المعلمين الأفاضل داخل كل قسم
const FACULTY_DEPARTMENTS = [
  {
    id: "fac-1",
    dept: "arabic",
    rank: "كبير معلمي اللغة العربية",
    name: "أسرة اللغة العربية والتربية الدينية",
    subject: "النحو • البلاغة • الأدب • التربية الإسلامية",
    photo: "",
    icon: DEPT_ICONS.arabic,
    grades: "الصفوف الأول والثاني والثالث الثانوي",
    details:
      "يشرف قسم اللغة العربية والتربية الدينية على تأسيس الطلاب لغوياً وبلاغياً، وإعداد فقرات الإذاعة الصباحية ومسابقات الخطابة والقرآن الكريم على مستوى إدارة بني مزار التعليمية.",
  },
  {
    id: "fac-2",
    dept: "math",
    rank: "كبير معلمي الرياضيات",
    name: "أسرة الرياضيات البحتة والتطبيقية",
    subject: "الجبر • التفاضل والتكامل • الاستاتيكا والديناميكا",
    photo: "",
    icon: DEPT_ICONS.math,
    grades: "الصفوف الثلاثة وشعبة علمي رياضة",
    details:
      "يتولى القسم تدريس فروع الرياضيات البحتة والتطبيقية وتدريب طلاب شعبة علمي رياضة على التفكير التحليلي وحل النماذج الاسترشادية الوزارية.",
  },
  {
    id: "fac-3",
    dept: "science",
    rank: "معلمو الخبراء ومشرفو المعامل",
    name: "أسرة الفيزياء والكيمياء والأحياء",
    subject: "العلوم الطبيعية والمعامل المركزية",
    photo: "",
    icon: DEPT_ICONS.science,
    grades: "الشعبة العلمية (علوم ورياضة)",
    details:
      "يضم نخبة من معلمي الخبراء في الفيزياء والكيمياء والأحياء والجيولوجيا، مع تفعيل التجارب العملية داخل معامل المدرسة المجهزة.",
  },
  {
    id: "fac-4",
    dept: "languages",
    rank: "كبير معلمي اللغات الأجنبية",
    name: "أسرة اللغة الإنجليزية والفرنسية",
    subject: "اللغة الأجنبية الأولى والثانية",
    photo: "",
    icon: DEPT_ICONS.languages,
    grades: "جميع الصفوف والشعب الدراسية",
    details:
      "يركز القسم على تنمية مهارات القراءة والاستيعاب والترجمة والقواعد اللغوية الحديثة لطلاب المرحلة الثانوية.",
  },
  {
    id: "fac-5",
    dept: "humanities",
    rank: "مشرفو الشعبة الأدبية",
    name: "أسرة التاريخ والجغرافيا والفلسفة",
    subject: "التاريخ • الجغرافيا • الفلسفة وعلم النفس",
    photo: "",
    icon: DEPT_ICONS.humanities,
    grades: "الصف الأول الثانوي والشعبة الأدبية",
    details:
      "يعزز القسم الوعي التاريخي والجغرافي والانتماء الوطني، ويدرب طلاب الشعبة الأدبية على التحليل النقدي والخرائط التفاعلية.",
  },
  {
    id: "fac-6",
    dept: "humanities",
    rank: "الإشراف الرياضي والتربوي",
    name: "أسرة التربية الرياضية والأنشطة",
    subject: "طابور الصباح • الملعب الخماسي • الكشافة",
    photo: "",
    icon: DEPT_ICONS.sports,
    grades: "جميع طلاب المدرسة والفرق الرياضية",
    details:
      "يتولى تنظيم الاصطفاف الصباحي اليومي، وإدارة البطولات المدرسية ودوري الفصول على الملعب الخماسي المطور بالنجيل الصناعي.",
  },
];

// ============================================================================
// 3. بيانات الأخبار ومنشورات جروب الفيسبوك المتزامنة
// ============================================================================
const INITIAL_FB_POSTS = [
  {
    id: "news-1",
    category: "activities",
    catLabel: "الطابور والانضباط",
    date: "منذ ساعتين • جروب المدرسة الرسمي",
    title: "انتظام الطابور الصباحي وتحية العلم في مدرسة بني مزار الثانوية الجديدة بنين",
    text: "جانب من الاصطفاف الصباحي المهيب لطلاب مدرسة بني مزار الثانوية الجديدة بنين (شرق المحطة) بحضور السيد مدير المدرسة والسادة المعلمين، وسط أجواء من الجدية والانتماء الوطني.",
    image: "assets/images/morning-assembly.jpg",
    likes: "264",
    comments: "48 تعليق",
  },
  {
    id: "news-2",
    category: "announcements",
    catLabel: "بيان إدارة المدرسة",
    date: "أمس • إدارة المدرسة",
    title: "توجيهات هامة من إدارة المدرسة بشأن الانضباط اليومي والتقييمات الأسبوعية",
    text: "تؤكد إدارة مدرسة بني مزار الثانوية الجديدة بنين على أبنائها الطلاب ضرورة الالتزام بمواعيد طابور الصباح الساعة 7:30 صباحاً والحرص على أداء التقييمات الأسبوعية بانتظام.",
    image: "assets/images/principal.jpg",
    likes: "319",
    comments: "63 تعليق",
  },
  {
    id: "news-3",
    category: "activities",
    catLabel: "النشاط الرياضي",
    date: "منذ يومين • التربية الرياضية",
    title: "انطلاق منافسات دوري الفصول على الملعب الخماسي بالنجيل الصناعي",
    text: "في إطار رعاية المواهب الرياضية وبناء الشخصية المتكاملة، شهد ملعب المدرسة المطور بالنجيل الصناعي مباريات متميزة بين فصول الصفوف الثلاثة.",
    image: "assets/images/sports-field.jpg",
    likes: "210",
    comments: "39 تعليق",
  },
  {
    id: "news-4",
    category: "exams",
    catLabel: "شؤون الطلاب والجداول",
    date: "منذ 3 أيام • شؤون الطلاب",
    title: "انتظام الدراسة والمراجعات العلمية والأدبية بجميع أجنحة المدرسة",
    text: "متابعة يومية لسير الحصص الدراسية والمعامل العلمية للصفوف الأول والثاني والثالث الثانوي بمقر المدرسة بشرق المحطة ببني مزار.",
    image: "assets/images/school-facade.jpg",
    likes: "285",
    comments: "52 تعليق",
  },
];

// بيانات معرض الصور المكبر (Lightbox)
const GALLERY_MOMENTS = [
  {
    src: "assets/images/morning-assembly.jpg",
    title: "الاصطفاف الصباحي المهيب في فناء المدرسة",
    desc: "انتظام طلاب ومعلمي مدرسة بني مزار الثانوية الجديدة بنين كل صباح لتحية علم جمهورية مصر العربية.",
  },
  {
    src: "assets/images/principal.jpg",
    title: "القيادة المدرسية وسط أبنائها الطلاب",
    desc: "تواجد ميداني يومي لإدارة المدرسة في طابور الصباح والفعاليات الوطنية.",
  },
  {
    src: "assets/images/sports-field.jpg",
    title: "الملعب الخماسي المطور بالنجيل الصناعي",
    desc: "ملعب حديث مزين بجدارية الألعاب الأولمبية وعلم مصر لاحتضان الأنشطة الرياضية.",
  },
  {
    src: "assets/images/school-facade.jpg",
    title: "واجهة المبنى الرئيسي وعلم الجمهورية",
    desc: "شموخ معماري يميز مدرسة بني مزار الثانوية الجديدة بنين بمنطقة شرق المحطة.",
  },
  {
    src: "assets/images/school-campus.jpg",
    title: "تكامل الأجنحة الدراسية والفناء الواسع",
    desc: "بيئة تعليمية متكاملة توفر الفصول المجهزة والمعامل والمساحات المفتوحة.",
  },
];

// TODO [COLLEAGUE TASK #3]: تحديث الجداول الفعلية وأسماء أوائل الطلاب هنا
const PORTAL_MODALS_CONTENT = {
  examsModal: {
    title: "نظام التقييمات الأسبوعية والشهرية",
    html: `
      <p>تُعقد التقييمات الدورية لطلاب الصفين الأول والثاني الثانوي ومتابعة الصف الثالث الثانوي وفق الضوابط الوزارية المعتمدة:</p>
      <table class="modal-table">
        <thead>
          <tr>
            <th>نوع التقييم</th>
            <th>الموعد الدوري</th>
            <th>جهة المتابعة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>التقييمات الأسبوعية والواجبات</td>
            <td>أسبوعياً داخل الحصص الدراسية</td>
            <td>معلم المادة ومشرف القسم</td>
          </tr>
          <tr>
            <td>الاختبارات الشهرية</td>
            <td>نهاية كل شهر دراسي</td>
            <td>وكيل شؤون الطلاب والامتحانات</td>
          </tr>
          <tr>
            <td>إعلان النتائج والإشعارات</td>
            <td>فور اعتمادها رسمياً بالمدرسة وجروب الفيسبوك</td>
            <td>إدارة المدرسة</td>
          </tr>
        </tbody>
      </table>
    `,
  },
  scheduleModal: {
    title: "المواعيد الزمنية لليوم الدراسي وطابور الصباح",
    html: `
      <p>مواعيد العمل الرسمية بمدرسة بني مزار الثانوية الجديدة بنين (شرق المحطة) من الأحد إلى الخميس:</p>
      <table class="modal-table">
        <thead>
          <tr>
            <th>الفترة</th>
            <th>التوقيت</th>
            <th>ملاحظات الانضباط</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>اصطفاف طابور الصباح والإذاعة</td>
            <td>7:30 صباحاً</td>
            <td>حضور إلزامي وتحية العلم</td>
          </tr>
          <tr>
            <td>الحصص الدراسية الأولى — الرابعة</td>
            <td>8:00 ص — 11:15 ص</td>
            <td>شرح أكاديمي وتطبيق معملي</td>
          </tr>
          <tr>
            <td>الفسحة والنشاط الرياضي والثقافي</td>
            <td>11:15 ص — 11:45 ص</td>
            <td>إشراف كامل في الفناء والملعب</td>
          </tr>
          <tr>
            <td>الحصص الخامسة — السابعة</td>
            <td>11:45 ص — نهاية اليوم</td>
            <td>استكمال الجدول والتقييمات</td>
          </tr>
        </tbody>
      </table>
    `,
  },
  honorModal: {
    title: "لوحة شرف أوائل المدرسة والمتميزين",
    html: `
      <p>تفخر مدرسة بني مزار الثانوية الجديدة بنين بتكريم أبنائها المتفوقين علمياً وأخلاقياً ورياضياً على مدار العام الدراسي:</p>
      <table class="modal-table">
        <thead>
          <tr>
            <th>فئة التكريم</th>
            <th>مجال التميز</th>
            <th>وسام التقدير</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>أوائل الشهادة الثانوية العامة</td>
            <td>الشعبتان العلمية والأدبية</td>
            <td>درع التفوق وشهادة تقدير الإدارة</td>
          </tr>
          <tr>
            <td>أوائل الصفين الأول والثاني الثانوي</td>
            <td>التفوق في الاختبارات الشهرية</td>
            <td>شهادات شرف بطابور الصباح</td>
          </tr>
          <tr>
            <td>أبطال الأنشطة والمسابقات</td>
            <td>الإذاعة • الثقافة • الدوري الرياضي</td>
            <td>ميداليات وكأس المدرسة</td>
          </tr>
        </tbody>
      </table>
    `,
  },
};

// ============================================================================
// 4. الحالة العامة ودوال العرض (State & Renderers)
// ============================================================================
let postsData = [...INITIAL_FB_POSTS];
let activePostIndex = 0;
let activeNewsCategory = "all";
let activeNewsQuery = "";
let activeLightboxIndex = 0;
let fbAutoTimer = null;

// بديل إلزامي لدعم الإغلاق بالنقر خارج النافذة (Light-Dismiss) في المتصفحات التي لا تدعم closedby
function installDialogLightDismissFallback(dialogEl) {
  if (!dialogEl || "closedBy" in HTMLDialogElement.prototype) return;
  dialogEl.addEventListener("click", (event) => {
    if (event.target !== dialogEl) return;
    const rect = dialogEl.getBoundingClientRect();
    const isDialogContent =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (isDialogContent) return;
    dialogEl.close();
  });
}

function openInfoModal(title, bodyHtml) {
  const dialog = document.getElementById("portalInfoDialog");
  const titleEl = document.getElementById("infoDialogTitle");
  const bodyEl = document.getElementById("infoDialogBody");
  if (!dialog || !titleEl || !bodyEl) return;
  titleEl.textContent = title;
  bodyEl.innerHTML = bodyHtml;
  dialog.showModal();
}

// عرض شبكة هيئة التدريس
function renderFacultyCards(selectedDept = "all") {
  const grid = document.getElementById("teachersGrid");
  if (!grid) return;

  const list =
    selectedDept === "all"
      ? FACULTY_DEPARTMENTS
      : FACULTY_DEPARTMENTS.filter((item) => item.dept === selectedDept);

  grid.innerHTML = list
    .map((item) => {
      const visual = item.photo
        ? `<img src="${item.photo}" alt="${item.name}" loading="lazy" />`
        : item.icon;

      return `
        <article class="faculty-card surface-card">
          <div class="faculty-avatar-ring">
            <div class="faculty-avatar-inner" aria-hidden="true">
              ${visual}
            </div>
          </div>
          <span class="faculty-rank-pill">${item.rank}</span>
          <h3>${item.name}</h3>
          <p class="faculty-subject">${item.subject}</p>
          <button type="button" class="faculty-more-btn" data-faculty-id="${item.id}">
            عرض بطاقة القسم والتفاصيل
          </button>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll("[data-faculty-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const found = FACULTY_DEPARTMENTS.find((f) => f.id === btn.dataset.facultyId);
      if (!found) return;
      openInfoModal(
        found.name,
        `
          <p><strong>الدرجة الإشرافية:</strong> ${found.rank}</p>
          <p><strong>التخصصات والمواد:</strong> ${found.subject}</p>
          <p><strong>الصفوف المستهدفة:</strong> ${found.grades}</p>
          <hr style="margin:0.85rem 0;border:0;border-top:1px solid #e2dcd0;" />
          <p>${found.details}</p>
        `
      );
    });
  });
}

// عرض الكارت الأبيض داخل إطار فيسبوك العنابي
function renderFacebookShowcase(index = 0) {
  const cardEl = document.getElementById("fbActivePostCard");
  const dotsEl = document.getElementById("fbDotsContainer");
  if (!cardEl || postsData.length === 0) return;

  activePostIndex = ((index % postsData.length) + postsData.length) % postsData.length;
  const post = postsData[activePostIndex];

  cardEl.innerHTML = `
    <div class="fb-embed-head">
      <div class="fb-author-box">
        <img src="assets/images/logo.jpg" alt="شعار المدرسة" width="40" height="40" />
        <div>
          <strong>فيسبوك المدرسة — بني مزار ث بنين الجديدة</strong>
          <span>${post.date}</span>
        </div>
      </div>
      <div class="fb-badge-circle" aria-hidden="true">f</div>
    </div>

    <div class="fb-embed-body">
      ${post.text}
    </div>

    <div class="fb-embed-media">
      <img src="${post.image}" alt="${post.title}" loading="lazy" />
    </div>

    <div class="fb-embed-footer">
      <span>❤️ 👍 ${post.likes}</span>
      <span>👍 أعجبني • 💬 ${post.comments}</span>
    </div>
  `;

  if (dotsEl) {
    dotsEl.innerHTML = postsData
      .map(
        (_, idx) =>
          `<button type="button" class="fb-dot ${idx === activePostIndex ? "active" : ""}" data-fb-dot="${idx}" aria-label="منشور ${idx + 1}"></button>`
      )
      .join("");

    dotsEl.querySelectorAll("[data-fb-dot]").forEach((dot) => {
      dot.addEventListener("click", () => {
        renderFacebookShowcase(Number(dot.dataset.fbDot || 0));
        renderNewsStack();
      });
    });
  }
}

// عرض قائمة البيانات والأخبار على اليمين
function renderNewsStack() {
  const stackEl = document.getElementById("newsFeedStack");
  if (!stackEl) return;

  const q = activeNewsQuery.trim().toLowerCase();
  const filtered = postsData.filter((item) => {
    const matchesCat = activeNewsCategory === "all" || item.category === activeNewsCategory;
    const matchesQuery =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.text.toLowerCase().includes(q) ||
      item.catLabel.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    stackEl.innerHTML = `<p style="padding:1rem;color:#5f6f81;">لا توجد أخبار مطابقة لعبارة البحث الحالية.</p>`;
    return;
  }

  stackEl.innerHTML = filtered
    .map((item) => {
      const realIdx = postsData.findIndex((p) => p.id === item.id);
      const isCurrent = realIdx === activePostIndex;
      return `
        <button type="button" class="news-row-item ${isCurrent ? "active" : ""}" data-post-idx="${realIdx}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div>
            <div class="news-row-meta">${item.catLabel} • ${item.date}</div>
            <h4>${item.title}</h4>
            <p>${item.text}</p>
          </div>
        </button>
      `;
    })
    .join("");

  stackEl.querySelectorAll("[data-post-idx]").forEach((rowBtn) => {
    rowBtn.addEventListener("click", () => {
      const idx = Number(rowBtn.dataset.postIdx || 0);
      renderFacebookShowcase(idx);
      renderNewsStack();
    });
  });
}

// الجلب التلقائي من RSS JSON عند وضع الرابط في FB_FEED_CONFIG
async function syncLiveFacebookRss() {
  if (!FB_FEED_CONFIG.rssJsonEndpoint) return;
  try {
    const res = await fetch(FB_FEED_CONFIG.rssJsonEndpoint);
    if (!res.ok) return;
    const data = await res.json();
    if (Array.isArray(data.items) && data.items.length > 0) {
      postsData = data.items.slice(0, 6).map((item, idx) => ({
        id: `rss-${idx}`,
        category: "announcements",
        catLabel: "منشور متزامن تلقائياً",
        date: item.pubDate || "تحديث مباشر من الجروب",
        title: item.title || "منشور جديد من جروب المدرسة",
        text: item.content_text || item.description || item.title || "",
        image: item.image || "assets/images/morning-assembly.jpg",
        likes: "مباشر",
        comments: "جروب فيسبوك",
      }));
      renderFacebookShowcase(0);
      renderNewsStack();
    }
  } catch (err) {
    console.warn("Facebook RSS feed fallback active:", err);
  }
}

// عارض الصور المكبر (Lightbox)
function updateLightboxView(index) {
  const imgEl = document.getElementById("lightboxImg");
  const titleEl = document.getElementById("lightboxTitle");
  const descEl = document.getElementById("lightboxDesc");
  const countEl = document.getElementById("lightboxCounter");
  if (!imgEl || !titleEl || !descEl || !countEl) return;

  activeLightboxIndex =
    ((index % GALLERY_MOMENTS.length) + GALLERY_MOMENTS.length) % GALLERY_MOMENTS.length;
  const item = GALLERY_MOMENTS[activeLightboxIndex];

  imgEl.src = item.src;
  imgEl.alt = item.title;
  titleEl.textContent = item.title;
  descEl.textContent = item.desc;
  countEl.textContent = `${activeLightboxIndex + 1} / ${GALLERY_MOMENTS.length}`;
}

// ============================================================================
// 5. التهيئة وربط الأحداث عند تحميل الصفحة
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. تحديث التاريخ العربي الحي في الشريط العلوي
  const dateEl = document.getElementById("liveCurrentDate");
  if (dateEl) {
    try {
      const formatted = new Intl.DateTimeFormat("ar-EG", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date());
      dateEl.textContent = formatted;
    } catch {
      dateEl.textContent = "شرق المحطة — بني مزار";
    }
  }

  // 2. تفعيل النوافذ المنبثقة (<dialog>) مع دعم Light-Dismiss
  const lightboxDialog = document.getElementById("lightboxDialog");
  const portalInfoDialog = document.getElementById("portalInfoDialog");
  installDialogLightDismissFallback(lightboxDialog);
  installDialogLightDismissFallback(portalInfoDialog);

  document.querySelectorAll("[data-close-dialog]").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest("dialog")?.close();
    });
  });

  // 3. عرض الأقسام الديناميكية
  renderFacultyCards("all");
  renderFacebookShowcase(0);
  renderNewsStack();
  syncLiveFacebookRss();

  const fbExtLink = document.getElementById("fbGroupExternalLink");
  if (fbExtLink && FB_FEED_CONFIG.groupUrl) {
    fbExtLink.href = FB_FEED_CONFIG.groupUrl;
  }

  // 4. تبديل مشاهد البانر الرئيسي (Hero Scene Switcher)
  const heroMainImg = document.getElementById("heroMainImg");
  const scenePills = document.querySelectorAll(".scene-pill");
  scenePills.forEach((pill) => {
    pill.addEventListener("click", () => {
      scenePills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      if (heroMainImg && pill.dataset.img) {
        heroMainImg.style.opacity = "0.35";
        setTimeout(() => {
          heroMainImg.src = pill.dataset.img;
          heroMainImg.alt = pill.dataset.alt || "";
          heroMainImg.style.opacity = "1";
        }, 180);
      }
    });
  });

  // 5. فلترة أقسام المعلمين
  const deptPills = document.querySelectorAll("#deptTabs .dept-pill");
  deptPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      deptPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderFacultyCards(pill.dataset.dept || "all");
    });
  });

  // 6. فلترة وبحث غرفة الأخبار + أسهم إطار فيسبوك
  const newsCatBtns = document.querySelectorAll("#newsCatTabs .news-cat-btn");
  newsCatBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      newsCatBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeNewsCategory = btn.dataset.cat || "all";
      renderNewsStack();
    });
  });

  const newsSearchInput = document.getElementById("newsSearchInput");
  if (newsSearchInput) {
    newsSearchInput.addEventListener("input", () => {
      activeNewsQuery = newsSearchInput.value || "";
      renderNewsStack();
    });
  }

  document.getElementById("fbPrevBtn")?.addEventListener("click", () => {
    renderFacebookShowcase(activePostIndex - 1);
    renderNewsStack();
  });

  document.getElementById("fbNextBtn")?.addEventListener("click", () => {
    renderFacebookShowcase(activePostIndex + 1);
    renderNewsStack();
  });

  const startFbRotation = () => {
    clearInterval(fbAutoTimer);
    fbAutoTimer = setInterval(() => {
      renderFacebookShowcase(activePostIndex + 1);
      renderNewsStack();
    }, FB_FEED_CONFIG.rotateIntervalMs);
  };
  startFbRotation();

  const fbFrameEl = document.querySelector(".fb-showcase-frame");
  fbFrameEl?.addEventListener("mouseenter", () => clearInterval(fbAutoTimer));
  fbFrameEl?.addEventListener("mouseleave", startFbRotation);

  // 7. معرض الصور المكبر (Lightbox)
  document.querySelectorAll("[data-lightbox-index]").forEach((card) => {
    const openCardLightbox = () => {
      const idx = Number(card.dataset.lightboxIndex || 0);
      updateLightboxView(idx);
      lightboxDialog?.showModal();
    };
    card.addEventListener("click", openCardLightbox);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCardLightbox();
      }
    });
  });

  document.getElementById("lbPrevBtn")?.addEventListener("click", () => {
    updateLightboxView(activeLightboxIndex - 1);
  });

  document.getElementById("lbNextBtn")?.addEventListener("click", () => {
    updateLightboxView(activeLightboxIndex + 1);
  });

  document.addEventListener("keydown", (e) => {
    if (!lightboxDialog?.open) return;
    if (e.key === "ArrowRight") updateLightboxView(activeLightboxIndex - 1);
    if (e.key === "ArrowLeft") updateLightboxView(activeLightboxIndex + 1);
  });

  // 8. أزرار الروابط السريعة التفاعلية
  document.querySelectorAll("[data-open-modal]").forEach((tile) => {
    tile.addEventListener("click", () => {
      const key = tile.dataset.openModal;
      const modalData = key ? PORTAL_MODALS_CONTENT[key] : null;
      if (modalData) {
        openInfoModal(modalData.title, modalData.html);
      }
    });
  });

  // 9. قائمة الموبايل + Scroll-Spy لتحديد القسم النشط في الهيدر
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const primaryNav = document.getElementById("primaryNav");
  if (menuToggleBtn && primaryNav) {
    menuToggleBtn.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      menuToggleBtn.setAttribute("aria-expanded", String(isOpen));
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        menuToggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const navLinks = document.querySelectorAll(".primary-nav .nav-link[data-section]");
  const observedSections = Array.from(navLinks)
    .map((l) => document.getElementById(l.dataset.section))
    .filter(Boolean);

  if ("IntersectionObserver" in window && observedSections.length > 0) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((l) => {
              l.classList.toggle("active", l.dataset.section === id);
            });
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    observedSections.forEach((sec) => spyObserver.observe(sec));
  }

  // 10. نموذج مراسلة شؤون الطلاب وإدارة المدرسة
  // TODO [COLLEAGUE TASK #4]: ربط هذا النموذج بإرسال مباشر لواتساب المدرسة أو البريد الرسمي
  const contactForm = document.getElementById("contactForm");
  const contactSuccessMsg = document.getElementById("contactSuccessMsg");
  if (contactForm && contactSuccessMsg) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const sender = document.getElementById("visitorName")?.value || "ولي الأمر";
      contactSuccessMsg.hidden = false;
      contactSuccessMsg.textContent = `شكراً لك (${sender}) — تم تسجيل رسالتك بنجاح لدى مكتب شؤون الطلاب بمدرسة بني مزار الثانوية الجديدة بنين.`;
      contactForm.reset();
    });
  }
});
