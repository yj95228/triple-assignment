# 💻 프로젝트 실행 방법

1. [링크](http://triple-assignment-pi.vercel.app) 에서 배포된 사이트로 결과물 직접 확인
2. GitHub 프로젝트를 로컬에 가져와서 실행

   a. git 원격 저장소를 로컬에 복제

   ```bash
   git clone https://github.com/yj95228/triple-assignment.git
   ```

   b. 해당 디렉토리로 이동

   ```bash
   cd triple-assignment
   ```

   c. 필요한 모듈 설치

   ```bash
   npm install
   ```

   d. 실행 → [http://localhost:3000/](http://localhost:3000/) 에서 접속 가능

   ```bash
   npm start
   ```

# 🛠 사용한 기술과 선택한 이유

1. **TypeScript** : 자바스크립트(JavaScript)를 기반으로 정적 타입 문법을 추가한 프로그래밍 언어
   - 코드 작성 단계에서 타입을 체크해 컴파일 단계에서 에러를 확인할 수 있어 런타임 이전에 버그를 사전에 제거할 수 있기 때문입니다.
   - 혼자 하는 과제여서 타입스크립트를 사용함으로써 코드 양이 길어진 단점이 존재하나 타입을 명시적으로 사용한다는 점이 코드량이 많거나 여러명이 협업해야 하는 프로젝트에서는 장점이 될 것이라고 판단하였습니다.
2. **Emotion** : CSS-in-JS의 종류 중 하나로 JavaScript 안에서 스타일을 작성할 수 있게 해주는 라이브러리
   - CSS in JS를 사용하는 것이 자바스크립트에서 쓰이는 상수, props, 함수 등을 공유하고 component화 하여 재사용성이 좋은 장점이 있기 때문입니다
   - [css Prop](https://emotion.sh/docs/css-prop)을 사용하여 styled-component에서의 태그를 대신하는 컴포넌트와 달리 div, img 등의 태그를 알 수 있어 좋았습니다.
   - 처음에는 SSR을 고려하지 않았지만 emotion의 경우 SSR의 별도 설정이 필요없다는 이점이 있습니다. 그리고 성능 및 번들 크기와 관련하여 크게 차이나는 것은 아니나 emotion이 styled-components보다 조금 가볍고 빠르다고 합니다.
3. **Next.js** : React 기반의 서버 사이드 렌더링 프레임워크
   - SSR, 즉 서버를 이용하여 페이지를 구성하여 빠른 초기 응답을 경험할 수 있기 때문입니다. 또한 빈 html이 아닌 데이터가 채워진 html을 받아오기 때문에 SEO에도 적합합니다.
   - 처음에는 Next.js 페이지 구조가 불필요하다고 생각되어 babel과 webpack을 포함하여 직접 리액트의 개발환경을 쉽게 구축가능한 CRA(Create-React-App)으로 구축하였으나 앞선 장점을 고려하여 Next.js로의 마이그레이션을 진행하였습니다.

# 📂 폴더 구조

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── image
│   │   ├── badge-apple4x.png
│   │   ├── play-store2x.png
│   │   └── triple2x.png
├── src
│   ├── component
│   │   ├── badge
│   │   │   ├── Badge.tsx
│   │   │   └── BadgeSection.tsx
│   │   ├── indicator
│   │   │   └── Indicator.tsx
│   │   └── logo
│   │       └── Logo.tsx
│   └── utils
│       └── CountUp.tsx
├── next-env.d.ts
└── tsconfig.json
```
