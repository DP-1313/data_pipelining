# data_pipelining

## start
1. cd frontEnd
2. npm install
3. npm run dev
4. localhost:3000에서 프론트 서버 작동

## 프로젝트 폴더 구성
### FrontEnd
```sh
├─frontEnd
│  │  README.md
│  ├─src
│  │  ├─ pages: 라우팅의 단위로 사용되는 페이지
│  │  │ 
│  │  ├─ components: 재사용되는 컴포넌트들을 모아놓은 디렉토리
│  │  │ 
│  │  ├─ containers: components가 재사용할 수 있게 상태를 받아서 components에게 적용하기 위한 wrapper 컴포넌트들의 디렉토리
│  │  
│  └─public: next에서 정적인 콘텐츠를 제공하기 위한 디렉토리
```
