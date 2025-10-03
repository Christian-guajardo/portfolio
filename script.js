// Apparition des éléments de la timeline au scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function showTimelineItems() {
  const trigger = window.innerHeight * 0.85;
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < trigger) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', showTimelineItems);
window.addEventListener('load', showTimelineItems);
