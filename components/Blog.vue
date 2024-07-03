<template>
  <div class="container mx-auto p-6">
    <div class="flex justify-between pb-4">
      <h2 class="text-2xl font-bold mb-6 text-center flex">Блог</h2>

      <button
        class="border border-black rounded-full p-5 px-6 text-sm items-center flex gap-1 h-3"
      >
        Перейти в блог
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
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 border-b-2">
      <div
        v-for="benefit in benefits"
        :key="benefit.title"
        class="bg-white text-center"
      >
        <div class="mb-4">
          <img :src="benefit.imageSrc" alt="" class="flex w-full" />
        </div>
        <div class="py-5 text-start justify-between">
          <div class="flex justify-between">
            <h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
            <div class="flex justify-end cursor-pointer">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H17M17 1V17M17 1L1 17"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <p class="text-gray-500">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      benefits: [
        {
          title: "Как правильно освещать дом снаружи?",
          description: "01.01.2024",
          imageSrc: "/images/house1.png",
        },
        {
          title: "Как правильно освещать дом снаружи?",
          description: "01.01.2024",
          imageSrc: "/images/house2.png",
        },
        {
          title: "Как правильно освещать дом снаружи?",
          description: "01.01.2024",
          imageSrc: "/images/house3.png",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
