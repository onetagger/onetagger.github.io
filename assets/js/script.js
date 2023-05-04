(function () {
  'use strict';
  // constants
  const sections = [...document.querySelectorAll('section[id]')];
  const menuLinks = [...document.querySelectorAll('.nav-item a')];
  const navoffset = document.getElementById('mainNav').clientHeight;
  const navToggle = document.querySelector('.navbar-toggler');
  // Scrollspy handler
  const scrollHandle = () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    menuLinks.forEach((link) => link.classList.remove('active'));
    sections.forEach((section) => {
      const offset = section.offsetTop - navoffset;
      if (offset <= scrollPosition) {
        menuLinks.forEach((link) => link.classList.remove('active'));
        const target = document.querySelector(`a[href="#${section.id}"]`);
        if (!target.hash) return;
        target.classList.add('active');
        if (target.parentElement.classList.contains('dropdown-menu')) {
          target.parentElement.parentElement.firstChild.classList.add('active');
        }
        if (document.querySelector('#navbarResponsive').classList.contains('show')) navToggle.click();
      }
    });
  };

  // event listeners
  document.addEventListener('scroll', scrollHandle, false);
  document.addEventListener('resize', scrollHandle, false);
  document.addEventListener('readystatechange', scrollHandle, false);
})();

function scrollTo(){document.querySelectorAll(".scroll").forEach(t=>t.onclick=scrollAnchors)}function scrollAnchors(t,o=null){const e=t=>Math.floor(t.getBoundingClientRect().top);t.preventDefault();var n=o?o.getAttribute("href"):this.getAttribute("href");const r=document.querySelector(n);if(!r)return;const c=e(r);window.scrollBy({top:c,left:0,behavior:"smooth"});const l=setInterval((function(){const t=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;(0===e(r)||t)&&(r.tabIndex="-1",r.focus(),window.history.pushState("","",n),clearInterval(l))}),100)}scrollTo();