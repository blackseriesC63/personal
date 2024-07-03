<template>
  <div>
    <Slider />
    <Catalog />
    <Popular />
  </div>
</template>
<script setup>
useHead({
  title: "Main page",
  link: {
    href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
    rel: "stylesheet",
  },
});

const products = ref(null);
const loading = ref(false);
const getProducts = async () => {
  loading.value = true;
  const { data, pending, error, refresh } = await useFetch(
    "https://6684ca5456e7503d1ae129ca.mockapi.io/api/v1/products"
  );
  // console.log(data._rawValue);
  products.value = data._rawValue;
  loading.value = false;
};
</script>
<style lang="scss"></style>
