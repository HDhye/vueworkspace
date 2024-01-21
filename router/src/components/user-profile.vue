<template>
  <div>User : {{ $route.params.id }}</div>
  <user-posts></user-posts>
</template>

<script>
import UserPosts from "./user-posts.vue";

export default {
  components: {
    UserPosts,
  },
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
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style>
</style>