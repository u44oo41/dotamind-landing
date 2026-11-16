// DotaMind – Landing Page interactions
(function () {
    'use strict';

    // Sticky header shadow
    var header = document.getElementById('siteHeader');
    function onScroll() {
        if (window.scrollY > 8) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile nav
    var navToggle = document.getElementById('navToggle');
    var mainNav = document.getElementById('mainNav');
    navToggle.addEventListener('click', function () {
        mainNav.classList.toggle('open');
        navToggle.classList.toggle('active');
    });
    mainNav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            mainNav.classList.remove('open');
            navToggle.classList.remove('active');
        }
    });

    // Scroll reveal
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        reveals.forEach(function (el) { observer.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('visible'); });
    }

    // CTA placeholder – hook up your checkout / purchase link here
    var ctaBuy = document.getElementById('ctaBuy');
    ctaBuy.addEventListener('click', function (e) {
        e.preventDefault();
        // TODO: replace with your real purchase URL
        alert('Hier wird dein Abo-Kauf verknüpft. Trage deinen Bestelllink ein.');
    });
})();
