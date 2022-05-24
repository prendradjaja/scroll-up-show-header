const $ = s => document.querySelector(s);

$('h1').innerText = location.pathname + location.hash;
