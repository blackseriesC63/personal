<template>
  <div class="container mx-auto p-6">
    <!-- Catalog Header -->
    <div class="flex justify-between pb-4">
      <h2 class="text-2xl font-bold mb-6 text-center flex">Каталог</h2>
    </div>

    <!-- Catalog Items -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="item in catalogItems"
        :key="item.title"
        class="bg-gray-100 p-4 rounded-lg shadow flex flex-col"
      >
        <div class="flex flex-col justify-between h-full p-2">
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <div class="flex justify-end">
            <img
              :src="item.image"
              :alt="item.title"
              class="max-md:mx-auto max-md:w-3/3 object-cover rounded-md"
            />
          </div>

          <p class="text-gray-500">{{ item.price }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-2 gap-6 pt-5">
      <div
        v-for="item in doubleItems"
        :key="item.title"
        class="bg-gray-100 p-4 rounded-lg shadow flex flex-col"
      >
        <div class="flex flex-col justify-between h-full p-2">
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <div class="flex justify-end">
            <img
              :src="item.image"
              :alt="item.title"
              class="max-md:mx-auto max-md:w-3/3 object-cover rounded-md"
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
