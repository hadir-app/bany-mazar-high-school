# watch_and_push.ps1 – مراقبة تغييرات Git ورفعها تلقائيًا كل دقيقة
# يعمل كعملية خلفية (daemon) ولا يتوقف إلا عند إيقافه يدويًا.

while ($true) {
    # تحقق إذا كان هناك ملفات غير مُضافة أو مُعدلة
    $status = git status --porcelain
    if ($status) {
        # إضافة كل التغييرات
        git add .
        # إنشاء رسالة commit مع توقيت
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        git commit -m "Auto‑commit @ $timestamp"
        # دفع إلى الفرع main على GitHub
        git push origin main
    }
    # انتظر 60 ثانية قبل الفحص التالي
    Start-Sleep -Seconds 60
}
