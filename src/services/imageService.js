/**
 * Generate image URLs for Star Wars resources
 * 
 * Since SWAPI doesn't provide images directly, we'll use external sources
 * for imagery based on resource IDs extracted from SWAPI URLs.
 */

/**
 * Extract the ID from a SWAPI URL
 * @param {string} url - SWAPI URL (e.g., "https://swapi.dev/api/people/1/")
 * @returns {string} - The extracted ID
 */
export function extractIdFromUrl(url) {
  // Extract the ID from the end of the URL
  return url.split('/').filter(Boolean).pop();
}

/**
 * Get character image URL from Star Wars Visual Guide
 * @param {string} characterId - Character ID from SWAPI
 * @returns {string} - The image URL
 */
export function getCharacterImageUrl(characterId) {
  return `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
}

/**
 * Get planet image URL
 * @param {string} planetId - Planet ID from SWAPI
 * @returns {string} - The image URL
 */
export function getPlanetImageUrl(planetId) {
  return `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;
}

/**
 * Get starship image URL
 * @param {string} starshipId - Starship ID from SWAPI
 * @returns {string} - The image URL
 */
export function getStarshipImageUrl(starshipId) {
  return `https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`;
}

/**
 * Get a placeholder image in case the main image fails to load
 * @param {string} type - The type of resource (character, planet, starship)
 * @returns {string} - The placeholder image URL
 */
export function getPlaceholderImage(type) {
  const placeholders = {
    character: 'https://starwars-visualguide.com/assets/img/placeholder.jpg',
    planet: 'https://starwars-visualguide.com/assets/img/placeholder.jpg',
    starship: 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
  };
  
  return placeholders[type] || placeholders.character;
}