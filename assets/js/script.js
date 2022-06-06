'use strict';
(() => {
  // element toggle function
  const elementToggleFunc = (elem) => elem.classList.toggle('active');

  // sidebar variables
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');

  // sidebar toggle functionality for mobile
  sidebarBtn.addEventListener('click', function () {
    elementToggleFunc(sidebar);
  });

  /* testimonials */
  // testimonials variables
  const testimonialsItem = document.querySelectorAll(
    '[data-testimonials-item]'
  );
  const modalContainer = document.querySelector('[data-modal-container]');
  const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
  const overlay = document.querySelector('[data-overlay]');

  // modal variable
  const modalImg = document.querySelector('[data-modal-img]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalText = document.querySelector('[data-modal-text]');

  // modal toggle function
  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  // add click event to all modal items
  for (const testItemEl of [...testimonialsItem]) {
    testItemEl.addEventListener('click', function () {
      modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
      modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
      modalTitle.innerHTML = this.querySelector(
        '[data-testimonials-title]'
      ).innerHTML;
      modalText.innerHTML = this.querySelector(
        '[data-testimonials-text]'
      ).innerHTML;

      testimonialsModalFunc();
    });
  }

  /* contact form */
  // contact form variables
  const form = document.querySelector('[data-form]');
  const formInputs = document.querySelectorAll('[data-form-input]');
  const formBtn = document.querySelector('[data-form-btn]');

  // add event to all form input field
  for (const formInput of [...formInputs]) {
    formInput.addEventListener('input', () => {
      // check form validation
      if (form.checkValidity()) formBtn.removeAttribute('disabled');
      else formBtn.setAttribute('disabled', '');
    });
  }

  /* page navigation */
  // page navigation variables
  const navigationLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  // add event to all nav link
  for (const link of [...navigationLinks]) {
    link.addEventListener('click', () => {
      [...navigationLinks].forEach((link) => link.classList.remove('active'));
      link.classList.add('active');

      pages.forEach((el) => el.classList.remove('active'));
      document
        .querySelector(`[data-page="${link.dataset.navLink}"]`)
        ?.classList.add('active');
      window.scrollTo(0, 0);
    });
  }
})();
