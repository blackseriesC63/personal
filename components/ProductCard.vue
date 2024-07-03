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
    <h2 class="text-xl pt-2">Card title: {{ props.data?.title }}</h2>

    <div class="pt-3">
      <p class="text-sm line-through">{{ props.data?.oldPrice }}</p>
      <p class="font-bold text-2xl">{{ props.data?.newPrice }}</p>
    </div>
  </div>
</template>

<style scoped></style>
