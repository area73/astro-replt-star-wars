const BASE_URL = 'https://swapi.dev/api';

/**
 * Fetch data from a SWAPI endpoint with error handling
 * @param {string} endpoint - The API endpoint
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>} The API response data
 */
async function fetchApi(endpoint, page = 1) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/?page=${page}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('The requested resource was not found.');
      }
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    
    if (error.message.includes('fetch')) {
      throw new Error('Unable to connect to the Star Wars API. Please check your internet connection and try again.');
    }
    
    throw error;
  }
}

/**
 * Fetch Star Wars characters
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>} Character data including results array and count
 */
export async function fetchCharacters(page = 1) {
  return fetchApi('people', page);
}

/**
 * Fetch Star Wars planets
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>} Planet data including results array and count
 */
export async function fetchPlanets(page = 1) {
  return fetchApi('planets', page);
}

/**
 * Fetch Star Wars starships
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>} Starship data including results array and count
 */
export async function fetchStarships(page = 1) {
  return fetchApi('starships', page);
}

/**
 * Fetch a specific resource by URL
 * @param {string} url - Full URL to the resource
 * @returns {Promise<Object>} The resource data
 */
export async function fetchResourceByUrl(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching resource:', error);
    throw error;
  }
}
