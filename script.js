// ACF Crane Fabricators enquiry form
// Customer's default email app opens with the enquiry pre-filled.
const BUSINESS_EMAIL = "acfcranefabricators21@gmail.com";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("enquiryForm").addEventListener("submit", event => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const subject = "Website Enquiry — " + data.get("name");
  const body = [
    "NEW WEBSITE ENQUIRY — ACF CRANE FABRICATORS",
    "",
    "Name: " + data.get("name"),
    "Phone: " + data.get("phone"),
    "Requirement: " + data.get("service"),
    "",
    "Project details:",
    data.get("message") || "Not provided",
    "",
    "Please contact the customer using the phone number above."
  ].join("\n");

  const mailto = "mailto:" + BUSINESS_EMAIL
    + "?subject=" + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(body);

  window.location.href = mailto;
});
