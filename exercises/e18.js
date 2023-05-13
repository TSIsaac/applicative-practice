import { maxBy } from "../exercises/e17";
/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const discoveriesByYear = {};

  for (const asteroid of data.asteroids) {
    const year = asteroid.discoveryYear;
    discoveriesByYear[year] = discoveriesByYear[year] ? discoveriesByYear[year] + 1 : 1;
  }

  const yearWithMostDiscoveries = maxBy(Object.keys(discoveriesByYear), year => discoveriesByYear[year]);

  return parseInt(yearWithMostDiscoveries);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
