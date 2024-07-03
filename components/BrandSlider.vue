<template>
  <div class="container mx-auto px-14">
    <h2 class="text-2xl font-bold mb-4 md:mb-0 text-center md:text-left">
      Только проверенные бренды
    </h2>
    <Vue3Marquee class="flex">
      <img
        v-for="img in imgArray"
        :key="img"
        :src="img"
        class="h-24 object-contain p-2"
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
