/**
 * Generate image URLs for Star Wars resources
 * 
 * Since SWAPI doesn't provide images directly, we use alternative
 * sources to find character images.
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
 * Character image mapping based on SWAPI IDs
 * These image URLs are stable and reliable sources for Star Wars character images
 */
export const characterImages = {
  "1": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg", // Luke Skywalker
  "2": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png", // C-3PO
  "3": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png", // R2-D2
  "4": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg", // Darth Vader
  "5": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png", // Leia Organa
  "6": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png", // Owen Lars
  "7": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png", // Beru Whitesun Lars
  "8": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png", // R5-D4
  "9": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png", // Biggs Darklighter
  "10": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg", // Obi-Wan Kenobi
  "11": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png", // Anakin Skywalker
  "12": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Wilhuff_Tarkin.jpg", // Wilhuff Tarkin
  "13": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png", // Chewbacca
  "14": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png", // Han Solo
  "15": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg", // Greedo
  "16": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png", // Jabba Desilijic Tiure
  "18": "https://vignette.wikia.nocookie.net/starwars/images/8/80/Wedge_TROS.jpg", // Wedge Antilles
  "19": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png", // Jek Porkins
  "20": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png", // Yoda
  "21": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png", // Palpatine
  "22": "https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png", // Boba Fett
  "23": "https://vignette.wikia.nocookie.net/starwars/images/f/f2/IG-88.png", // IG-88
  "24": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Bossk.png", // Bossk
  "25": "https://vignette.wikia.nocookie.net/starwars/images/8/8f/Lando_TROS.jpg", // Lando Calrissian
  "26": "https://vignette.wikia.nocookie.net/starwars/images/c/c9/Lobot_SWDR.png", // Lobot
  "27": "https://vignette.wikia.nocookie.net/starwars/images/3/33/Ackbar_HS.jpg", // Ackbar
  "28": "https://vignette.wikia.nocookie.net/starwars/images/9/96/SWE_Mon_Mothma.jpg", // Mon Mothma
  "29": "https://vignette.wikia.nocookie.net/starwars/images/4/4c/Arvel-crynyd.jpg", // Arvel Crynyd
  "30": "https://vignette.wikia.nocookie.net/starwars/images/5/51/Wicket_RotJ.png", // Wicket W. Warrick
  "31": "https://vignette.wikia.nocookie.net/starwars/images/f/fa/Nien_Nunb_on_Tantive_IV.png", // Nien Nunb
};

/**
 * Get character image URL based on SWAPI ID
 * @param {string} characterId - Character ID from SWAPI
 * @returns {string} - The image URL
 */
export function getCharacterImageUrl(characterId) {
  return characterImages[characterId] || getPlaceholderImage('character');
}

/**
 * Planet image mapping based on SWAPI IDs
 * These image URLs are stable and reliable sources for Star Wars planet images
 */
export const planetImages = {
  "1": "https://vignette.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png", // Tatooine
  "2": "https://vignette.wikia.nocookie.net/starwars/images/f/f6/Alderaan.jpg", // Alderaan
  "3": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Yavin_4_SWCT.png", // Yavin IV
  "4": "https://vignette.wikia.nocookie.net/starwars/images/8/8d/Hoth_SWCT.png", // Hoth
  "5": "https://vignette.wikia.nocookie.net/starwars/images/1/1c/Dagobah.jpg", // Dagobah
  "6": "https://vignette.wikia.nocookie.net/starwars/images/2/2c/Bespin_SWCT.png", // Bespin
  "7": "https://vignette.wikia.nocookie.net/starwars/images/5/50/Endor_SWCT.png", // Endor
  "8": "https://vignette.wikia.nocookie.net/starwars/images/f/f6/Naboo_planet.png", // Naboo
  "9": "https://vignette.wikia.nocookie.net/starwars/images/9/9b/Coruscant_SWCT.png", // Coruscant
  "10": "https://vignette.wikia.nocookie.net/starwars/images/7/7b/Kamino-DB.png", // Kamino
  "11": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Geonosis_AotC.png", // Geonosis
  "12": "https://vignette.wikia.nocookie.net/starwars/images/8/84/UtapauRotS.png", // Utapau
  "13": "https://vignette.wikia.nocookie.net/starwars/images/a/a5/Mustafar_DB.png", // Mustafar
  "14": "https://vignette.wikia.nocookie.net/starwars/images/c/c8/Kashyyyk-SWFB.png", // Kashyyyk
  "15": "https://vignette.wikia.nocookie.net/starwars/images/6/6d/Polis-massa.jpg", // Polis Massa
  "16": "https://vignette.wikia.nocookie.net/starwars/images/d/d7/Mygeeto_GH.jpg", // Mygeeto
  "17": "https://vignette.wikia.nocookie.net/starwars/images/9/9e/Felucia-SWCT.png", // Felucia
  "18": "https://vignette.wikia.nocookie.net/starwars/images/4/46/Cato_Neimoidia_FDNP.png", // Cato Neimoidia
  "19": "https://vignette.wikia.nocookie.net/starwars/images/5/52/Saleucami-TD.png", // Saleucami
  "20": "https://vignette.wikia.nocookie.net/starwars/images/1/19/Stewjon.jpg", // Stewjon
  "21": "https://vignette.wikia.nocookie.net/starwars/images/2/20/Eriadu.jpg", // Eriadu
  "22": "https://vignette.wikia.nocookie.net/starwars/images/f/f1/Corellia_SOF.png", // Corellia
};

/**
 * Starship image mapping based on SWAPI IDs
 * These image URLs are stable and reliable sources for Star Wars starship images
 */
export const starshipImages = {
  "2": "https://vignette.wikia.nocookie.net/starwars/images/7/70/SW_Corvette.png", // CR90 corvette
  "3": "https://vignette.wikia.nocookie.net/starwars/images/9/9d/ISD-I.png", // Star Destroyer
  "5": "https://vignette.wikia.nocookie.net/starwars/images/a/a9/Sentinel_negvv.png", // Sentinel-class landing craft
  "9": "https://vignette.wikia.nocookie.net/starwars/images/8/80/DSI_hdapproach.png", // Death Star
  "10": "https://vignette.wikia.nocookie.net/starwars/images/5/5e/Millennium_Falcon_Fathead_TROS.png", // Millennium Falcon
  "11": "https://vignette.wikia.nocookie.net/starwars/images/6/67/Y-wing_DICE.png", // Y-wing
  "12": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/X-wing_Fathead.png", // X-wing
  "13": "https://vignette.wikia.nocookie.net/starwars/images/1/11/TIE_Fighter_DICE.png", // TIE Advanced x1
  "15": "https://vignette.wikia.nocookie.net/starwars/images/9/93/Executor_BF2.png", // Executor
  "17": "https://vignette.wikia.nocookie.net/starwars/images/9/9f/Firepower.jpg", // Rebel transport
  "21": "https://vignette.wikia.nocookie.net/starwars/images/3/30/Executor_ends.jpg", // Slave 1
  "22": "https://vignette.wikia.nocookie.net/starwars/images/d/df/ImperialShuttle.png", // Imperial shuttle
  "23": "https://vignette.wikia.nocookie.net/starwars/images/5/56/EF76Nebulon-B_Fathead.png", // EF76 Nebulon-B escort frigate
};

/**
 * Get planet image URL
 * @param {string} planetId - Planet ID from SWAPI
 * @returns {string} - The image URL
 */
export function getPlanetImageUrl(planetId) {
  return planetImages[planetId] || getPlaceholderImage('planet');
}

/**
 * Get starship image URL
 * @param {string} starshipId - Starship ID from SWAPI
 * @returns {string} - The image URL
 */
export function getStarshipImageUrl(starshipId) {
  return starshipImages[starshipId] || getPlaceholderImage('starship');
}

/**
 * Get a placeholder image in case the main image fails to load
 * @param {string} type - The type of resource (character, planet, starship)
 * @returns {string} - The placeholder image URL
 */
export function getPlaceholderImage(type = 'character') {
  return 'https://placehold.co/600x400/1a1a2e/fff?text=Star+Wars';
}