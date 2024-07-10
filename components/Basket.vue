<template>
  <div class="container mx-auto">
    <div class="flex justify-between gap-2 py-4">
      <a href="/"><p>Главная ></p></a>
      <a href="/Basket"><p>Корзина</p></a>
    </div>

    <div class="flex justify-center">
      <h1 class="text-5xl">Корзина</h1>
      <span
        v-if="basketCount > 0"
        class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
        >{{ basketCount }}</span
      >
    </div>

    <div class="py-5">
      <div class="bg-white rounded-lg">
        <div class="space-y-6 bg-gray-100 rounded-2xl p-5">
          <div v-if="basketProducts.length" class="space-y-4">
            <div
              v-for="product in basketProducts"
              :key="product.id"
              class="flex flex-col md:flex-row justify-between p-4 border-b"
            >
              <div class="w-full md:w-1/5 mb-4 md:mb-0 md:flex-shrink-0">
                <p class="p-4">Фото</p>
                <img
                  :src="product.image"
                  alt="image"
                  class="w-20 h-20 rounded-xl mx-auto md:mx-0"
                />
              </div>
              <div class="w-full md:w-1/5 mb-4 md:mb-0">
                <p class="p-4">Товары</p>
                <h2 class="text-lg font-semibold">{{ product.title }}</h2>
                <p>{{ product.newPrice }}₽</p>
              </div>
              <div class="w-full md:w-1/5 mb-4 md:mb-0">
                <p class="p-4">Описание</p>
                <p>{{ product.description }}</p>
              </div>
              <div class="w-full md:w-1/5 mb-4 md:mb-0">
                <p class="p-4">Артикул</p>
                <p>RAD-COMBO-50/XXX/230</p>
              </div>
              <div class="w-full md:w-1/5 mb-4 md:mb-0">
                <p class="p-4">Количество</p>
                <div class="flex items-center rounded-xl p-4">
                  <button
                    @click="() => decrementQuantity(product)"
                    class="px-2"
                  >
                    -
                  </button>
                  <input
                    :value="product.quantity"
                    class="w-14 text-center border-l border-r"
                  />
                  <button
                    @click="() => incrementQuantity(product)"
                    class="px-2"
                  >
                    +
                  </button>
                  <button @click="() => removeFromBasket(product)">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6H5H21"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6M19 6V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V6H19Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p>Корзина пуста</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <div class="bg-gray-100 rounded-2xl p-8">
        <h2 class="text-xl font-semibold mb-4">Оформление</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="ФИО"
            class="border rounded-xl p-2 bg-gray-100"
          />
          <input
            type="text"
            placeholder="Телефон"
            class="border rounded-xl p-2 bg-gray-100"
          />
          <input
            type="email"
            placeholder="Электронная Почта"
            class="border rounded-xl p-2 bg-gray-100"
          />
        </div>
        <div class="mt-8">
          <h2 class="text-xl font-semibold mb-4 bg-gray-100">Доставка</h2>
          <input
            type="text"
            placeholder="Адрес доставки"
            class="w-full md:w-2/3 border rounded-xl p-2 mb-4 bg-gray-100"
          />
          <textarea
            placeholder="Комментарий"
            class="w-full md:w-2/3 border p-2 bg-gray-100 h-32 rounded-xl"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <div class="bg-gray-100 rounded-2xl p-8">
        <h2 class="text-xl font-semibold mb-4">Оплата</h2>
        <div class="flex justify-between mb-4">
          <div class="flex w-full md:w-2/3 mb-4">
            <span>Товары</span>
            <p>:</p>
            <span>{{ totalPrice }}₽</span>
          </div>
          <div class="flex w-full md:w-2/3 mb-4">
            <span>Доставка</span>
            <p>:</p>
            <span>{{ deliveryFee }}₽</span>
          </div>
        </div>
        <div class="flex justify-between font-semibold text-lg mb-4">
          <span>{{ grandTotal }}₽</span>
        </div>
        <div class="flex justify-between">
          <div class="w-full md:w-2/3 pr-4">
            <button class="w-full bg-black text-white py-2 rounded-full">
              Купить
            </button>
          </div>
          <div class="items-center text-sm w-full md:w-2/3 pt-2">
            <input type="checkbox" class="rounded-full p-2" />
            <label for="agreement" class="p-2"
              >Я согласен на обработку моих персональных данных</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePiniaStore } from "../../store";
import { computed } from "vue";

const store = usePiniaStore();

const basketProducts = computed(() => store.basket);

const removeFromBasket = (product) => {
  store.removeProductFromBasket(product);
};

const incrementQuantity = (product) => {
  store.incrementQuantity(product);
};

const decrementQuantity = (product) => {
  store.decrementQuantity(product);
};

const totalPrice = computed(() =>
  basketProducts.value.reduce(
    (total, product) => total + product.newPrice * product.quantity,
    0
  )
);

const deliveryFee = 580;
const grandTotal = computed(() => totalPrice.value + deliveryFee);

const basketCount = computed(() => store.basket.length);
</script>

<style scoped>
/* Add any custom styles here */
</style>
