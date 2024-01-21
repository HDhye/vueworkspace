<script>
// 경로를 정의하고, 각 경로를 컴포넌트와 매핑.

import notFoundVue from "./components/notFound.vue";

// 이 경로들은 `createRouter`에 전달됨.
const routes = [
  // 경로에 사용할 컴포넌트를 정의.
    { path: "/:pathMatch(.*)*", name: "NotFound", component: notFoundVue,},
  {
    path: "/",
    redirect: "/home",
    component: () => import("./components/home-view.vue"),
  },
  // 동적 라우팅 매칭: 동적 세그먼트는 콜론으로 시작(파라미터).
  {
    path: "/user/:id",
    component: () => import("./components/user-profile.vue"),
    // 중첩 라우터
    children: [
      {
        // /user/:id/posts 과 일치 할 때
        // UserPosts가 User의 <router-view> 내에 렌더링
        path: "posts",
        component: () => import("./components/user-posts.vue"),
      },
    ],
  },
];

this.$router.push({
  name: 'notFoundVue',
  // `//`로 시작하는 URL을 피하기 위해, 첫 번째 문자 `/`만 제거하고 현재 경로를 유지
  params: { pathMatch: this.$route.path.substring(1).split('/') },
  // 존재하는 경우, 기존 쿼리 및 해시 유지
  query: this.$route.query,
  hash: this.$route.hash,
})

export default routes;
</script>