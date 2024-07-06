<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex justify-center">
      <img src="/images/404.png" alt="" class="p-10 max-w-full h-auto" />
    </div>
    <div class="flex justify-center pt-10">
      <p>Ничего не нашлось :(</p>
    </div>
    <div class="flex justify-center pt-10 pb-10">
      <nuxt-link to="/">
        <button class="bg-black rounded-full text-white px-6 py-2">
          На главную
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<style>
/* Optional: Add styles as needed */
</style>
