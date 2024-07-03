<template>
  <div class="container mx-auto pt-6 pb-6 md:pt-10 md:pb-10">
    <div class="flex flex-col md:flex-row justify-between items-center pb-4">
      <div class="flex justify-between gap-2">
        <a href="/"><p>Главная ></p></a>
        <a href="/contacts"><p>Контакты</p></a>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="flex justify-between mx-auto">
      <!-- Statistics Section -->
      <div class="space-y-6">
        <div class="text-start">
          <h1 class="text-6xl">Контакты</h1>
        </div>
      </div>

      <!-- Description Section -->
      <div class="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
        <div>
          <h1 class="text-2xl text-black">8 (800) 890-46-56</h1>
          <p>
            Пн-Пт: 10:00 до 19:00 <br />
            Сб-Вс: заказ через корзину <br />
            Телефоны: 
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="relative pb-10">
    <div>
      <img src="/images/map.png" alt="Map" class="w-full h-auto px-10 pt-10" />
    </div>
    <div
      class="bg-white rounded-lg shadow-lg px-10 py-10 absolute bottom-40 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-11/12 max-w-screen-lg"
    >
      <div class="flex justify-between w-full">
        <div class="flex flex-col items-start">
          <h2 class="text-xl font-bold">Адрес магазина</h2>
          <p class="text-gray-600">г. Москва, Дмитровское шоссе д.10с2</p>
        </div>
        <div class="flex flex-col items-start">
          <h2 class="text-xl font-bold">Почта</h2>
          <p class="text-gray-600">NORNLIGHT@mail.ru</p>
        </div>
        <div class="flex flex-col items-start">
          <h2 class="text-xl font-bold">Телефон</h2>
          <p class="text-gray-600">8 (800) 890-46-56</p>
        </div>
        <div class="flex items-center">
          <button
            class="bg-gray-800 text-white rounded-full py-2 px-6 hover:bg-gray-700"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
