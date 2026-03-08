   const s1 = document.getElementById('section1');
    const s2 = document.getElementById('section2');

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;

      // Hero layers
      const l1 = document.querySelector('.layer-1');
      const l2 = document.querySelector('.layer-2');
      const l3 = document.querySelector('.layer-3');
      if (l1) l1.style.top = (0 - scrolled * 0.25) + 'px';
      if (l2) l2.style.top = (0 - scrolled * 0.5)  + 'px';
      if (l3) l3.style.top = (0 - scrolled * 0.75) + 'px';

      // Section 1 images — top is relative to .content (position:relative)
      // so we subtract section1's offsetTop to get scroll within that section
      const s1Scroll = scrolled - s1.offsetTop;
      [
        ['.deco-1', 60,  0.8],
        ['.deco-2', 20,  0.6],
        ['.deco-3', 260, 0.4],
        ['.deco-4', 200, 0.5],
        ['.deco-5', 420, 0.7],
        ['.deco-6', 380, 0.7],
      ].forEach(([sel, base, speed]) => {
        const el = document.querySelector(sel);
        if (el) el.style.top = (base - s1Scroll * speed) + 'px';
      });

      // Section 2 images — same fix: subtract section2's offsetTop
      const s2Scroll = scrolled - s2.offsetTop;
      [
        ['.deco-r1', 60,  0.5],
        ['.deco-r2', 20,  0.3],
        ['.deco-r3', 260, 0.6],
        ['.deco-r4', 200, 0.4],
        ['.deco-r5', 420, 0.5],
        ['.deco-r6', 380, 0.7],
      ].forEach(([sel, base, speed]) => {
        const el = document.querySelector(sel);
        if (el) el.style.top = (base - s2Scroll * speed) + 'px';
      });
    });