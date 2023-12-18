import { expect, test, describe } from 'vitest';
import { validateKorean } from './validation';

describe('comment 유효성 검사', () => {
  test('한글만 입력되어야함', () => {
    const text = '친절해요';
    const expected = '친절해요';

    const result = validateKorean(text);

    expect(result).toBe(expected);
  });

  test.todo('targetName과 comment 모두 입력값이 있어야 분석api가 동작한다.', () => {

  })
});
