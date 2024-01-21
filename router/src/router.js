import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

// `routes`를 옵션으로 전달해 라우터 인스턴스를 생성.
const router = createRouter({
  // 사용할 히스토리 모드 정의. 여기서는 해시 모드를 사용.
  history: createWebHashHistory(),
  // history모드 createWebHistory(),

  routes, // `routes: routes`와 같음
})

export default router;
