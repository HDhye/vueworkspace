<script>
const routes = [
  { path: '/', redirect: '/home', component: () => import('./components/home-view.vue')},
    // 동적 라우팅 매칭: 동적 세그먼트는 콜론으로 시작합니다.
  { path: '/user/:id', component: () => import('./components/user-profile.vue') }, 

]

export default routes
</script>