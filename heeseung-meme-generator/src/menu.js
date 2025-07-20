// src/menu.js
export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const h = document.createElement('h2');
    h.textContent = 'Our Menu';
    // …create list, images, etc.
    content.append(h /*, … */);
  }
  