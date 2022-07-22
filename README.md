# Team 3 Project

## 🤝 팀 프로젝트

- 과제 기한:
  - 과제 수행 기간: 06월 09일(목) ~ 07월 22일(금)
  - 코드 리뷰 기간: 07월 22일(금) ~ 07월 29일(금)
- 내용:
  - API 분석 후 어떤 프로젝트로 진행/완성할 것인지 팀 단위로
    결정하세요.

---

작업자: 박지훈 / 원윤희 / 조현재

---

<br>

# 1. 기획/구상 📝

> ## 1-1. 프로젝트 컨셉

---

### 여행 사이트

- 국내 여행 상품 판매 사이트
- 지역별 여행 상품을 판매하는 사이트 구상
- 타이틀, 태그를 이용해 카테고리를 구분하고 관련 상품의 목록
  을 보여준다

---

### 시안

[작업 시안 보기](https://www.figma.com/file/gOq77B2AW1uniF46ACtudr/Untitled?node-id=0%3A1)

---

### 사이트 명 / 포인트 색상

#### FASTOUR

- 패스트캠퍼스 + TOUR와 결합

#### 포인트 색

- 빨간색(키 컬러) <span style="color:#ed234b">#ed234b</span>
- 회색 <span style="color:#d9d9d9">#d9d9d9</span>
- 검정색 <span style="color:#212529">#212529</span>

---

> ## 1-2. 핵심 목표

- 팀 작업에서 협동을 목적으로 함께 작업하는 것
- 기획/디자인/개발 경험하기

---

> ## 1-3. 사용 기능/툴

- 피그마
- 라이브 쉐어(vs code 확장프로그램)

---

> ## 1-4. 특이점

1. 기획/디자인/개발 전체를 함께 진행하는 방식으로 작업
2. 서로의 의견을 공유하며 개선해 작업자간 갈등이 없었음
3. 기획 단계에서 UI/UX도 고려하면서 디자인 시안 작업(구조,흐
   름,버튼 위치 등)
4. 피그마로 디자인 시안 제작
5. 피그마 '프로토타입 기능'으로 페이지 흐름도 제작
6. 팀 작업의 편의성을 목적으로 관리자, 사용자 동일 서버포트
   로 사용해 개발
7. 개발에서는 기능 구현에 목적을 뒀음

---

# 2. 개발 작업 🖥️

> ## 2-1. 실행법

- `npm i`
- `npm run dev` : 개발 모드용
- `npm run build` : 배포용

---

> ## 2-2. 결과물

[결과물 보기](https://62da8a2bfbac260b3ba11ae4--calm-frangipane-b125a0.netlify.app/)

---

> ## 2-3. 사용 기능/툴

- Vue 3
- ESLint
- Prettier
- Vue Router
- Pinia
- Axios
- Autoprefixer
- Postcss
- Vite
- SCSS + Bootstrap 5 (5.2.0-beta1)
- Swiper

---

> ## 2-4. 구현 기능 정리

---

#### [인증 관련]

- [x] 회원가입
- [x] 로그인
- [ ] 인증 확인
- [x] 로그아웃
- [x] 사용자 정보 수정

#### [계좌 관련]

- [x] 선택 가능한 은행 목록 조회
- [x] 계좌 목록 및 잔액 조회
- [x] 계좌 연결
- [x] 계좌 해지

#### [제품 관련]

- [x] 모든 제품 조회
- [x] 전체 거래(판매) 내역
- [x] 거래(판매) 내역 완료/취소 및 해제
- [x] 제품 추가
- [x] 제품 수정
- [x] 제품 삭제
- [x] 단일 제품 상세 조회
- [x] 제품 검색
- [ ] 제품 거래(구매)
- [x] 제품 전체 거래(구매) 내역
- [x] 단일 제품 상세 거래(구매) 내역

---

> ## 2-5. 학습 키워드

- 공동 작업(협업)
- 기능 구현
- 뷰 / 라우터 / 피니아(상태관리 스토어) 학습
- JWT 개념 학습

---

# 3. 회고 / 간단 정리 🤔

- 데이터 동기 비동기 처리의 구분과 필요성을 느낌
- 자바스크립트의 자동 형변환, 단체 작업 시 타입 스크립트 사
  용의 필요성 체감
- 건강 문제로 인해 구상에 못미치는 결과물을 제출하게 된 부분
  이 아쉬움(테니스 엘보, 손목 터널 증후군, 터널 증후군 전조
  증상, 수술과 재발 등 ....)
- 유저의 편의성을 고려한 기능/디자인을 실제 함께 적용해 구현
  하기에는 시간이 상대적으로 부족해 아쉽다
- 협동 작업의 중요성

- 코딩 실력은 중요치 않다. 얼마나 의지를 갖고 열심히 참여하
  는지가 중요하다
- 마치 스터디 시간처럼 머리를 맞대고 기능을 구현한 것이 좋았
  다
