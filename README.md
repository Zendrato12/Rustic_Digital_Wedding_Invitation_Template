# 🌿 Rustic Digital Wedding Invitation Template

Elegant & responsive **Digital Wedding Invitation** template built with **HTML5 + Tailwind CSS**.  
Perfect for couples or developers who want to create a modern, shareable, and mobile-friendly wedding website.

---

## ✨ Features
- 🎉 **Hero Section** with couple names & date  
- ⏰ **Countdown Timer** to wedding day  
- 💕 **Love Story Timeline**  
- 🖼️ **Photo Gallery** with slider  
- 📍 **Venue & Google Maps Embed**  
- 📝 **RSVP Form** (frontend only, easy integration with Formspree/Google Forms)  
- 📱 **Mobile Responsive** design (optimized for all devices)  
- 🎨 **Rustic Theme**: natural earthy palette (olive green, warm brown, ivory) with floral accents  

---

## 📂 Folder Structure
digital-wedding-invitation-rustic/

│── index.html

│── css/

│ └── style.css

│── js/

│ └── script.js

│── assets/

│ ├── images/

│ └── icons/

│── README.md

---


**Quick Deploy (Netlify):**
1. Create a free [Netlify](https://app.netlify.com) account.  
2. Upload the entire project folder (`.zip`) or connect GitHub repo.  
3. Netlify will generate a live URL instantly.  

---

## ⚙️ Customization
1. **Change Couple Names & Date**  
   Open `index.html` → edit text inside hero section.  

2. **Update Countdown Date**  
   In `js/script.js` find the countdown date variable:  
   ```js
   const weddingDate = new Date("Sep 15, 2025 00:00:00").getTime();
Replace Gallery Photos
Put your images in assets/images/ and update <img> tags in gallery section.

Edit Map Location
Replace Google Maps iframe URL in index.html with your venue location.

Enable RSVP Form
Use Formspree (recommended):

html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message"></textarea>
  <button type="submit">RSVP</button>
</form>

🖼️ Demo

🌐 Live Preview: Rustic Wedding Invitation

📜 License
This template is sold as a digital product.
You are allowed to use & customize it for personal or client projects,
but resale or redistribution of the template itself is not permitted.

👤 Author
Developed by ADVENT Digital

🌐 Lynk.id Store https://lynk.id/sipade12 
