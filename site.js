const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const quoteForm = document.querySelector("#quoteForm");

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const subject = encodeURIComponent("Corporate gifting quote request");
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\n` +
      `Email: ${data.get("email") || ""}\n` +
      `Occasion: ${data.get("occasion") || ""}\n` +
      `Quantity and budget: ${data.get("budget") || ""}\n\n` +
      `Message:\n${data.get("message") || ""}`
    );
    window.location.href = `mailto:hello@aurumgifts.com?subject=${subject}&body=${body}`;
  });
}
