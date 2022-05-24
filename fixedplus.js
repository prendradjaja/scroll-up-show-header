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
  $('.header').classList.remove('hidden');
}

function onScrollDown() {
  // if (document.body.scrollTop > 30) { // TODO add an option to enable/disable this check?
    $('.header').classList.add('hidden');
  // }
}
