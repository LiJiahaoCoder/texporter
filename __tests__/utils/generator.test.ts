import { generateHtmlContent } from '../../src/utils/generator';
import { generateTestsContent } from '../../src/utils/reader';

const HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Test cases</title>
</head>
<body>
<div>
<div>/mocks/__tests__/math/sum.test.ts</div>
<div>
import { sum } from '../../src/math/sum';

describe('mocks/math/sum tests', () => {
  test('Should get 4 When call sum Given a is 1, b is 3', () => {
    const result = sum(1, 3);
    expect(result).toBe(4);
  });
});

</div>
</div>
</body>
</html>`;

describe('Generator tests', () => {
  test(
    'Should get correct html content When call generateHtmlContent Given sum.test.ts content',
    () => {
      const result = generateHtmlContent(
        generateTestsContent(['/mocks/__tests__/math/sum.test.ts'])
      );
      expect(result).toBe(HTML_CONTENT);
    },
  );
});
