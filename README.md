# @a95z/slugify - Documentation

A utility function to convert a string into a URL-friendly slug with support for string sanitization, normalization, and transformation. This package is designed to create slugs from text for usage in URLs, making it easy to ensure your slugs are clean, readable, and SEO-friendly.

## Features

- **Supports ASCII characters only**: Automatically normalizes characters and removes any unwanted symbols.
- **URL-friendly**: Converts spaces to dashes, removes special characters, and ensures the string is lowercase.
- **Optimized for TypeScript**: Fully typed with TypeScript support to integrate seamlessly into your codebase.
- **Works with ESM and CommonJS**: Flexible exports for both modern and legacy systems.

## Installation

You can install `@a95z/slugify` via npm, yarn, or pnpm.

### Using npm:

```bash
npm install @a95z/slugify
```

### Using yarn:

```bash
yarn add @a95z/slugify
```

### Using pnpm:

```bash
pnpm add @a95z/slugify
```

## Usage

Once installed, you can import the `slugify` function into your project.

### Example

```ts
import { slugify } from '@a95z/slugify';

const text = 'Hello World! This is a test.';
const slug = slugify(text);
console.log(slug); // Output: "hello-world-this-is-a-test"
```

## Development

To contribute to this package or make changes locally, you'll need to clone the repository and install the dependencies.

### Clone the repository:

```bash
git clone https://github.com/a95z/slugify.git
cd slugify
```

### Install dependencies:

Using pnpm (recommended):

```bash
pnpm install
```

### Run the tests:

We use Vitest for testing. To run the tests, use the following command:

```bash
pnpm install
```

### Format the code:

To ensure your code is properly formatted, use the prettier command:

```bash
pnpm format:fix
```

### Lint the code:

You can run TypeScript type-checking with:

```bash
pnpm lint
```

## Contributing

We welcome contributions! Please fork the repository and submit a pull request. Before submitting, ensure you run the tests and format the code according to the project standards.

### Steps:

1. Fork the repository.
2. Clone your fork locally.
3. Create a feature branch: `git checkout -b feature-branch-name`.
4. Make your changes.
5. Run tests to make sure everything works.
6. Commit your changes with clear, concise messages.
7. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Changelog

For a list of changes, please refer to the [CHANGELOG](CHANGELOG.md).

---

This package is created and maintained by Abdurezak Farah ([abdurezak.com](https://www.abdurezak.com), [Twitter (X)](https://www.x.com/abdurezakfarah)).
