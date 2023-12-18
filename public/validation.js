// 공백값 검증 함수
export const validateNotEmpty = (text) => text.trim().length === 0 ? false : true;

// 한글 유효성 검증 함수
export const validateKorean = (comment) => {
  const regex = /^[ㄱ-ㅎ|가-힣|~!.]+$/;

  if (regex.test(comment)) {
    return comment;
  }
  return '한글이 아닙니다.';
};