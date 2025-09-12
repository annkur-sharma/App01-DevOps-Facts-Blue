// Matrix effect background
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤャユュヨョラリルレロワヰヱヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#39ff14"; // Neon green
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 35);

// DevSecOps facts (15 total)
const facts = [
  "DevSecOps integrates security into every stage of DevOps.",
  "Shift-left security means catching issues early in development.",
  "Automated security testing improves speed and reliability.",
  "Secrets should never be hardcoded in code repositories.",
  "CI/CD pipelines must include vulnerability scanning.",
  "Zero Trust architecture strengthens DevSecOps practices.",
  "Container images should always be scanned for vulnerabilities.",
  "Infrastructure as Code needs security checks too.",
  "Monitoring security in production is as important as pre-deployment.",
  "DevSecOps promotes shared responsibility for security.",
  "Cloud misconfigurations are a leading cause of breaches.",
  "Regular dependency scanning prevents supply chain attacks.",
  "Security training for developers reduces vulnerabilities.",
  "Immutable infrastructure makes rollbacks faster and safer.",
  "DevSecOps is about culture, not just tools."
];

let factIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = "";
const factElement = document.getElementById("fact-text");

function typeWriter() {
  const fact = facts[factIndex];

  if (!isDeleting && charIndex <= fact.length) {
    currentText = fact.substring(0, charIndex++);
    factElement.textContent = currentText;
    setTimeout(typeWriter, 60);
  } else if (!isDeleting && charIndex > fact.length) {
    // pause for 10 seconds before deleting
    setTimeout(() => { isDeleting = true; typeWriter(); }, 10000);
  } else if (isDeleting && charIndex >= 0) {
    currentText = fact.substring(0, charIndex--);
    factElement.textContent = currentText;
    setTimeout(typeWriter, 30);
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    factIndex = (factIndex + 1) % facts.length;
    setTimeout(typeWriter, 200);
  }
}

// Show current date & time
function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent =
    "Date & Time (UTC): " + now.toISOString().replace("T", " ").split(".")[0];
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Load GUID
fetch("guid.txt")
  .then(response => response.text())
  .then(guid => {
    document.getElementById("guid").textContent = "Session ID: " + guid.trim();
  })
  .catch(() => {
    document.getElementById("guid").textContent = "Session ID: unavailable";
  });

// Start typewriter
typeWriter();
