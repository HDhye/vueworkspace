<script>
// 경로를 정의하고, 각 경로를 컴포넌트와 매핑.

import aliasViewVue from "./components/alias-view.vue";
import authViewVue from "./components/auth-view.vue";
import loginViewVue from "./components/login-view.vue";
import originalViewVue from "./components/original-view.vue";
import searchUserVue from "./components/search-user.vue";

// 이 경로들은 `createRouter`에 전달됨.
const routes = [
  // 경로에 사용할 컴포넌트를 정의.
  {
    path: "/",
    redirect: { name: "home" }, // 리다이렉트
  },
  {
    path: "/home",
    // 이름을 가지는 라우트
    name: "home",
    component: () => import("./components/home-view"),
  },
  // 동적 라우팅 매칭: 동적 세그먼트는 콜론으로 시작(파라미터).
  {
    // id는 숫자만 가능하게 (정규표현식)
    path: "/user/:userId(\\d+)",
    // 이름을 가지는 라우트
    name: "user",
    component: () => import("./components/user-info"),
    // 중첩 라우터
    children: [
      {
        // /user/:id/posts 과 일치 할 때
        // UserPosts가 User의 <router-view> 내에 렌더링
        path: "posts",
        component: () => import("./components/user-posts"),
      },
      {
        // /user/:id/profile 과 일치 할 때
        path: "profile",
        component: () => import("./components/user-profile"),
      },
    ],
  },
  //반복가능한 파라미터 (여러 섹션 경로 매칭)
  {
    // /:chapters -> 매치됨 /, /one, /one/two, /one/two/three, 등
    path: "/:chapters*", // 0개 이상
    // path: "/:chapters+", // 1개 이상
  },
  // 별칭을 가지는 라우터 (/alias에 접속해도 original이 표시된다.)
  { path: "/original", component: originalViewVue, alias: "/alias" },
  { path: "/alias", component: aliasViewVue },

  // 컴포넌트에 속성(props) 전달 - 유연성 제고 == $route.params -> props
  {
    path: "/search",
    component: searchUserVue,
    props: { newsletterPopup: [1,2,3] },
  },
    // 메타 필드    
  {
    path: '/auth',
   component: authViewVue,
   // 메타 필드: 라우터에서 네비게이션 가드를 통해 라우터 이동 시 권한이나 정해진 상태값에 따라 이동에 제약을 걸 수 있다.
    meta: { requiresAuth: true },
   },
   {path: '/login',
   component: loginViewVue,
    meta: { requiresAuth: false },
   }
];



export default routes;
</script>