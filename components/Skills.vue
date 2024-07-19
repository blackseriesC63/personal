<template>
  <div class="container mx-auto py-12">
    <h2 class="text-3xl font-bold text-center mb-12">
      My <span class="font-extrabold">Skills</span>
    </h2>
    <div class="w-full flex flex-col md:flex-row justify-between gap-4">
      <div class="w-full md:w-1/2 border border-stone-950 rounded-lg">
        <h2 class="text-3xl font-bold text-center my-12">Backend</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 p-5">
          <div
            v-for="item in backendItems"
            :key="item.title"
            class="bg-gray-100 p-4 rounded-lg shadow flex flex-col hover-scale border border-black"
            @mouseover="item.hovered = true"
            @mouseleave="item.hovered = false"
          >
            <div class="flex justify-center mx-auto flex-col w-24 p-2">
              <div class="flex">
                <img
                  :src="item.hovered ? item.whiteImage : item.image"
                  :alt="item.title"
                  class="mx-auto object-cover rounded-md"
                />
              </div>
              <h3
                class="text-xl font-semibold mb-2 flex justify-center mx-auto"
              >
                {{ item.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 border border-stone-950 rounded-lg">
        <h2 class="text-3xl font-bold text-center my-12">Frontend</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 p-5">
          <div
            v-for="item in frontendItems"
            :key="item.title"
            class="bg-gray-100 p-4 rounded-lg shadow flex flex-col hover-scale border border-black"
            @mouseover="item.hovered = true"
            @mouseleave="item.hovered = false"
          >
            <div class="flex justify-center mx-auto flex-col w-24 p-2">
              <div class="flex">
                <img
                  :src="item.hovered ? item.whiteImage : item.image"
                  :alt="item.title"
                  class="mx-auto object-cover rounded-md"
                />
              </div>
              <h3
                class="text-xl font-semibold mb-2 flex justify-center mx-auto"
              >
                {{ item.title }}
              </h3>
            </div>
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
      backendItems: [
        {
          title: "JavaScript",
          image: "/images/jsBlack.png",
          whiteImage: "/images/jsWhite.png",
        },
        {
          title: "NodeJS",
          image: "images/nodeJsBlack.png",
          whiteImage: "/images/nodeJsWhite.png",
        },
        {
          title: "Express",
          image: "/images/expressBlack.png",
          whiteImage: "/images/expressWhite.png",
        },
        {
          title: "Typeorm",
          image: "/images/typeormBlack.png",
          whiteImage: "/images/typeormWhite.png",
        },
        {
          title: "Prisma",
          image: "/images/prismaBlack.png",
          whiteImage: "/images/prismaWhite.png",
        },
        {
          title: "Nest",
          image: "/images/nestBlack.png",
          whiteImage: "/images/nestWhite.png",
        },
        {
          title: "MySql",
          image: "/images/mysqlBlack.png",
          whiteImage: "/images/mysqlWhite.png",
        },
        {
          title: "MongoDB",
          image: "/images/mongoBlack.png",
          whiteImage: "/images/mongoWhite.png",
        },
        {
          title: "Postgres",
          image: "/images/pgBlack.png",
          whiteImage: "/images/pgWhite.png",
        },
      ],
      frontendItems: [
        {
          title: "HTML",
          image: "/images/htmlBlack.png",
          whiteImage: "/images/htmlWhite.png",
        },
        {
          title: "CSS",
          image: "images/cssBlack.png",
          whiteImage: "/images/cssWhite.png",
        },
        {
          title: "JS",
          image: "/images/jsBlack.png",
          whiteImage: "/images/jsWhite.png",
        },
        {
          title: "Vue",
          image: "/images/vueBlack.png",
          whiteImage: "/images/vueWhite.png",
        },
        {
          title: "Vite",
          image: "/images/viteBlack.png",
          whiteImage: "/images/viteWhite.png",
        },
        {
          title: "Nuxt",
          image: "/images/nuxtBlack.png",
          whiteImage: "/images/nuxtWhite.png",
        },
        {
          title: "Tailwind",
          image: "/images/tailwindBlack.png",
          whiteImage: "/images/tailwindWhite.png",
        },
        {
          title: "GitHub",
          image: "/images/gitBlack.png",
          whiteImage: "/images/gitWhite.png",
        },
        {
          title: "Pinia",
          image: "/images/pinia.png",
          whiteImage: "/images/pinia.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hover-scale {
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
  background-color: #1e293b; /* Equivalent to hover:bg-slate-900 */
  color: #ffffff; /* Equivalent to hover:text-white */
}
</style>
