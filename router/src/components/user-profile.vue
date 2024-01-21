<template>
        <div>User :  {{ $route.params.id }}</div>
</template>

<script>
export default {
    mounted() {
    console.log('User Profile 컴포넌트가 마운트되었습니다:');
    },
     computed: {
    username () {
      // 곧 `params` 확인할 수 있습니다.
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
};
</script>

<style>
</style>