<template>
  <div class="relative overflow-hidden">
    <div
      class="slider-container mx-auto flex items-center p-1 py-5"
      @mousedown="startDrag"
      @touchstart="startDrag"
      @mouseup="endDrag"
      @touchend="endDrag"
      @mousemove="drag"
      @touchmove="drag"
      @mouseleave="endDrag"
    >
      <div
        class="slider-track flex transition-transform duration-300"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slider-item min-w-full"
        >
          <img
            :src="image"
            :alt="`Slider Image ${index + 1}`"
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 right-0 flex justify-end mb-4 mr-4 pb-6 pr-6">
      <div class="flex">
        <template v-for="(image, index) in images" :key="index">
          <button
            @click="changeSlide(index)"
            :class="[
              'h-3 w-3 mx-1 rounded-full',
              {
                'bg-gray-500': currentIndex === index,
                'bg-gray-300': currentIndex !== index,
              },
            ]"
          ></button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      startPosition: 0,
      currentTranslate: 0,
      previousTranslate: 0,
      isDragging: false,
      images: [
        "/images/slider1.png",
        "/images/slider1.png",
        "/images/slider1.png",
        "/images/slider1.png",
        "/images/slider1.png",
      ],
    };
  },
  methods: {
    changeSlide(index) {
      this.currentIndex = index;
    },
    startDrag(event) {
      this.isDragging = true;
      this.startPosition = this.getPositionX(event);
    },
    endDrag() {
      this.isDragging = false;
      const movedBy = this.currentTranslate - this.previousTranslate;

      if (movedBy < -50 && this.currentIndex < this.images.length - 1) {
        this.currentIndex += 1;
      }

      if (movedBy > 50 && this.currentIndex > 0) {
        this.currentIndex -= 1;
      }

      this.setPositionByIndex();
    },
    drag(event) {
      if (!this.isDragging) return;
      const currentPosition = this.getPositionX(event);
      this.currentTranslate =
        this.previousTranslate + currentPosition - this.startPosition;
    },
    getPositionX(event) {
      return event.type.includes("mouse")
        ? event.pageX
        : event.touches[0].clientX;
    },
    setPositionByIndex() {
      this.currentTranslate = this.currentIndex * -window.innerWidth;
      this.previousTranslate = this.currentTranslate;
    },
  },
  mounted() {
    this.setPositionByIndex();
    window.addEventListener("resize", this.setPositionByIndex);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setPositionByIndex);
  },
};
</script>

<style scoped>
.slider-container {
  cursor: grab;
  overflow: hidden;
}
.slider-container:active {
  cursor: grabbing;
}
.slider-track {
  display: flex;
}
.slider-item {
  flex: 0 0 100%;
}
</style>
