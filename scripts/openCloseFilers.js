export function handleOpenCloseFilters() {
  const filters = document.querySelectorAll('.filter__selector');

  filters[0].addEventListener('click', openCloseFilters);
  filters[1].addEventListener('click', openCloseFilters);
  filters[2].addEventListener('click', openCloseFilters);

  function openCloseFilters() {
    if (this.classList.contains('open')) {
      this.classList.remove('open');
      filters.forEach((filter) => filter.classList.remove('open'));

      const input = this.firstChild.nextElementSibling;
      input.type = 'button';
      input.value = input.dataset.value;
    } else {
      filters.forEach((filter) => filter.classList.remove('open'));
      this.classList.add('open');

      const input = this.firstChild.nextElementSibling;
      input.type = 'text';
      input.value = '';
    }
  }
}
