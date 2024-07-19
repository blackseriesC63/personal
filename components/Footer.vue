<template>
  <header class="flex justify-between items-center py-4 bg-black">
    <nav class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" class="w-10 h-10" />
        <h1 class="text-2xl text-pretty text-white">Personal</h1>
      </div>
      <div class="flex justify-center gap-4 text-2xl flex-grow mt-4 md:mt-0">
        <button class="w-10 h-10">
          <a href="https://github.com/blackseriesC63"
            ><img src="/images/gitWhite.png" alt="GitHub"
          /></a>
        </button>
        <button class="w-10 h-10">
          <a href="https://www.instagram.com/nizom_c63/"
            ><img src="/images/instagram.png" alt="Instagram"
          /></a>
        </button>
        <button class="w-10 h-10">
          <a href="https://www.linkedin.com/in/низомиддин-азам-45178b163/"
            ><img src="/images/linkedin.png" alt="LinkedIn"
          /></a>
        </button>
        <button class="w-10 h-10">
          <a href="https://t.me/nizom_c63"
            ><img src="/images/telegram.png" alt="Telegram"
          /></a>
        </button>
        <button class="w-10 h-10">
          <a href="tel:+998979499190"
            ><img src="/images/telephone.png" alt="Telephone"
          /></a>
        </button>
      </div>
      <div class="mt-4 md:mt-0 text-white">
        <a href="mailto:azamnizomiddin@gmail.com" class="hover:underline"
          >azamnizomiddin@gmail.com</a
        >
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
