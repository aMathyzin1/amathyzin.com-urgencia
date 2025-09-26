const searchField = document.querySelector('[data-download-search]');
const cards = Array.from(document.querySelectorAll('[data-download-card]'));

function normalise(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function filterDownloads(query) {
  if (!query) {
    cards.forEach((card) => {
      card.hidden = false;
    });
    return;
  }

  const normalisedQuery = normalise(query);

  cards.forEach((card) => {
    const title = normalise(card.dataset.downloadCard || '');
    const tags = normalise(card.dataset.downloadTags || '');
    const shouldShow = title.includes(normalisedQuery) || tags.includes(normalisedQuery);
    card.hidden = !shouldShow;
  });
}

if (searchField) {
  searchField.addEventListener('input', (event) => {
    filterDownloads(event.target.value);
  });
}
