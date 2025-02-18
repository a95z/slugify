/**
 * Converts a given string into a URL-friendly slug.
 *
 * This function performs the following operations:
 * 1. Converts the string to lowercase.
 * 2. Normalizes accented characters to their base forms (e.g., "é" becomes "e").
 * 3. Removes special characters except alphanumeric characters, spaces, hyphens, and underscores.
 * 4. Replaces spaces, underscores, and multiple hyphens with a single hyphen.
 * 5. Trims leading and trailing hyphens.
 *
 * Note:
 * - This function does not handle non-ASCII characters (e.g., Chinese, Cyrillic) directly.
 *   You may need to apply a separate transliteration method before using this function for such cases.
 *
 * @param {string} text - The input string to be slugified. If the input is not a string, it will be converted to one using `.toString()`.
 * @returns {string} A URL-friendly slug derived from the input string. The slug is lowercase, and special characters are removed or replaced.
 *
 * @example
 * // Basic usage
 * const title = "Café Déjà Vu: Top 10 Must-Have Items in 2024!";
 * const slug = slugify(title);
 * console.log(slug); // Output: "cafe-deja-vu-top-10-must-have-items-in-2024"
 *
 * // Handling spaces and underscores
 * const input = "Hello_World  Example";
 * console.log(slugify(input)); // Output: "hello-world-example"
 *
 * // Removing special characters
 * const specialChars = "This is a #great example!";
 * console.log(slugify(specialChars)); // Output: "this-is-a-great-example"
 *
 * // Normalizing accented characters
 * const accentedText = "Café au lait";
 * console.log(slugify(accentedText)); // Output: "cafe-au-lait"
 *
 * // Edge cases
 * console.log(slugify("")); // Output: "" (empty string)
 * console.log(slugify("   ")); // Output: "" (only spaces)
 * console.log(slugify("!@#$%^&*()")); // Output: "" (only special characters)
 * console.log(slugify(" -- Hello World -- ")); // Output: "hello-world" (trims hyphens)
 */

export function slugify(text: string): string {
	return text
		.toString() // Ensure the input is a string
		.normalize('NFD') // Normalize to decompose accents
		.replace(/[\u0300-\u036f]/g, '') // Remove diacritics (accents)
		.toLowerCase() // Convert to lowercase
		.trim() // Trim leading and trailing whitespace
		.replace(/[^a-z0-9\s-_]/g, '') // Remove special characters except alphanumeric, spaces, hyphens, and underscores
		.replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and multiple hyphens with a single hyphen
		.replace(/^-+|-+$/g, ''); // Trim leading and trailing hyphens
}
