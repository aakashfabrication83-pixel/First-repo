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
  const customerName = data.get("name").trim();
  const phone = (data.get("phone") || "").trim();
  const subject = "Website Enquiry — " + customerName;
  const body = [
    "NEW WEBSITE ENQUIRY — ACF CRANE FABRICATORS",
    "",
    "Name: " + customerName,
    "Phone: " + (phone || "Not provided"),
    "Requirement: " + data.get("service"),
    "",
    "Project details:",
    (data.get("message") || "").trim() || "Not provided",
    "",
    "Please contact the customer using the details provided."
  ].join("\n");

  const mailto = "mailto:" + BUSINESS_EMAIL
    + "?subject=" + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(body);

  window.location.href = mailto;
});
