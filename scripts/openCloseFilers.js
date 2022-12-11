export function handleOpenCloseFilters() {
  const filters = document.querySelectorAll('.filter__selector');
  const filtersInputs = document.querySelectorAll('.filter__input');

  filters[0].addEventListener('click', openCloseFilters);
  filters[1].addEventListener('click', openCloseFilters);
  filters[2].addEventListener('click', openCloseFilters);

  function openCloseFilters() {
    if (this.classList.contains('open')) {
      this.classList.remove('open');
      filters.forEach((filter) => filter.classList.remove('open'));
      filtersInputs.forEach((input) => {
        input.type = 'button';
        input.value = input.dataset.value;
      });
    } else {
      filters.forEach((filter) => filter.classList.remove('open'));

      filtersInputs.forEach((input) => {
        input.type = 'button';
        input.value = input.dataset.value;
      });

      this.classList.add('open');

      const input = this.firstChild.nextElementSibling;
      input.type = 'text';
      input.value = '';
    }
  }
}
