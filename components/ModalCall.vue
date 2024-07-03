<template>
  <transition name="fade">
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
    >
      <div class="bg-white rounded-2xl p-6 w-full max-w-lg mx-2 relative">
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>

        <form @submit.prevent="submitForm" class="p-10 ">
          <h2 class="text-4xl font-bold py-5 pb-7 flex justify-start">
            Заполните, <br />
            и мы перезвоним
          </h2>
          <div class="mb-2">
            <input
              type="text"
              v-model="name"
              placeholder="ФИО"
              class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div class="mb-4">
            <input
              type="tel"
              v-model="phone"
              placeholder="Телефон"
              class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-slate-700 text-white py-2 rounded-full"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isVisible: Boolean,
});

const emit = defineEmits(["close"]);

const name = ref("");
const phone = ref("");

const closeModal = () => {
  emit("close");
};

const submitForm = () => {
  // Handle form submission logic here
  console.log("Form submitted:", { name: name.value, phone: phone.value });
  closeModal();
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
