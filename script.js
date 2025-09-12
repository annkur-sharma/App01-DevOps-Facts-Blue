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

// Typewriter effect
let factIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const factElement = document.getElementById("fact-text");

function typeWriter() {
  if (!isDeleting && charIndex <= facts[factIndex].length) {
    currentText = facts[factIndex].substring(0, charIndex++);
    factElement.textContent = currentText;
    setTimeout(typeWriter, 60);
  } else if (isDeleting && charIndex >= 0) {
    currentText = facts[factIndex].substring(0, charIndex--);
    factElement.textContent = currentText;
    setTimeout(typeWriter, 30);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeWriter, 2000); // pause before deleting
    } else {
      isDeleting = false;
      factIndex = (factIndex + 1) % facts.length;
      setTimeout(typeWriter, 200);
    }
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