document.getElementById('year').textContent = new Date().getFullYear();

const pricingButtons = document.querySelectorAll('.toggle-btn');
const priceEls = document.querySelectorAll('.price');

pricingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    pricingButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    const billing = button.dataset.billing;

    priceEls.forEach((el) => {
      const value = el.dataset[billing];
      if (value) {
        el.textContent = value;
      }
    });
  });
});
