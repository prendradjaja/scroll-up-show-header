const $ = s => document.querySelector(s);

let lastScrollTop = 0;

let useCutoff = false;

$('h1').innerText = location.pathname + location.hash;

if (location.hash === '#use-cutoff') {
  $('h1').innerText += ' *';
  useCutoff = true;
}

document.addEventListener('scroll', () => {
  if (document.body.scrollTop < lastScrollTop) {
    onScrollUp();
  } else if (document.body.scrollTop > lastScrollTop) {
    onScrollDown();
  }
  lastScrollTop = document.body.scrollTop;
});

function onScrollUp() {
  $('.header').classList.remove('hidden');
}

function onScrollDown() {
  if (!useCutoff) {
    $('.header').classList.add('hidden');
  } else {
    if (document.body.scrollTop > 30) {
      $('.header').classList.add('hidden');
    }
  }
}
