(() => {
  const faqItems = document.querySelectorAll(".accordion__container");

  faqItems.forEach((item) => {
    const question = item.querySelector(".accordion__question");

    question.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("opened");
        }
      });

      item.classList.toggle("opened");
    });
  });
})();
