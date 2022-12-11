function createRecipeCard() {
  const card = document.createElement('article');
  card.className = 'card';

  card.innerHTML = `
    <a>
    <div class="card__img-container">
      <img src="https://source.unsplash.com/320x180/?food" alt="card image">
    </div>
    <div class="card__body">
      <div class="card__head">
        <h2 class="card__title">Smoothie tropical 🥤</h2>
        <span class="card__time"><img src="ressources/images/time.svg" alt="card time clock logo">
          <p class="card__minutes">20 min</p>
        </span>
      </div>
      <div class="card__content">
        <ul class="card__ingredientsList">
          <li class="card__ingredient">
            <span class="card__ingredient--bold">Pain de mie</span> 8 tranches
          </li>
          <li class="card__ingredient">
            <span class="card__ingredient--bold">Blanc de dinde</span> 4 tranches
          </li>
          <li class="card__ingredient">
            <span class="card__ingredient--bold">Emmental</span> 8 tranches
          </li>
          <li class="card__ingredient">
            <span class="card__ingredient--bold">Gruyère</span> 100 grammes
          </li>
          <li class="card__ingredient">
            <span class="card__ingredient--bold">Lait</span> 5 cl
          </li>
          <li class="card__ingredient">
            <span class="card__ingredient--bold">Noix de muscade</span> 1 pincées
          </li>
        </ul>
        <p class="card__description">
          Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout
          dans le blender. Ajoutez une cuillère à soupe de juste du citron 🍋 ainsi que les glaçons. Ajoutez
          quelques feuilles de menthe pour plus de fraîcheur. Mixez le tout. Servir et déguster;
        </p>
      </div>
    </div>
  </a>
    `;
}
