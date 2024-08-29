<script setup>
import { ref } from "vue";
import items from "../data.json";
import CardItems from "./components/CardItems.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

const data = ref(items);
</script>

<template>
  <div class="lg:grid grid-cols-4 gap-6 p-6">
    <h2 class="col-span-4 text-3xl font-bold mb-4">Desserts</h2>

    <CardItems :data="data" />

    <ShoppingCart />
  </div>
</template>
