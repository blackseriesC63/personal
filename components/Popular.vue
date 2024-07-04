<script setup>
import ProductCard from "./products/ProductCard.vue";

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
  <div class="container mx-auto p-5">
    <div class="flex justify-between pb-4">
      <h2 class="text-2xl font-bold mb-6 text-center flex">
        Популярные товары
      </h2>

      <a href="/allProducts">
        <button
          class="border border-black rounded-full p-5 px-6 text-sm items-center flex gap-1 h-3 hover:bg-black hover:text-white"
        >
          Все товары
          <svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 6H14M14 6L9 11M14 6L9 1" stroke="#454545" />
          </svg>
        </button>
      </a>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <ProductCard v-for="item in products" :key="item?.id" :data="item" />
    </div>
  </div>
</template>

<style scoped></style>
