// src/contact.js
export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const h = document.createElement('h2');
    h.textContent = 'Contact Us';
    // …create form, address info, etc.
    content.append(h /*, … */);
  }
  