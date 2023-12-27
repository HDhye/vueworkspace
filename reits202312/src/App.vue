<template>
  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index" :href="menu.addr">{{
      menu.name
    }}</a>
  </div>

  <!-- 모달창 ui -->
  <div class="black-bg" v-if="isModal">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>{{ selectProduct.content }}</p>
      <button @click="this.isModal = false">X</button>
    </div>
  </div>

  <img alt="Vue logo" src="./assets/logo.png" />

  <div class="product">
    <div>
      <!--  -->
      <!--태그내부 :속성='데이터 키' -->
      <h4 :style="style">XX 원룸</h4>
      <p>{{ price1 }}</p>
    </div>

    <div v-for="(prod, index) in products" :key="index">
      <img :src="prod.image" alt="" />
      <h3 v-on:click="openModal(prod)">{{ prod.title }}</h3>
      <p>{{ prod.price }}원</p>
      <!-- <img :src="require(`./assets/${prod.image}`)" alt=""> -->
      <br />
      <!-- <button @click="prod.count++">허위매물신고</button> <span>신고수: {{prod.count}}</span> -->
    </div>
  </div>
</template>

<script>
import productlist from "./assets/data";

let menulist = [
  { name: "Menu", addr: "/" },
  { name: "Products", addr: "/products" },
  { name: "About", addr: "/about" },
];

// let productlist = [
//         {title:'역삼동 원룸', price:50, count:0, image:'room1.jpg'},
//         {title:'천호동 원룸', price:60, count:0, image:'room2.jpg'},
//         {title:'마포구 원룸', price:70, count:0, image:'room3.jpg'},
// ]
// let countList = [];

export default {
  name: "App",
  // 데이터 보관
  data() {
    return {
      price1: 60,
      style: "color: blue",
      menus: menulist,
      products: productlist,
      selectProduct: null,
      isModal: false,
    };
  },
  // 함수 보관
  methods: {
    openModal(prod) {
      this.isModal = true;
      this.selectProduct = prod;
      console.log(prod);
    },
  },

  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
  font-size: 30px;
  font-weight: bold;
}

.menu a {
  color: white;
  padding: 10px;
}

.product img {
  width: 100%;
  /* height: 200px; */
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.white-bg button {
  background: white;
  border: none;
}
</style>
