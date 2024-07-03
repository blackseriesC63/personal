<template>
  <div class="container mx-auto p-4 pt-6 pb-6 md:p-6 md:pt-10 md:pb-10">
    <div class="flex flex-col md:flex-row justify-between items-center pb-4">
      <div class="flex justify-between gap-2">
        <a href="/"><p>Главная ></p></a>
        <a href="/shipping"><p>Доставка и оплата</p></a>
      </div>
    </div>
  </div>
  <h1 class="container mx-auto px-6 text-6xl"></h1>

  <div class="container mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
    <!-- Statistics Section -->
    <div class="space-y-6">
      <div class="text-start">
        <h1 class="text-6xl">
          Доставка <br />
          и оплата
        </h1>
      </div>
    </div>

    <!-- Description Section -->
    <div class="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
      <h1 class="text-2xl text-black">Доставка</h1>
      <p>
        Мы осуществляем доставку со склада по Москве и Московской области
        собственной курьерской службой. Транспортными компаниями нашу продукцию
        мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки
        доставки: 4—6 недель
      </p>
      <h1 class="text-2xl text-black">Курьерская доставка</h1>
      <p>
        Покупая светильники в нашем интернет-магазине, вы получаете отличное
        соотношение цены и качества. Мы осуществляем доставку по всей России,
        чтобы каждый клиент мог насладиться прекрасным светом и удобством
        покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис
        тепла и света с NORN LIGHT!
      </p>
      <h1 class="text-2xl text-black">Самовывоз</h1>
      <p>
        Любой заказ можно забрать самостоятельно по адресу: <br />
        г. Москва, Дмитровское шоссе д.100с2
      </p>
    </div>
  </div>
  <div class=" container flex mx-auto py-6  ">
    <img src="/images/map.png" alt="" class="" />
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
