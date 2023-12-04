# feeling

## 프로젝트 소개

- 상사 평가에 대한 감정 분석 서비스
- 텍스트를 분석해 특정 단어 또는 문장 내용의 감정을 분석하고 결과를 반환하는 HTTP 기반의 REST API인 CLOVA Sentiment 이용

<img width="800" alt="스크린샷 2023-12-04 오전 12 08 16" src="https://github.com/woorifisa-service-dev-2nd/frontend-2nd-feeling/assets/77391482/ee466cd0-d66a-4d86-a0e9-8ef22389aa8d">

## 팀원

|               [박치원](https://github.com/chich2)               |              [우지음](https://github.com/oozeume)               |             [윤이솔](https://github.com/pinus0711)              |             [이건중](https://github.com/JohnDohnut)             |              [이규리](https://github.com/KyuliLee)               |              [임다빈](https://github.com/ekqls5858)              |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------: | :--------------------------------------------------------------: | :--------------------------------------------------------------: |
| ![박치원](https://avatars.githubusercontent.com/u/59588641?v=4) | ![우지음](https://avatars.githubusercontent.com/u/77391482?v=4) | ![윤이솔](https://avatars.githubusercontent.com/u/62708247?v=4) | ![이건중](https://avatars.githubusercontent.com/u/51821505?v=4) | ![이규리](https://avatars.githubusercontent.com/u/151590254?v=4) | ![임다빈](https://avatars.githubusercontent.com/u/151507968?v=4) |

## 핵심 기능

- 이름 및 평가 내용 작성
- 감정분석 API 연동하여 분석 결과 화면 노출

## 도메인 용어 정의

`document.sentiment` : 전체 문장에 대한 감정
`document.confidence.neutral` : 중립 confidence (%)  
`document.confidence.positive` : 긍정 confidence (%)  
`document.confidence.negative` : 부정 confidence (%)

## ESLint 규칙

- airbnb-base 규칙 적용
- 콘솔로 로그 찍지 뭇하는 규칙 해제


## 느낀점

- 박치원 : 오픈 API 활용법에 대해 부족했던 부분을 채울 수 있는 시간이었습니다. 다양한 아이디어 제시를 통한 주제 선정 과정도 뜻깊은 시간이었습니다. ESLint가 사전에 규칙과 어긋나는 부분들을 바로 잡아주어 많은 도움이 되었습니다.
- 우지음 : 서버와 클라이언트에 대한 이해도를 높일 수 있었습니다. TailwindCSS 문서 하나씩 보면서 속성 추가하느라 시간이 좀 걸렸는데, 조금만 익히고 나니 CSS파일에 적용하는 것보다 간편하게 사용할 수 있어서 효율적으로 처리할 수 있었습니다.
- 윤이솔 : 서버에 대한 이해가 부족했는데 잘하시는 팀원에게 배울 수 있어 유익했고 좀 더 기여하지 못한 점이 아쉬웠습니다.
- 이건중 : 같은 플랫폼 내에서도 서비스에 따라 같은 값에 대해 다른 변수 이름을 사용하는 케이스를 직접 확인할 수 있었고 API Reference를 명확히 확인해야함을 깨달았습니다.
- 이규리 : 수업 내용을 기반으로 프로젝트를 하니 제대로 이해하지 못했던 서버와 미들웨어를 확실하게 익힐 수 있었습니다. EsLint를 처음 사용했는데 airbnb-base rule은 제약이 많아서 다음에는 조금 더 커스터마이징해서 사용하면 좋을 것 같습니다.
- 임다빈 : 아이디어 회의에는 참여했지만 사정 상 프로젝트에 참여할 수 없어 아쉬웠습니다. 회의 진행하면서 다양한 종류의 API가 있다는 것을 알게 되어 좋았습니다.
