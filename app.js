/**
 * ============================================================================
 * البوابة الرسمية — مدرسة بني مزار الثانوية الجديدة بنين (شرق المحطة)
 * المحرك التفاعلي المعماري (app.js)
 * ============================================================================
 * التحديث النهائي:
 * 1. ربط مباشر بجروب فيسبوك المدرسة الرسمي: https://facebook.com/groups/alsanay2014/
 * 2. حصر أحدث المنشورات في 3 منشورات نصية إخبارية دون تكرار صور الموقع.
 * 3. تفعيل النوافذ المنبثقة التفاعلية للبوابات التعليمية (دليل كيريو وسبريكس والثقافة المالية).
 * 4. ضبط التمرير والتجاوب والقوائم لجميع الأجهزة.
 */

// ============================================================================
// 1. إعدادات جروب فيسبوك الرسمي والمشاهد
// ============================================================================
const FB_FEED_CONFIG = {
  groupUrl: "https://facebook.com/groups/alsanay2014/",
  groupName: "جروب مدرسة بني مزار الثانوية بنين (alsanay2014)",
  rotateIntervalMs: 8000,
};

// مكتبة مشاهد البانر
const HERO_SCENES = [
  {
    src: "assets/images/morning-assembly.jpg",
    alt: "اصطفاف طلاب ومعلمي مدرسة بني مزار الثانوية الجديدة بنين في طابور الصباح",
    label: "طابور الصباح والفناء",
  },
  {
    src: "assets/images/school-facade.jpg",
    alt: "واجهة مدرسة بني مزار الثانوية الجديدة بنين وعلم مصر",
    label: "واجهة المبنى الرئيسي",
  },
  {
    src: "assets/images/sports-field.jpg",
    alt: "الملعب الخماسي النجيل الصناعي بالمدرسة",
    label: "الملعب الرياضي المطور",
  },
];

// ============================================================================
// 2. أيقونات أقسام هيئة التدريس (SVG)
// ============================================================================
const DEPT_ICONS = {
  arabic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  math: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 22 22 22 12 2"/><line x1="12" y1="10" x2="12" y2="16"/></svg>`,
  science: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><line x1="5.52" y1="16" x2="18.48" y2="16"/></svg>`,
  languages: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  humanities: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
  sports: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
};

// تدرج هيئة التدريس
const FACULTY_DEPARTMENTS = [
  {
    id: "fac-1",
    dept: "arabic",
    rank: "كبير معلمي اللغة العربية",
    name: "أسرة اللغة العربية والتربية الدينية",
    subject: "النحو • البلاغة • الأدب • التربية الإسلامية",
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
    icon: DEPT_ICONS.sports,
    grades: "جميع طلاب المدرسة والفرق الرياضية",
    details:
      "يتولى تنظيم الاصطفاف الصباحي اليومي، وإدارة البطولات المدرسية ودوري الفصول على الملعب الخماسي المطور بالنجيل الصناعي.",
  },
];

// ============================================================================
// 3. أحدث 3 منشورات إخبارية من جروب فيسبوك (بدون تكرار صور الموقع)
// ============================================================================
const INITIAL_FB_POSTS = [
  {
    id: "news-1",
    tag: "تنبيه تدريب الوزارة",
    date: "منشور مثبت • جروب المدرسة الرسمي",
    title: "بدء التدريب على منصة كيريو (Qureo) للبرمجة والذكاء الاصطناعي لطلاب أولى ثانوي",
    text: "تُهيب إدارة المدرسة بأبنائها طلاب الصف الأول الثانوي الدخول على منصة الشهادات العامة لاستلام اسم المستخدم وكلمة المرور الخاصة بمنصة كيريو اليابانية، والبدء في حل التقييمات التفاعلية وفق توجيهات وزارة التربية والتعليم.",
    likes: "348",
    comments: "54 تعليق",
  },
  {
    id: "news-2",
    tag: "شؤون التعليم والانضباط",
    date: "أمس • إدارة المدرسة",
    title: "التشديد على انتظام طابور الصباح الساعة 7:30 صباحاً وأداء التقييمات الأسبوعية",
    text: "تؤكد إدارة المدرسة على جميع الطلاب الالتزام التام بالزي المدرسي والحضور في الموعد المحدد لطابور الصباح، ومتابعة تسليم كراسات الحصة والواجبات الدورية لمعلمي المواد أولاً بأول.",
    likes: "292",
    comments: "41 تعليق",
  },
  {
    id: "news-3",
    tag: "النشاط الرياضي",
    date: "منذ يومين • التربية الرياضية",
    title: "جدول مباريات دوري الفصول لكرة القدم على الملعب الخماسي بالنجيل الصناعي",
    text: "انطلاق فعاليات دوري الفصول للفصل الدراسي الحالي بين فصول الصفوف الأول والثاني والثالث الثانوي في حصص التربية الرياضية والفسحة، تحت إشراف أسرة التربية الرياضية بالمدرسة.",
    likes: "215",
    comments: "28 تعليق",
  },
];

// معرض الصور المكبر (Lightbox)
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

// محتويات النوافذ المنبثقة للخدمات ودليل المنصات
const PORTAL_MODALS_CONTENT = {
  qureoGuideModal: {
    title: "دليل الدخول لمنصات كيريو، سبريكس، والثقافة المالية",
    html: `
      <div class="guide-modal-content">
        <p class="modal-lead">خطوات ميسرة لأبنائنا الطلاب للوصول المباشر إلى المنصات المعتمدة من وزارة التربية والتعليم:</p>
        
        <div class="guide-step-card">
          <h4>1️⃣ استلام بيانات منصة كيريو (Qureo) لطلاب الصف الأول الثانوي:</h4>
          <ol>
            <li>ادخل أولاً على <strong>منصة الشهادات العامة</strong> التابعة للوزارة: <a href="https://moe-register.emis.gov.eg/login" target="_blank" rel="noopener noreferrer">moe-register.emis.gov.eg/login ↗</a></li>
            <li>سجّل الدخول باستخدام <strong>البريد الإلكتروني المدرسي الموحد</strong> وكلمة المرور الخاصة بك.</li>
            <li>اضغط على خيار <strong>«التدريب على الذكاء الاصطناعي»</strong> واضغط على زر استلام بيانات التدريب.</li>
            <li>انسخ اسم المستخدم (Username) وكلمة المرور (Password).</li>
            <li>توجّه إلى <strong>منصة كيريو الرسمية</strong>: <a href="https://me-portal.qureo.education/login" target="_blank" rel="noopener noreferrer">me-portal.qureo.education/login ↗</a> وسجل الدخول وابدأ التدريب.</li>
          </ol>
        </div>

        <div class="guide-step-card">
          <h4>2️⃣ الدخول لمنصة الثقافة المالية (SPRIX Learning Square):</h4>
          <ol>
            <li>افتح الرابط المباشر للمنصة في مصر: <a href="https://egy.app.spx-learning-square.com/login" target="_blank" rel="noopener noreferrer">egy.app.spx-learning-square.com/login ↗</a></li>
            <li>أدخل كود الطالب الموحد أو البريد المدرسي الموحد المسلم لك من مسؤول التطوير التكنولوجي بالمدرسة.</li>
            <li>تابع الفصول الرقمية لمقرر الثقافة المالية والتقييمات المعتمدة.</li>
          </ol>
        </div>

        <div class="guide-step-card">
          <h4>3️⃣ بوابة سبريكس التعليمية العامة (SPRIX Portal):</h4>
          <p>تُستخدم لمتابعة مشروعات التقييم اليابانية المشتركة واختبارات TOFAS لمادة الرياضيات: <a href="https://sprixportal.jp/" target="_blank" rel="noopener noreferrer">sprixportal.jp ↗</a></p>
        </div>
      </div>
    `,
  },
  examsModal: {
    title: "نظام التقييمات الأسبوعية والشهرية",
    html: `
      <p>تُعقد التقييمات الدورية لطلاب الصفين الأول والثاني الثانوي ومتابعة الصف الثالث الثانوي وفق الضوابط الوزارية المعتمدة:</p>
      <div tabindex="0" role="region" aria-label="جدول نظام التقييمات الأسبوعية والشهرية" class="table-wrapper">
        <table class="modal-table">
          <thead>
            <tr>
              <th scope="col">نوع التقييم</th>
              <th scope="col">الموعد الدوري</th>
              <th scope="col">جهة المتابعة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">التقييمات الأسبوعية والواجبات</th>
              <td>أسبوعياً داخل الحصص الدراسية</td>
              <td>معلم المادة ومشرف القسم</td>
            </tr>
            <tr>
              <th scope="row">الاختبارات الشهرية</th>
              <td>نهاية كل شهر دراسي</td>
              <td>وكيل شؤون الطلاب والامتحانات</td>
            </tr>
            <tr>
              <th scope="row">إعلان النتائج والإشعارات</th>
              <td>فور اعتمادها رسمياً بالمدرسة وجروب الفيسبوك</td>
              <td>إدارة المدرسة</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  scheduleModal: {
    title: "المواعيد الزمنية لليوم الدراسي وطابور الصباح",
    html: `
      <p>مواعيد العمل الرسمية بمدرسة بني مزار الثانوية الجديدة بنين (شرق المحطة) من الأحد إلى الخميس:</p>
      <div tabindex="0" role="region" aria-label="جدول المواعيد الزمنية لليوم الدراسي" class="table-wrapper">
        <table class="modal-table">
          <thead>
            <tr>
              <th scope="col">الفترة</th>
              <th scope="col">التوقيت</th>
              <th scope="col">ملاحظات الانضباط</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">اصطفاف طابور الصباح والإذاعة</th>
              <td>7:30 صباحاً</td>
              <td>حضور إلزامي وتحية علم مصر</td>
            </tr>
            <tr>
              <th scope="row">الحصص الدراسية الأولى — الرابعة</th>
              <td>8:00 ص — 11:15 ص</td>
              <td>شرح أكاديمي وتطبيق معملي</td>
            </tr>
            <tr>
              <th scope="row">الفسحة والنشاط الرياضي والثقافي</th>
              <td>11:15 ص — 11:45 ص</td>
              <td>إشراف كامل في الفناء والملعب</td>
            </tr>
            <tr>
              <th scope="row">الحصص الخامسة — السابعة</th>
              <td>11:45 ص — نهاية اليوم</td>
              <td>استكمال الجدول والتقييمات</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  honorModal: {
    title: "لوحة شرف أوائل المدرسة والمتميزين",
    html: `
      <p>تفخر مدرسة بني مزار الثانوية الجديدة بنين بتكريم أبنائها المتفوقين علمياً وأخلاقياً ورياضياً على مدار العام الدراسي:</p>
      <div tabindex="0" role="region" aria-label="جدول لوحة شرف أوائل المدرسة" class="table-wrapper">
        <table class="modal-table">
          <thead>
            <tr>
              <th scope="col">فئة التكريم</th>
              <th scope="col">مجال التميز</th>
              <th scope="col">وسام التقدير</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">أوائل الشهادة الثانوية العامة</th>
              <td>الشعبتان العلمية والأدبية</td>
              <td>درع التفوق وشهادة تقدير الإدارة</td>
            </tr>
            <tr>
              <th scope="row">أوائل الصفين الأول والثاني الثانوي</th>
              <td>التفوق في الاختبارات الشهرية</td>
              <td>شهادات شرف بطابور الصباح</td>
            </tr>
            <tr>
              <th scope="row">أبطال الأنشطة والمسابقات</th>
              <td>الإذاعة • الثقافة • الدوري الرياضي</td>
              <td>ميداليات وكأس المدرسة</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
};

// ============================================================================
// 4. حالة العرض ودوال الرسم
// ============================================================================
let postsData = INITIAL_FB_POSTS.slice(0, 3);
let activePostIndex = 0;
let activeLightboxIndex = 0;
let fbAutoTimer = null;

// دعم الإغلاق بالنقر خارج المودال
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

// رسم كروت المعلمين
function renderFacultyCards(selectedDept = "all") {
  const grid = document.getElementById("teachersGrid");
  if (!grid) return;

  const list =
    selectedDept === "all"
      ? FACULTY_DEPARTMENTS
      : FACULTY_DEPARTMENTS.filter((item) => item.dept === selectedDept);

  grid.innerHTML = list
    .map((item) => `
      <article class="faculty-card surface-card">
        <div class="faculty-avatar-ring">
          <div class="faculty-avatar-inner" aria-hidden="true">
            ${item.icon}
          </div>
        </div>
        <span class="faculty-rank-pill">${item.rank}</span>
        <h3>${item.name}</h3>
        <p class="faculty-subject">${item.subject}</p>
        <button type="button" class="faculty-more-btn" data-faculty-id="${item.id}">
          عرض بطاقة القسم والتفاصيل
        </button>
      </article>
    `)
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

// رسم كارت منشور فيسبوك المعروض
function renderFacebookShowcase(index = 0) {
  const cardEl = document.getElementById("fbActivePostCard");
  const dotsEl = document.getElementById("fbDotsContainer");
  if (!cardEl || postsData.length === 0) return;

  activePostIndex = ((index % postsData.length) + postsData.length) % postsData.length;
  const post = postsData[activePostIndex];

  cardEl.innerHTML = `
    <div class="fb-embed-head">
      <div class="fb-author-box">
        <div class="fb-crest-tiny">
          <img src="assets/images/logo.jpg" alt="شعار المدرسة" width="38" height="38" />
        </div>
        <div>
          <strong>جروب مدرسة بني مزار ث بنين الرسمى</strong>
          <span>${post.date}</span>
        </div>
      </div>
      <div class="fb-badge-circle" aria-hidden="true">f</div>
    </div>

    <div class="fb-embed-body fb-text-post">
      <span class="fb-post-tag">${post.tag}</span>
      <h4 class="fb-post-headline">${post.title}</h4>
      <p>${post.text}</p>
    </div>

    <div class="fb-embed-footer">
      <span>👍 ❤️ ${post.likes} تفاعل</span>
      <a href="${FB_FEED_CONFIG.groupUrl}" target="_blank" rel="noopener noreferrer" class="fb-post-direct-link">
        عرض المنشور على فيسبوك ↗
      </a>
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

// رسم قائمة المنشورات الثلاثة في اليمين
function renderNewsStack() {
  const stackEl = document.getElementById("newsFeedStack");
  if (!stackEl) return;

  stackEl.innerHTML = postsData
    .map((item, idx) => {
      const isCurrent = idx === activePostIndex;
      return `
        <button type="button" class="news-row-item news-text-row ${isCurrent ? "active" : ""}" data-post-idx="${idx}">
          <div class="news-bulletin-badge" aria-hidden="true">${idx + 1}</div>
          <div class="news-row-body">
            <div class="news-row-meta">${item.tag} • ${item.date}</div>
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
// 5. التهيئة وربط الأحداث
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. التاريخ الحي
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

  // 2. تفعيل المودال
  const lightboxDialog = document.getElementById("lightboxDialog");
  const portalInfoDialog = document.getElementById("portalInfoDialog");
  installDialogLightDismissFallback(lightboxDialog);
  installDialogLightDismissFallback(portalInfoDialog);

  document.querySelectorAll("[data-close-dialog]").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest("dialog")?.close();
    });
  });

  // 3. عرض الأقسام
  renderFacultyCards("all");
  renderFacebookShowcase(0);
  renderNewsStack();

  // ضبط الروابط الخارجية للجروب
  const fbExtLink = document.getElementById("fbGroupExternalLink");
  const headerFbBtn = document.getElementById("headerFbPageBtn");
  if (fbExtLink) fbExtLink.href = FB_FEED_CONFIG.groupUrl;
  if (headerFbBtn) {
    headerFbBtn.href = FB_FEED_CONFIG.groupUrl;
    headerFbBtn.target = "_blank";
    headerFbBtn.rel = "noopener noreferrer";
  }

  // 4. تبديل مشاهد البانر
  const heroMainImg = document.getElementById("heroMainImg");
  const scenePills = Array.from(document.querySelectorAll(".scene-pill"));
  let currentHeroIdx = 0;

  function setHeroScene(index) {
    currentHeroIdx = ((index % HERO_SCENES.length) + HERO_SCENES.length) % HERO_SCENES.length;
    const scene = HERO_SCENES[currentHeroIdx];
    scenePills.forEach((p, idx) => p.classList.toggle("active", idx === currentHeroIdx));
    if (heroMainImg && scene) {
      heroMainImg.style.opacity = "0.4";
      setTimeout(() => {
        heroMainImg.src = scene.src;
        heroMainImg.alt = scene.alt;
        heroMainImg.style.opacity = "1";
      }, 150);
    }
  }

  scenePills.forEach((pill, idx) => {
    pill.addEventListener("click", () => setHeroScene(idx));
  });

  // في اتجاه RTL: السابق (يميناً) والتالي (يساراً)
  document.getElementById("heroPrevBtn")?.addEventListener("click", () => {
    setHeroScene(currentHeroIdx - 1);
  });

  document.getElementById("heroNextBtn")?.addEventListener("click", () => {
    setHeroScene(currentHeroIdx + 1);
  });

  // 5. فلترة المعلمين
  const deptPills = document.querySelectorAll("#deptTabs .dept-pill");
  deptPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      deptPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderFacultyCards(pill.dataset.dept || "all");
    });
  });

  // 6. أسهم المنشورات والدوران التلقائي
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

  // 7. Lightbox
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

  // 8. أزرار المودال للخدمات ودليل كيريو
  document.querySelectorAll("[data-open-modal]").forEach((tile) => {
    tile.addEventListener("click", () => {
      const key = tile.dataset.openModal;
      const modalData = key ? PORTAL_MODALS_CONTENT[key] : null;
      if (modalData) {
        openInfoModal(modalData.title, modalData.html);
      }
    });
  });

  // 9. قائمة الموبايل والتابلت
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const primaryNav = document.getElementById("primaryNav");
  const topHeader = document.getElementById("topHeader");
  const mainEl = document.querySelector("main");

  function closeMobileMenu() {
    if (!menuToggleBtn || !primaryNav) return;
    primaryNav.classList.remove("open");
    menuToggleBtn.classList.remove("is-open");
    menuToggleBtn.setAttribute("aria-expanded", "false");
    if (mainEl) mainEl.removeAttribute("inert");
  }

  if (menuToggleBtn && primaryNav) {
    menuToggleBtn.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      menuToggleBtn.classList.toggle("is-open", isOpen);
      menuToggleBtn.setAttribute("aria-expanded", String(isOpen));
      if (mainEl) {
        if (isOpen) {
          mainEl.setAttribute("inert", "");
        } else {
          mainEl.removeAttribute("inert");
        }
      }
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("click", (e) => {
      if (!primaryNav.classList.contains("open")) return;
      if (topHeader && !topHeader.contains(e.target)) {
        closeMobileMenu();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && primaryNav.classList.contains("open")) {
        closeMobileMenu();
        menuToggleBtn.focus();
      }
    });

    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth > 1140 && primaryNav.classList.contains("open")) {
          closeMobileMenu();
        }
      },
      { passive: true }
    );
  }

  // 10. Scroll-Spy الدقيق وتحديد القسم النشط
  const navLinks = Array.from(document.querySelectorAll(".primary-nav .nav-link[data-section]"));
  const trackedSections = navLinks
    .map((link) => document.getElementById(link.dataset.section))
    .filter(Boolean);

  function updateActiveNavOnScroll() {
    if (window.scrollY < 200) {
      navLinks.forEach((l) => {
        const isActive = l.dataset.section === "home";
        l.classList.toggle("active", isActive);
        l.setAttribute("aria-current", isActive ? "true" : "false");
      });
      return;
    }

    // فحص نهاية الصفحة
    const isAtBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

    if (isAtBottom) {
      navLinks.forEach((l) => {
        const isActive = l.dataset.section === "location";
        l.classList.toggle("active", isActive);
        l.setAttribute("aria-current", isActive ? "true" : "false");
      });
      return;
    }

    let currentId = "home";
    const offsetTrigger = window.scrollY + 130;
    for (const sec of trackedSections) {
      if (sec.offsetTop <= offsetTrigger) {
        currentId = sec.id;
      }
    }

    navLinks.forEach((l) => {
      const isActive = l.dataset.section === currentId;
      l.classList.toggle("active", isActive);
      l.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }

  window.addEventListener("scroll", updateActiveNavOnScroll, { passive: true });
  updateActiveNavOnScroll();
});
