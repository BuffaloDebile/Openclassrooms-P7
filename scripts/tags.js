export function addTag() {
  const tagList = document.querySelector('.tags');
  const clickedTagName = this.innerText;

  const blueTag = this.parentElement.classList.contains(
    'filter__showList--blue',
  );
  const redTag = this.parentElement.classList.contains('filter__showList--red');
  const greenTag = this.parentElement.classList.contains(
    'filter__showList--green',
  );

  if (blueTag) {
    const tag = document.createElement('div');
    tag.className = 'tags__item tags__item--blue';
    tag.innerHTML = `
    <span class="tags__name">${clickedTagName}</span>
    <span class="tags__close"><img src="ressources/images/remove-icon.png" alt="cross icon to remove this tag"></span>
    `;
    tagList.appendChild(tag);
    tag.addEventListener('click', removeTag);
  } else if (redTag) {
    const tag = document.createElement('div');
    tag.className = 'tags__item tags__item--red';
    tag.innerHTML = `
    <span class="tags__name">${clickedTagName}</span>
    <span class="tags__close"><img src="ressources/images/remove-icon.png" alt="cross icon to remove this tag"></span>
    `;
    tagList.appendChild(tag);
    tag.addEventListener('click', removeTag);
  } else if (greenTag) {
    const tag = document.createElement('div');
    tag.className = 'tags__item tags__item--green';
    tag.innerHTML = `
    <span class="tags__name">${clickedTagName}</span>
    <span class="tags__close"><img src="ressources/images/remove-icon.png" alt="cross icon to remove this tag"></span>
    `;
    tagList.appendChild(tag);
    tag.addEventListener('click', removeTag);
  } else return;

  this.remove();
}

export function removeTag() {
  const tag = this;
  tag.remove();
}
