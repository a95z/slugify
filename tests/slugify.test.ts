import { slugify } from '@/index';
import { describe, it, expect } from 'vitest';

describe('slugify function', () => {
	it('should slugify a string with spaces and special characters correctly', () => {
		expect(slugify('Café Déjà Vu: Top 10 Must-Have Items in 2024!')).toBe(
			'cafe-deja-vu-top-10-must-have-items-in-2024',
		);
	});

	it('should handle leading, trailing, and extra spaces correctly', () => {
		expect(slugify('   Hello    World   ')).toBe('hello-world');
	});

	it('should remove special characters except spaces, hyphens, and underscores', () => {
		expect(slugify('This is a #great example!')).toBe('this-is-a-great-example');
	});

	it('should replace underscores with hyphens', () => {
		expect(slugify('hello_world_example')).toBe('hello-world-example');
	});

	it('should handle multiple consecutive hyphens and remove them', () => {
		expect(slugify('hello---world---example')).toBe('hello-world-example');
	});

	it('should convert all characters to lowercase', () => {
		expect(slugify('Hello World!')).toBe('hello-world');
	});

	it('should handle empty strings and return an empty string', () => {
		expect(slugify('')).toBe('');
	});

	it('should return an empty string for strings with only special characters', () => {
		expect(slugify('!@#$%^&*()')).toBe('');
	});

	it('should return an empty string for strings with only spaces', () => {
		expect(slugify('     ')).toBe('');
	});

	it('should preserve hyphens between words correctly', () => {
		expect(slugify('Hello_ World_ Example')).toBe('hello-world-example');
	});

	it('should normalize accented characters (e.g., é -> e)', () => {
		expect(slugify('Café Déjà Vu')).toBe('cafe-deja-vu');
	});

	it('should handle strings with numbers', () => {
		expect(slugify('2024 Top 10 Trends')).toBe('2024-top-10-trends');
	});

	it('should remove leading and trailing hyphens', () => {
		expect(slugify(' -- Hello World -- ')).toBe('hello-world');
	});

	it('should trim leading and trailing spaces before slugifying', () => {
		expect(slugify('   Leading spaces  ')).toBe('leading-spaces');
	});

	it('should handle strings with a single word correctly', () => {
		expect(slugify('Word')).toBe('word');
	});

	it('should handle strings with only one special character correctly', () => {
		expect(slugify('@')).toBe('');
	});

	it('should handle strings with mixed special characters and numbers', () => {
		expect(slugify('123 !@#$% 456')).toBe('123-456');
	});

	it('should handle long strings correctly without truncating or breaking', () => {
		const longString = 'This is a very long string '.repeat(10);
		expect(slugify(longString)).toBe(
			'this-is-a-very-long-string-this-is-a-very-long-string-this-is-a-very-long-string-this-is-a-very-long-string-this-is-a-very-long-string-this-is-a-very-long-string-this-is-a-very-long-string-this-is-a-very-long-string-this-is-a-very-long-string-this-is-a-very-long-string',
		);
	});

	it('should handle single-character strings', () => {
		expect(slugify('A')).toBe('a');
	});

	it('should remove leading non-alphanumeric characters', () => {
		expect(slugify('!hello')).toBe('hello');
	});

	it('should handle edge case where the string is just a hyphen', () => {
		expect(slugify('-')).toBe('');
	});

	it('should handle edge case where the string is a single underscore', () => {
		expect(slugify('_')).toBe('');
	});

	it('should handle multiple spaces between words', () => {
		expect(slugify('hello    world    example')).toBe('hello-world-example');
	});

	it('should handle mixed case with numbers and hyphens', () => {
		expect(slugify('Hello World 123-Example')).toBe('hello-world-123-example');
	});

	it('should handle mixed underscores, spaces, and hyphens', () => {
		expect(slugify('Hello_World 123_Example')).toBe('hello-world-123-example');
	});
});
