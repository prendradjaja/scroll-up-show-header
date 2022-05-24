const $ = s => document.querySelector(s);

document.addEventListener('DOMContentLoaded', () => {
  $('h1').innerText = location.pathname + location.hash;
});
