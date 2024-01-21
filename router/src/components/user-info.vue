<template>
  <div>User : {{ $route.params.userId }}</div>
  <button @click="goBack">뒤로가기</button>
  <!-- 중첩 라우터(children) -->
  <router-view></router-view>
</template>

<script>

export default {
//   components: {
//     UserPosts,
//   },
  mounted() {
    console.log("User Profile 컴포넌트가 마운트되었습니다:");
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // 경로 변경에 반응하기...
        console.log('toPrams: ', toParams);
        console.log('previousParams: ', previousParams);
      }
    )
  },
  computed: {
    username() {
      // 곧 `params` 확인할 수 있습니다.
      return this.$route.params.username;
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? 
      // 1단계 뒤로 가기 history.back()
      this.$router.go(-1) : this.$router.push("/");
      // 한 단계 앞으로 갑니다. history.forward()와 같습니다. history.forward()와 같습니다.
      // router.go(1)

      // 3 단계 앞으로
      // router.go(3)

      // 지정한 만큼의 기록이 없으면 자동으로 실패.
      // router.go(-100)
      // router.go(100)
    },
  },
};
</script>

<style>
</style>