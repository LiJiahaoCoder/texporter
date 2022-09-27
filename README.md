# Texporter🧪

`texporter` could export test cases in `html` or `pdf` formats.

## How to install

```bash
# npm
npm install -D texporter

# yarn
yarn add -D texporter
```

## How to use

Add `texport.json` file in project root directory.

Default config is as follows:

```json
{
  "format": "html",
  "matchPattern": [".*\/__tests__\/.*\\.[jt]sx?$"],
  "include": ["/src"]
}
```

### `format`

Output file format, support `html` and `pdf`.

### `matchPattern`

`matchPattern` means which files want to be exported.

> `matchPattern` support regex pattern.

### `include`

`include` indicates which directories should be exported.

> `include` should be based on project root directory.
