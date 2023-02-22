// GET A RANDOM FOOD IMAGE

let cachedFoodImage;

export async function getFoodImage() {
  if (cachedFoodImage) {
    return cachedFoodImage;
  }

  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php',
    );
    const data = await response.json();
    const imageUrl = data.meals[0].strMealThumb;
    cachedFoodImage = imageUrl; // Cache the image URL
    return imageUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// CAPITALISE THE FIRST LETTER OF WORDs
export function capitalizeWords(sentence) {
  sentence = sentence.toLowerCase();
  let words = sentence.split(' ');
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(' ');
}
