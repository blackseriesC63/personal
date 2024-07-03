<template>
  <div>
    <!-- Navbar for Desktop View -->
    <div class="container"></div>
    <nav
      class="container mx-auto  justify-between items-center lg:flex space-x-6 pt-3 hidden lg:flex"
    >
      <div class="gap-10 flex justify-between">
        <a href="#" class="text-gray-600 hover:text-gray-900">О компании</a>
        <a href="#" class="text-gray-600 hover:text-gray-900"
          >Доставка и оплата</a
        >
        <a href="#" class="text-gray-600 hover:text-gray-900">Возврат</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Гарантии</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Контакты</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Блог</a>
      </div>
      <div class="gap-10 flex justify-between">
        <span class="text-gray-600">8 (800) 890-46-56</span>
        <a href="#" class="text-gray-400">Заказать звонок</a>
      </div>
    </nav>

    <div class="sticky top-0 left-0 backdrop-blur-lg z-10">
      <header
        class="container mx-auto flex justify-between items-center bg-white pt-3"
      >
        <div class="flex items-center">
          <button class="px-6 py-2 rounded-full lg:hidden" @click="toggleMenu">
            <div class="flex justify-between gap-2 items-center">
              <img src="/images/menu.png" alt="" class="h-3" />
            </div>
          </button>
          <nuxt-link to="/">
            <img src="/images/logo.png" alt="NORNLIGHT logo" class="h-8 mr-2" />
          </nuxt-link>
          <button
            class="bg-gray-800 text-white px-6 py-2 rounded-full hidden lg:flex"
          >
            <div class="flex justify-between gap-2 items-center">
              <img src="/images/catalog.png" alt="" class="h-3" />
              Каталог
            </div>
          </button>
        </div>

        <div class="flex items-center pr-5 py-4 space-x-4 lg:hidden">
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <img src="/images/saved.png" alt="Избранное" class="w-5 h-5" />
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <img src="/images/cart.png" alt="Корзина" class="w-5 h-5" />
          </a>
        </div>

        <div
          class="flex-1 flex items-center justify-center relative px-4 hidden lg:flex"
        >
          <input
            type="text"
            placeholder="Поиск по товарам"
            class="border border-gray-300 rounded-full px-3 py-1 w-full h-10 pl-10 pr-10"
          />
          <svg
            class="absolute right-7"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 13L17 17M1 7.85714C1 11.6442 4.07005 14.7143 7.85714 14.7143C9.75394 14.7143 11.471 13.9441 12.7123 12.6994C13.9495 11.4591 14.7143 9.74743 14.7143 7.85714C14.7143 4.07005 11.6442 1 7.85714 1C4.07005 1 1 4.07005 1 7.85714Z"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="flex items-center space-x-4 justify-center hidden lg:flex">
          <div class="flex space-x-3 items-center gap-5 py-2">
            <a
              href="#"
              class="flex flex-col items-center text-gray-600 hover:text-gray-900"
            >
              <img src="/images/saved.png" alt="" class="w-5 h-5" />
              Избранное
            </a>
            <a
              href="#"
              class="flex flex-col items-center text-gray-600 hover:text-gray-900"
            >
              <img src="/images/compare.png" alt="" class="w-5 h-5" />
              Сравнение
            </a>
            <a
              href="#"
              class="flex flex-col items-center text-gray-600 hover:text-gray-900"
            >
              <img src="/images/cart.png" alt="" class="w-5 h-5" />
              Корзина
            </a>
          </div>
        </div>
      </header>
    </div>
    <!-- Collapsible Navbar for Mobile View -->
    <nav
      v-if="isMenuOpen"
      class="container mx-auto flex flex-col items-center text-center lg:hidden space-y-2 pt-3"
    >
      <div class="gap-10 flex flex-col">
        <a href="#" class="text-gray-600 hover:text-gray-900">О компании</a>
        <a href="#" class="text-gray-600 hover:text-gray-900"
          >Доставка и оплата</a
        >
        <a href="#" class="text-gray-600 hover:text-gray-900">Возврат</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Гарантии</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Контакты</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Блог</a>
      </div>
      <div class="gap-10 flex flex-col pt-5">
        <button
          class="bg-gray-800 text-white px-6 py-2 rounded-full w-[300px] h-14"
        >
          <div class="flex justify-center gap-3 items-center">
            <img src="/images/catalog.png" alt="" class="h-3" />
            Каталог
          </div>
        </button>
        <span class="text-gray-600">8 (800) 890-46-56</span>
        <a href="#" class="text-gray-400">Заказать звонок</a>
      </div>
    </nav>

    <!-- Search Input for Mobile View -->
    <div
      class="flex-1 flex items-center justify-center relative px-4 lg:hidden"
    >
      <input
        type="text"
        placeholder="Поиск по товарам"
        class="border border-gray-300 rounded-full px-3 py-1 w-full h-10 pl-10"
      />
      <svg
        class="absolute right-7"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 13L17 17M1 7.85714C1 11.6442 4.07005 14.7143 7.85714 14.7143C9.75394 14.7143 11.471 13.9441 12.7123 12.6994C13.9495 11.4591 14.7143 9.74743 14.7143 7.85714C14.7143 4.07005 11.6442 1 7.85714 1C4.07005 1 1 4.07005 1 7.85714Z"
          stroke="#454545"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .lg\\:hidden {
    display: none;
  }
  .lg\\:flex {
    display: flex;
  }
}
</style>
