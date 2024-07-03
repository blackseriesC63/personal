<template>
  <div class="container mx-auto p-6">
    <Vue3Marquee class="flex">
      <img
        v-for="img in imgArray"
        :key="img"
        :src="img"
        class="h-24 object-contain p-2 "
        alt="Sponsor Image"
      />
    </Vue3Marquee>
  </div>
</template>

<script setup>
const imgArray = [
  "/images/arte.png",
  "/images/divinare.png",
  "/images/odeon.png",
];
</script>
<style lang=""></style>
