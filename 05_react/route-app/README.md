# 설명

## Navbar.jsx → Link를 사용해 정적인 네비게이션 제공

## HomePage.jsx → useNavigate를 사용해 버튼 클릭 시 페이지 이동

## AboutPage.jsx, ContactPage.jsx → 간단한 정적 페이지

│── src/
│ │── components/ # (추가 가능) 공통 컴포넌트 폴더
│ │── pages/ # 개별 페이지 컴포넌트 폴더
│ │ │── HomePage.js
│ │ │── AboutPage.js
│ │ │── ContactPage.js
│ │── App.js # 라우터 설정 파일
│ │── Navbar.js # 네비게이션 바 컴포넌트
│ │── main.js # 진입점 (ReactDOM.render)
