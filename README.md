# Sea-Blog

## 프로젝트 설명
Sea Blog는 프론트엔드를 하면서 자신이 공부했던 내용들을 정리하고 기록하는 용도로 사용하고 있습니다.
- mongo db를 이용하여 CRUD를 통해 로그인, 로그아웃, 글 삭제, 추가, 업데이트를 할수 있습니다.
- 기존에 Ant design을 사용했던 경험을 빌려 이번 프로젝트에는 Mui를 사용하게 되었습니다.
- Mui를 통해 처음 프론트엔드를 공부하는 사람들도 간단하게 블로그를 만들 수 있도록 코드를 정리해보면서 crud를 자유롭게 할수 있게 되었습니다.

### 🏃 구성원
- Frontend<br/>
  - 김준수(React)
  - 사용 기술 : `React`, `JavaScript`, `React Router`, `Redux`, `MUI`, `react-quill`
 
## 🔎 기능 설명

### 1. 메인페이지

![헤더2](https://github.com/skdksldk/Sea-Blog/assets/85090323/dd34abcf-b616-4044-90f1-0730f493cb6a)

![헤더](https://github.com/skdksldk/Sea-Blog/assets/85090323/f2c85d13-00aa-48dc-9459-6b6857847f5f)

https://github.com/skdksldk/Sea-Blog/assets/85090323/02a93be5-bac5-447a-b86a-5a8198c52657

- Header와 Mainpage에 반응형 레이아웃 구현
- Image Carousel 직접 구현

### 2. 로그인

![로그인](https://github.com/skdksldk/Sea-Blog/assets/85090323/1e716764-9263-4a62-ab3f-4b2cd8ad7eec)

- Mui를 이용해 뷰를 구축했습니다.
- 로그인이 실했했을 경우 로그인에 실패했다는 안내의 alert 처리를 해두었습니다.

### 3. 회원가입

![회원가입](https://github.com/skdksldk/Sea-Blog/assets/85090323/535a4c4f-b4c8-4e5b-9eb1-8a065112fe81)


- 로그인과 마찬가지로 회원가입도 Mui를 이용하여 뷰를 구축했습니다.
- 로그인과 마찬가지로 reponse를 받지 못할 경우 회원가입에 실패했다는 안내의 alert 처리를 해두었습니다.

### 4. CRUD

https://github.com/skdksldk/Sea-Blog/assets/85090323/ebdbf15a-fe8a-4c4b-abc6-d7bbb14af0d1

https://github.com/skdksldk/Sea-Blog/assets/85090323/786074d6-5655-432c-9b68-d663c5df7e0e

## 💻 배포 링크

Blog(https://blog-seas.onrender.com/)


## 💡 Sea Blog를 코딩한 이유

서울 성모병원에서 배웠던 경험을 토대로 그동안 배웠던 기술들을 통해 자신만의 블로그를 개설해서 기록하고 응용할수 있어서 선택했습니다.

## 실행 방법

### 실행
`yarn run dev`

개발모드로 앱을 실행합니다.

[http://localhost:3000](http://localhost:3000)에서 확인 가능합니다.

### 빌드
`yarn run build`

`dist` 폴더에 앱을 빌드합니다.
