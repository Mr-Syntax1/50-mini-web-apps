function scrollToSection(sectionId) {
    if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}


const header = document.querySelector('.header-content');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;//موقعیت فعلی اسکرول (در هر لحظه)

    if (currentScrollTop > lastScrollTop && currentScrollTop > header.offsetHeight) {
        // اسکرول به سمت پایین و نه در ابتدای صفحه
        header.classList.add('header-content-hidden');
    } else {
        // اسکرول به سمت بالا یا در ابتدای صفحه
        header.classList.remove('header-content-hidden');
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    // برای جلوگیری از مقادیر منفی و بروزرسانی
});

// اطمینان از نمایش هدر در ابتدای بارگذاری صفحه
document.addEventListener('DOMContentLoaded', (event) => {
    header.classList.remove('header-content-hidden');
});



// تابعی برای کپی کردن متن با استفاده از Clipboard API
const copyText = (text) => {
    if (!text) return; // اگر متن خالی بود، کاری انجام نده
    navigator.clipboard.writeText(text).then(() => {
        const alertElement = document.querySelector('.aleart');

        // اگر المنت پیدا شد، ادامه بده
        if (alertElement) {

            alertElement.classList.add('active');

            setTimeout(() => {
                alertElement.classList.remove('active'); // اول انیمیشن برگشت رو اجرا کن
            }, 2000); // 2000 میلی‌ثانیه = 2 ثانیه
        }
    }).catch(err => {
        console.error("خطا در کپی کردن متن: ", err);
        alert("کپی کردن متن با خطا مواجه شد.");
    });
};


document.querySelectorAll(".center").forEach(element => {
    element.addEventListener("click", () => {
        // متن المنت را دریافت کرده و به تابع کپی ارسال می‌کنیم
        const textToCopy = element.innerText || element.textContent;
        copyText(textToCopy);
    });
});

