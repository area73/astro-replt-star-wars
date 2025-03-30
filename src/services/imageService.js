/**
 * Generate image URLs for Star Wars resources
 * 
 * Since SWAPI doesn't provide images directly, we'll use the reliable
 * Star Wars Image API to fetch images based on resource IDs.
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
 * Get character image URL
 * @param {string} characterId - Character ID from SWAPI
 * @returns {string} - The image URL
 */
export function getCharacterImageUrl(characterId) {
  return `https://cdn.jsdelivr.net/gh/akabab/starwars-api@0.2.1/api/id/${characterId}.json`;
}

/**
 * Map of character IDs to their SWAPI IDs for the alternative image API
 * This is needed because the alternative API uses different IDs
 */
export const characterIdMap = {
  "1": "1", // Luke Skywalker
  "2": "2", // C-3PO
  "3": "3", // R2-D2
  "4": "4", // Darth Vader
  "5": "5", // Leia Organa
  "6": "81", // Owen Lars
  "7": "82", // Beru Whitesun lars
  "8": "83", // R5-D4
  "9": "84", // Biggs Darklighter
  "10": "85", // Obi-Wan Kenobi
  "11": "86", // Anakin Skywalker
  "12": "35", // Wilhuff Tarkin
  "13": "10", // Chewbacca
  "14": "14", // Han Solo
  "15": "22", // Greedo
  "16": "87", // Jabba Desilijic Tiure
  "18": "88", // Wedge Antilles
  "19": "89", // Jek Tono Porkins
  "20": "90", // Yoda
  "21": "91", // Palpatine
  "22": "92", // Boba Fett
  "23": "93", // IG-88
  "24": "94", // Bossk
  "25": "95", // Lando Calrissian
  "26": "96", // Lobot
};

/**
 * Get planet image URL
 * @param {string} planetId - Planet ID from SWAPI
 * @returns {string} - A placeholder image URL since reliable planet images are harder to find
 */
export function getPlanetImageUrl(planetId) {
  return `https://placehold.co/600x400/4a4e69/fff?text=Planet+${planetId}`;
}

/**
 * Get starship image URL
 * @param {string} starshipId - Starship ID from SWAPI
 * @returns {string} - A placeholder image URL since reliable starship images are harder to find
 */
export function getStarshipImageUrl(starshipId) {
  return `https://placehold.co/600x400/22223b/fff?text=Starship+${starshipId}`;
}

/**
 * Get a placeholder image in case the main image fails to load
 * @returns {string} - The placeholder image URL
 */
export function getPlaceholderImage() {
  return 'https://placehold.co/600x400/1a1a2e/fff?text=Star+Wars';
}