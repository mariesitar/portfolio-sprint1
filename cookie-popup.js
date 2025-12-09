document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("cookie-popup");
  const btn = document.getElementById("cookie-accept");

  if (!popup || !btn) return;

  const accepted = localStorage.getItem("cookieAccepted");

  if (accepted === "true") {
    popup.style.display = "none";
  }

  btn.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true");
    popup.style.display = "none";
  });
});
