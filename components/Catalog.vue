<template>
  <div class="container mx-auto p-6">
    <!-- Catalog Header -->
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold">Каталог</h1>
    </div>

    <!-- Catalog Items -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="item in catalogItems"
        :key="item.title"
        class="bg-gray-100 p-4 rounded-lg shadow flex justify-between"
      >
        <div class="flex flex-col justify-between p-2">
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-gray-500">{{ item.price }}</p>
        </div>
        <img
          :src="item.image"
          :alt="item.title"
          class="h-40 object-cover mb-4 rounded-md"
        />
      </div>
    </div>

    <!-- Why NORNLIGHT Section -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold mb-6 text-center flex">
        Почему NORNLIGHT?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="bg-white p-4 rounded-lg shadow text-center"
        >
          <div class="mb-4">
            <img :src="benefit.imageSrc" alt="" class=" flex p-8" />
          </div>
          <div class=" py-5 p-5 text-start">
            <h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-500">{{ benefit.description }}</p>
          </div>
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
      ],
      benefits: [
        {
          title: "Только проверенные бренды доставка",
          description: "Бренды, проверенные временем и качеством.",
          imageSrc: "/images/brand.png",
        },
        {
          title: "Самые низкие цены",
          description: "Ниже не будет нигде.",
          imageSrc: "/images/empty.png",
        },
        {
          title: "Быстрая доставка",
          description: "Доставляем по всей РФ за 1-10 дней.",
          imageSrc: "/images/brand.png",
        },
        {
          title: "Большой ассортимент",
          description: "Более 1000 товаров.",
          imageSrc: "/images/empty.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
