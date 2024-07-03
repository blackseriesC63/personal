<template>
  <div class="relative">
    <div class="mx-auto flex justify-center items-center p-1 py-5">
      <div class="relative">
        <img
          :src="currentImage"
          :alt="`Slider Image ${currentIndex + 1}`"
          class="max-w-full h-auto"
        />
        <div class="absolute bottom-0 left-0 right-10 flex justify-end mb-4">
          <div class="flex">
            <template v-for="(image, index) in images" :key="index">
              <button
                @click="changeSlide(index)"
                :class="[
                  'h-1 w-1 mx-1 rounded-full',
                  {
                    ' bg-gray-500': currentIndex === index,
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
        "/images/slider1.png",
        "/images/slider2.png",
        "/images/slider3.png",
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
