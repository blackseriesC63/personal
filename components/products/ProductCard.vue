<script setup>
const props = defineProps({
  data: Object,
});

import { usePiniaStore } from "../../store";
import { computed } from "vue";

const store = usePiniaStore();

const toggleLike = () => {
  store.addProductToLiked(props.data);
};

const isLiked = computed(() => {
  const index = store.likedProducts.findIndex((p) => p.id == props.data.id);
  return index !== -1;
});

const toggleBasket = () => {
  store.addProductToBasket(props.data);
};


</script>

<template>
  <div class="card p-3 bg-white shadow-lg rounded-md">
    <nuxt-link :to="`/products/${props.data?.id}`">
      <img
        :src="props.data?.image"
        alt="image"
        class="w-full h-[150px] object-cover rounded mb-2"
      />
    </nuxt-link>

    <button @click="toggleLike">
      <svg
        v-if="!isLiked"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
        class="like-icon"
      >
        <defs>
          <mask id="ipTLike0">
            <path
              fill="#555"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
            />
          </mask>
        </defs>
        <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLike0)" />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
        class="liked-icon"
      >
        <path
          fill="#f44336"
          d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12"
        />
      </svg>
    </button>

    <h2 class="text-xl pt-2 h-20">Card title: {{ props.data?.title }}</h2>

    <div class="flex justify-between items-end pt-8">
      <div class="pt-3">
        <p class="text-sm line-through">{{ props.data?.oldPrice }}</p>
        <p class="font-bold text-2xl">{{ props.data?.newPrice }}</p>
      </div>

      <button @click="toggleBasket">
        <svg
          width="55"
          height="33"
          viewBox="0 0 55 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="55" height="33" rx="16.5" fill="#454545" />
          <path
            d="M32.4444 20.4444C31.4626 20.4444 30.6667 21.2404 30.6667 22.2222C30.6667 23.2041 31.4626 24 32.4444 24C33.4263 24 34.2222 23.2041 34.2222 22.2222C34.2222 21.2404 33.4263 20.4444 32.4444 20.4444ZM32.4444 20.4444L26.2222 20.4444C25.6451 20.4772 25.073 20.3215 24.592 20.0009C24.1111 19.6802 23.7473 19.212 23.5556 18.6667L21.7778 8H20M32.4444 20.4444C33.0215 20.4772 33.5937 20.3215 34.0746 20.0009C34.5556 19.6802 34.9194 19.212 35.1111 18.6667L36 12.4444H22.4889M27.1111 22.2222C27.1111 23.2041 26.3152 24 25.3333 24C24.3515 24 23.5556 23.2041 23.5556 22.2222C23.5556 21.2404 24.3515 20.4444 25.3333 20.4444C26.3152 20.4444 27.1111 21.2404 27.1111 22.2222Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.like-icon,
.liked-icon {
  width: 24px;
  height: 24px;
}
</style>
