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
    tag.dataset.color = 'blue';
    tagList.appendChild(tag);
    tag.addEventListener('click', removeTag);
  } else if (redTag) {
    const tag = document.createElement('div');
    tag.className = 'tags__item tags__item--red';
    tag.innerHTML = `
    <span class="tags__name">${clickedTagName}</span>
    <span class="tags__close"><img src="ressources/images/remove-icon.png" alt="cross icon to remove this tag"></span>
    `;
    tag.dataset.color = 'red';
    tagList.appendChild(tag);
    tag.addEventListener('click', removeTag);
  } else if (greenTag) {
    const tag = document.createElement('div');
    tag.className = 'tags__item tags__item--green';
    tag.innerHTML = `
    <span class="tags__name">${clickedTagName}</span>
    <span class="tags__close"><img src="ressources/images/remove-icon.png" alt="cross icon to remove this tag"></span>
    `;
    tag.dataset.color = 'green';
    tagList.appendChild(tag);
    tag.addEventListener('click', removeTag);
  } else return;

  this.remove();
}

export function removeTag() {
  const tag = this;
  const tagText = tag.firstElementChild.innerText;

  console.log(tag.childNodes[1]);

  const blueTag = 'tags__item--blue';
  const greenTag = 'tags__item--green';
  const redTag = 'tags__item--red';

  const blueList = document.querySelector('.filter__showList--blue');
  const greenList = document.querySelector('.filter__showList--green');
  const redList = document.querySelector('.filter__showList--red');

  const listOption = document.createElement('li');
  listOption.className = 'filter__listOption';
  listOption.innerText = tagText;
  listOption.addEventListener('click', addTag);

  if (tag.classList.contains(blueTag)) {
    blueList.appendChild(listOption);
  } else if (tag.classList.contains(greenTag)) {
    greenList.appendChild(listOption);
  } else if (tag.classList.contains(redTag)) {
    redList.appendChild(listOption);
  }

  tag.remove();
}
