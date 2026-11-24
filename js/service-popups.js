/* Homepage-only popup behavior; does not alter the existing modal handlers. */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const modalIds = ["journalModal", "homeAnnouncementModal"];
    const modals = modalIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    function openModal(modal) {
      if (!modal) return;
      modal.hidden = false;
      document.body.classList.add("ig-service-modal-open");
      document.body.style.overflow = "hidden";
    }

    function closeModal(modal) {
      if (!modal) return;
      modal.hidden = true;
      const anotherOpen = modals.some((item) => !item.hidden);
      if (!anotherOpen) {
        document.body.classList.remove("ig-service-modal-open");
        document.body.style.overflow = "";
      }
    }

    document.querySelectorAll(".journal-details-btn").forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        openModal(document.getElementById("journalModal"));
      });
    });

    modals.forEach((modal) => {
      modal.querySelectorAll("[data-modal-close]").forEach((control) => {
        control.addEventListener("click", function () {
          closeModal(modal);
        });
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        modals.forEach((modal) => {
          if (!modal.hidden) closeModal(modal);
        });
      }
    });

    const announcement = document.getElementById("homeAnnouncementModal");
    if (announcement) {
      // main.js hides the preloader after 650ms with a 450ms fade.
      window.setTimeout(function () {
        if (document.visibilityState === "visible") openModal(announcement);
      }, 1250);
    }
  });
})();
