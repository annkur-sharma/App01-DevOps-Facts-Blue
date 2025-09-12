# DevSecOps Facts Website
A Matrix-style, neon-themed static website that displays DevSecOps facts, current UTC date & time, and a persistent GUID per VM.
The website is purely static and can be deployed via git clone + cp -r. No additional backend or installation is required.

---

# Features
- Matrix-style neon background (cyberpunk / hacker vibe).
- Static container box for content.
- Dynamic facts display with typewriter animation.
- Facts rotate automatically every 10 seconds.
- Current UTC Date & Time (updated every second).
- Session ID (GUID) persists per VM and identifies the same instance.
- Static deployment: Works on any VM, container, or pod.

---

# Deployment

## Clone the repository
``` bash
git clone https://github.com/annkur-sharma/AppCode01-DevSecOps-Facts.git
```

## Copy files to your web server root (example for Nginx /var/www/html):
``` bash
sudo rm -r /var/www/html/*
sudo cp -r AppCode01-DevSecOps-Facts/* /var/www/html/
```

## Generate a unique GUID for this VM (optional but recommended):
``` bash
uuidgen | sudo tee /var/www/html/guid.txt
```

## Visit your site via public IP or any domain pointing to the server.
*Example: http://<public-ip>*
*Example: http://<public-domain>*

---

# Notes
- Static identifier per VM: Each VM should have a unique guid.txt.
- Facts rotation: 15 DevSecOps facts rotate automatically every 10 seconds.
- Static deployment: Works on any server without Node, PHP, or database.

---

# Customization
- Add or change facts: Edit the facts array in script.js.
- Change colors / theme: Edit style.css for neon colors, fonts, or box styles.
- Adjust container size: Modify .container width/height in style.css.