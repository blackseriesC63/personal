<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="card p-3 bg-white shadow-lg rounded-md">
    <img
      :src="props.data?.image"
      alt="image"
      class="w-full h-[150px] object-cover rounded mb-2"
    />
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
        fill="black"
      />
    </svg>

    <h2 class="text-xl pt-2 h-20">Card title: {{ props.data?.title }}</h2>

    <div class="flex justify-between items-end pt-8">
      <div class="pt-3">
        <p class="text-sm line-through">{{ props.data?.oldPrice }}</p>
        <p class="font-bold text-2xl">{{ props.data?.newPrice }}</p>
      </div>
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
    </div>
  </div>
</template>

<style scoped></style>
