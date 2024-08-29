<script setup>
import { defineProps } from "vue";
import CardButton from "./CardButton.vue";

defineProps({
  data: Array,
});
</script>

<template>
  <div class="grid md:grid-cols-2 md:grid-span-2 lg:grid-cols-3 lg:col-span-3 gap-6">
    <div v-for="item in data" :key="item.name">
      <div class="relative">
        <img
          :src="item.image.desktop"
          :alt="item.name"
          class="w-full h-56 object-cover rounded-lg"
        />
        <CardButton :item="item" />
      </div>

      <div class="mt-8">
        <p class="text-gray-400">{{ item?.category }}</p>
        <h3 class="text-lg font-semibold">{{ item.name }}</h3>
        <p class="text-orange-500 font-semibold">
          ${{ item.price.toFixed(2) }}
        </p>
      </div>
    </div>
  </div>
</template>
