<template>
    <div>
        <h1>Home</h1>
        <!-- 해당 이름의 라우터에 params 전달 == router.push() -->
        <router-link :to="{ name: 'user', params: { userId: 123 }}">User 컴포넌트 페이지</router-link>
    </div>
    <button @click="routerLink">User 컴포넌트 페이지</button>
</template>
<script>
export default {
 methods: {
    routerLink(){
        // 해당 이름의 라우터에 params 전달 
        this.$router.push({ name: 'user', params: { userId: 123 }})
    }
 }
}
</script>