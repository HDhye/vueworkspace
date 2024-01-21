import { createApp } from 'vue';
import router from './router';
import App from './App'

// 루트 인스턴스를 생성하고 마운트.
const app = createApp(App);

// 앱이 라우터를 인식하도록,
// 라우터 인스턴스를 `use()`로 등록해야 함.
// app.use(router)를 호출하여 초기 탐색을 트리거하고, 
// this.$router 내부의 모든 컴포넌트에서 현재 this.$route에 대한 접근 권한을 부여.
app.use(router);

// 앱 시작
app.mount('#app');

// 한줄로 
// createApp(App).use(router).mount('#app');
