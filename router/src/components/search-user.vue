<template>
  <div><h3>{{name}} {{newsletterPopup}}</h3></div>
</template>

<script>
export default {
    props: {
    name: {
      type: String,
      default: 'Vue!'
    },
    newsletterPopup: {

    }
  }

}
</script>

<style>

</style>