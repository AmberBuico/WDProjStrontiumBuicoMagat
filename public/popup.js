document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("requiredPopup");
  if (!popup) return;

  const stepName = document.getElementById("step-name");
  const stepPref = document.getElementById("step-preference");
  const stepDone = document.getElementById("step-done");

  const nameInput = document.getElementById("userName");
  const nextBtn = document.getElementById("toPreference");
  const saveBtn = document.getElementById("savePreference");
  const closeBtn = document.getElementById("closePopup");
  const finalMessage = document.getElementById("finalMessage");

 
  if (!sessionStorage.getItem("popupShownThisSession")) {
      popup.style.display = "flex";
  }

  nextBtn.onclick = () => {
    const name = nameInput.value.trim();
    if (name === "") {
      alert("Please enter your name!");
      return;
    }
    sessionStorage.setItem("currentActiveUser", name);
    
    stepName.style.display = "none";
    stepPref.style.display = "block";
  };

saveBtn.onclick = () => {
  const selected = document.querySelector('input[name="preference"]:checked');
  if (!selected) {
    alert("Please choose a tambayan!");
    return;
  }

  const currentName = sessionStorage.getItem("currentActiveUser") || "Guest";
  const currentPref = selected.value;

  let visitors = JSON.parse(localStorage.getItem("azraVisitors")) || [];

  visitors.push({
    name: currentName,
    preference: currentPref,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("azraVisitors", JSON.stringify(visitors));
  localStorage.setItem("azraUserName", currentName);
  localStorage.setItem("tambayanPreference", currentPref);
  sessionStorage.setItem("popupShownThisSession", "true");

  // ✅ REDIRECT LOGIC
  if (currentPref === "aircon") {
    window.location.href = "actambays.html";

  } else if (currentPref === "nature") {
    window.location.href = "naturetambays.html";

  } else if (currentPref === "student-central") {
    window.location.href = "studentcentral.html";

  } else if (currentPref === "surprise") {
    const options = [
      "actambays.html",
      "naturetambays.html",
      "sctambays.html",
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    window.location.href = options[randomIndex];
  }
};

  closeBtn.onclick = () => {
    popup.style.display = "none";
  };
});