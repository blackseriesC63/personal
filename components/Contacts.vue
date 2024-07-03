<template>
  <div class="container mx-auto p-4 pt-6 pb-6 md:p-6 md:pt-10 md:pb-10">
    <div class="flex flex-col md:flex-row justify-between items-center pb-4">
      <div class="flex justify-between gap-2">
        <a href="/"><p>Главная ></p></a>
        <a href="/contacts"><p>Контакты</p></a>
      </div>
    </div>
  </div>
  <div class="container mx-auto p-2">
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
          <p>Пн-Пт: 10:00 до 19:00 <br> Сб-Вс: заказ через корзину <br> Телефоны: </p>
        </div>
      </div>
    </div>
  </div>

  <img src="/images/map.png" alt="" class=" flex mx-auto  px-2 pt-8 pb-5">

  
  


  
</template>

<script setup></script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
