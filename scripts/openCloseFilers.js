export function handleOpenCloseFilters() {
  const filters = document.querySelectorAll('.filter__selector');
  const filtersInputs = document.querySelectorAll('.filter__input');
  const closeFilterBtn = document.querySelectorAll('.filter__arrow');

  // Add click event listener to all filters
  filters.forEach((filter) => {
    filter.addEventListener('click', openFilter);
  });

  // Add click event listener to all close filter buttons
  closeFilterBtn.forEach((btn) => {
    btn.addEventListener('click', closeFilter);
  });

  function openFilter() {
    // Remove 'open' class from all filters
    filters.forEach((filter) => {
      filter.classList.remove('open');
    });

    // Set type and value of all filters inputs
    filtersInputs.forEach((input) => {
      input.type = 'button';
      input.value = input.dataset.value;
    });

    // Add 'open' class to current filter
    this.classList.add('open');

    // set type and value of current filter input
    const input = this.firstChild.nextElementSibling;
    input.type = 'text';
    input.value = '';
  }

  function closeFilter(e) {
    e.stopPropagation();
    // Remove 'open' class from all filters
    filters.forEach((filter) => {
      filter.classList.remove('open');
    });

    // Set type and value of all filters inputs
    filtersInputs.forEach((input) => {
      input.type = 'button';
      input.value = input.dataset.value;
    });
  }
}
