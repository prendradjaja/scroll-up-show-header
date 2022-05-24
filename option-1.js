const $ = s => document.querySelector(s);

let lastScrollTop = 0;

$('h1').innerText = location.pathname + location.hash;

document.addEventListener('scroll', () => {
  if (document.body.scrollTop < lastScrollTop) {
    onScrollUp();
  } else if (document.body.scrollTop > lastScrollTop) {
    onScrollDown();
  }
  lastScrollTop = document.body.scrollTop;
});

function onScrollUp() {
  if (document.body.scrollTop > 30) {
    $('.header').classList.remove('hidden');
  }
}

function onScrollDown() {
  $('.header').classList.add('hidden');
}
