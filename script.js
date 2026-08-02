// رسالة ترحيب
console.log("ZONE STORE جاهز للعمل 🚀");

// تأثير عند الضغط على زر الطلب
const buttons = document.querySelectorAll(".game-card button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("شكراً لاختيارك ZONE STORE!\nسيتم تحويلك لوسيلة التواصل.");
        window.open("https://wa.me/201036296428", "_blank");
    });
});

// تمرير ناعم بين أقسام الصفحة
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// البحث عن الألعاب

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".game-card");

        cards.forEach(card => {

            let title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}
// إرسال طلب عبر واتساب

const orderButtons = document.querySelectorAll(".game-card button");

orderButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const gameName = button.parentElement.querySelector("h3").textContent;

        const phone = "201234567890"; // غيّر الرقم لرقم واتسابك

        const message = `مرحبًا، أريد طلب خدمة ${gameName}`;

        const url =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

});
// =========================
// زر الرجوع لأعلى الصفحة
// =========================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.left = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#00c853";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});