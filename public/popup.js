document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("requiredPopup");
  const form = document.getElementById("popupForm");

  if (!popup || !form) return;

  const savedPreference = localStorage.getItem("tambayanPreference");

  if (!savedPreference) {
    popup.style.display = "flex";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const selected = document.querySelector(
      'input[name="preference"]:checked'
    );

    if (!selected) return;

    localStorage.setItem("tambayanPreference", selected.value);
    popup.style.display = "none";
  });

});