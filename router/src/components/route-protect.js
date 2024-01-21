const auth = false;

// 네비게이션 가드 함수
export default function routeProtecter(router) {
    // 내비게이션 전역가드 등록
    router.beforeEach((to, from, next) => {
        // $route.matched 배열에 저장된 라우터 중 meta 필드에 'requiresAuth'가 있는지 찾는다.
        if (to.matched.some(record => record.meta.requiresAuth)) {
            // 로그인 되어있지 않은 유저라면 로그인 페이지로 redirect 시킨다.
            if (!auth) {
                next({
                    path: '/login',
                    // 네비게이션 중단
                    replace: true
                });
            } else {
                // 로그인 되어 있다면 그대로 라우터 이동을 진행한다.
                next();
            }
        } else {
            // requiresAuth 메타 필드가 없는 경우 그대로 다음 라우터로 이동
            next();
        }
    });
    // 내비게이션 전역가드
    /*
    to: 라우트: 대상 Route 객체 로 이동.
    from: 라우트: 현재 라우트로 오기전 라우트.
    next: 함수: 이 함수는 훅을 해결하기 위해 호출 되어야 함
    */

    /*
    next(): 파이프라인의 다음 훅으로 이동. 훅이 없는 경우 네비게이션은 승인.
    next(false): 현재 네비게이션을 중단. 브라우저 URL이 변경되면(사용자 또는 뒤로 버튼을 통해 수동으로 변경됨) from경로의 URL로 재설정.
    next('/') 또는 next({ path: '/' }): 다른 위치로 리디렉션. 현재 네비게이션이 중단되고 새 네비게이션 시작.
    next(error): (2.4.0 이후 추가) next에 전달된 인자가 Error 의 인스턴스이면 탐색이 중단되고 router.onError()를 이용해 등록 된 콜백에 에러가 전달.
    */

}