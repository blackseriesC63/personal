<template>
  <div class="container mx-auto pt-8">
    <nav class="pb-10">
      <div
        class="gap-10 hidden md:flex justify-between bg-gray-100 p-2 rounded-full px-6"
      >
        <a href="#" class="text-gray-600 hover:text-gray-900">Светильники</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Люстры</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Лампы</a>
        <a href="#" class="text-gray-600 hover:text-gray-900"
          >Настольные лампы</a
        >
        <a href="#" class="text-gray-600 hover:text-gray-900">Ночники</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Подстветка</a>
        <a href="#" class="text-gray-600 hover:text-gray-900"
          >Уличное освещение</a
        >
        <a href="#" class="text-gray-600 hover:text-gray-900"
          >Мебельные установки</a
        >
      </div>
    </nav>

    <!-- Catalog Header -->
    <div class="flex flex-col md:flex-row justify-between items-center pb-4">
      <div class="flex justify-between gap-2">
        <a href="/"><p>Главная ></p></a>
        <a href="/catalog"><p>Каталог</p></a>
      </div>
    </div>
    <div class="flex justify-between pb-4">
      <h2 class="text-2xl font-bold mb-6 text-center flex">Каталог</h2>
    </div>

    <!-- Catalog Items -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="item in catalogItems"
        :key="item.title"
        class="bg-gray-100 p-4 rounded-lg shadow flex flex-col hover:bg-slate-900 hover:text-white"
      >
        <div class="flex flex-col justify-between h-full p-2">
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <div class="flex justify-end">
            <img
              :src="item.image"
              :alt="item.title"
              class="max-md:mx-auto max-md:w-full object-cover rounded-md"
            />
          </div>

          <p class="text-gray-500">{{ item.price }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-2 gap-6 pt-5 pb-10">
      <div
        v-for="item in doubleItems"
        :key="item.title"
        class="bg-gray-100 p-4 rounded-lg shadow flex flex-col hover:bg-slate-900 hover:text-white"
      >
        <div class="flex flex-col justify-between h-full p-2">
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <div class="flex justify-end">
            <img
              :src="item.image"
              :alt="item.title"
              class="max-md:mx-auto max-md:w-full object-cover rounded-md"
            />
          </div>

          <p class="text-gray-500">{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalogItems: [
        { title: "Люстры", image: "/images/lyustra.png", price: "От 540₽" },
        { title: "Светильники", image: "images/svetil.png", price: "От 540₽" },
        { title: "Бра", image: "/images/bra.png", price: "От 540₽" },
        { title: "Торшеры", image: "/images/torsher.png", price: "От 540₽" },
        {
          title: "Настольные лампы",
          image: "/images/lampa.png",
          price: "От 540₽",
        },
        { title: "Споты", image: "/images/spot.png", price: "От 540₽" },
        {
          title: "Самые низкие цены",
          price: "От 540₽",
          image: "/images/track.png",
        },
        {
          title: "Быстрая доставка",
          price: "От 540₽",
          image: "/images/street.png",
        },
        {
          title: "Большой ассортимент",
          price: "От 540₽",
          image: "/images/tech.png",
        },
      ],
      doubleItems: [
        {
          title: "Быстрая доставка",
          price: "От 540₽",
          image: "/images/diod.png",
        },
        {
          title: "Большой ассортимент",
          price: "От 540₽",
          image: "/images/complect.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
