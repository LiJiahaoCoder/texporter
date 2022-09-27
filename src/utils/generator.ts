import { Content } from '../types/content';

export function generateHtmlContent(contents: Content[]) {
  const testCases = contents.map(({ filepath, content }) => (
    `<div>
<div>${filepath}</div>
<div>
${content}
</div>
</div>`
  )).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Test cases</title>
</head>
<body>
${testCases}
</body>
</html>`;
}
