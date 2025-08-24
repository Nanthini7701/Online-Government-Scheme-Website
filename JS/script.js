  // FAQ Toggle Script
    const faqButtons = document.querySelectorAll(".faq-question");
    faqButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const parentItem = btn.parentElement;
        parentItem.classList.toggle("active");
      });
    });