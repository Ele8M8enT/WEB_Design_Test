const header = document.querySelector("header");

function navscroll() {
  document.body.scroll > 1 || document.documentElement.scrollTop > 1
    ? (
      (header.style.backgroundColor = "red")
    )
    : (
      (header.style.backgroundColor = 'transparent')
    );
}

window.addEventListener('scroll' , navscroll);