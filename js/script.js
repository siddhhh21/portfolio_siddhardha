// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Projects gallery: cursor-driven horizontal drift =====
const galleryWrap = document.getElementById('galleryWrap');
const galleryTrack = document.getElementById('galleryTrack');
const galleryCards = document.querySelectorAll('.gallery-card');

if (galleryWrap && galleryTrack) {
  const isTouch = window.matchMedia('(hover: none)').matches;

  if (!isTouch) {
    galleryWrap.addEventListener('mousemove', (e) => {
      const rect = galleryWrap.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width; // 0 (left) .. 1 (right)
      const maxShift = 70; // px the track drifts each direction
      const shift = (relX - 0.5) * maxShift * 2;
      // Move opposite to cursor so the strip feels like it's being "pushed" past
      galleryTrack.style.transform = `translateX(${-shift}px)`;
    });

    galleryWrap.addEventListener('mouseleave', () => {
      galleryTrack.style.transform = 'translateX(0)';
    });
  }

  // Touch devices: tap a card to bring it forward and show its details
  galleryCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      if (!isTouch) return;

      const alreadyActive = card.classList.contains('is-active');
      galleryCards.forEach(c => c.classList.remove('is-active'));
      if (!alreadyActive) card.classList.add('is-active');
    });
  });
}

// ===== Contact form: no backend by default, so fall back to a pre-filled email =====
// To wire this up to a real inbox without writing backend code, sign up at
// https://formspree.io (or similar) and point the form's "action" at your endpoint,
// then swap this handler for a normal fetch()/POST submit.
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  // Replace this address with your real email.
  window.location.href = `mailto:kvsaisiddhardha2117@gmail.com?subject=${subject}&body=${body}`;

  formNote.textContent = 'Opening your email app with this message pre-filled...';
});
