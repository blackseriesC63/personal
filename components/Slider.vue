<template>
  <div class="relative">
    <div class=" mx-auto flex justify-center items-center">
      <div class="relative">
        <img
          :src="currentImage"
          :alt="`Slider Image ${currentIndex + 1}`"
          class="max-w-full h-auto"
        />
        <div class="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          <div class="flex">
            <template v-for="(image, index) in images" :key="index">
              <button
                @click="changeSlide(index)"
                :class="[
                  'h-2 w-2 mx-2 rounded-full',
                  {
                    'bg-blue-500': currentIndex === index,
                    'bg-gray-300': currentIndex !== index,
                  },
                ]"
              ></button>
            </template>
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
      currentIndex: 0,
      images: [
        "/images/slider1.png",
        "/images/slider2.png",
        "/images/slider3.png",
      ],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    changeSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style></style>
