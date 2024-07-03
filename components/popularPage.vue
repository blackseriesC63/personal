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
    " https://6684d16356e7503d1ae140ec.mockapi.io/products"
  );
  // console.log(data._rawValue);
  products.value = data._rawValue;
  loading.value = false;
};

getProducts();
</script>

<template>

    
  <div class="container mx-auto p-5 pt-10">
    <a href="/">
        <p>Главная ></p>
    </a>
    <div class="flex justify-between pb-4">
      <h2 class="text-2xl font-bold mb-6 text-center flex pt-10">
        Популярные товары
      </h2>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <ProductCard v-for="item in products" :key="item?.id" :data="item" />
    </div>
  </div>
</template>

<style scoped></style>
