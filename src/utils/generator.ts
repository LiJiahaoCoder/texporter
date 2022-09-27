import { Content } from '../types/content';

export function generateHtmlContent(contents: Content[]) {
  const testCases = contents.map(({ filepath, content }, index) => (
    `<div class="test-file">
<div class="filename">${index + 1}. ${filepath}</div>
<pre>
<code>${content}</code>
</pre>
</div>`
  )).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Test cases</title>
<style>
  body {
    margin: 0;
    padding: 24px;
    background-color: #eee;
  }

  pre {
    margin: 0;
    padding: 0 12px;
    background-color: rgba(200, 200, 200, .3);
  }

  code {
    line-height: 1.5;
    color: darkslategray;
  }

  .test-file {
    margin-bottom: 16px;
  }

  .filename {
    padding: 0 12px;
    color: darkblue;
    font-size: 18px;
    height: 48px;
    line-height: 48px;
    background-color: lightgrey;
  }
</style>
</head>
<body>
${testCases}
</body>
</html>`;
}
