<template>
  <div class="container mx-auto p-8 flex flex-col md:flex-row">
    <div class="w-full md:flex justify-between items-center">
      <div class="w-full md:w-2/3">
        <div class="mb-8">
          <h1 class="text-3xl md:text-4xl text-gray-800 leading-tight">
            Hello I'm <span class="font-bold">Nizomiddin Azam.</span> <br />
            <span class="font-bold">Fullstack</span>
            <span class="font-extrabold outline-text"> Developer </span>
            <br />
            <span>Based In </span>
            <span class="font-extrabold">Uzbekistan.</span>
          </h1>
        </div>
        <div>
          <p class="text-gray-700 leading-relaxed">
            My name is Nizomiddin. I am 26 years old and I am a Junior Fullstack
            Developer with a solid foundation in creating and maintaining
            scalable websites. I am fluent in Russian, English, and Uzbek. I
            enrolled in Westminster University in Tashkent and after completing
            my second year in 2019, I moved to the USA. I lived in the USA for 4
            years and returned last year.
          </p>
        </div>
      </div>
      <div class="w-full md:w-1/3 flex h-full mt-8 md:mt-0">
        <img
          src="/images/Banner.png"
          alt="Illustration"
          class="w-full h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.outline-text {
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
