<script setup>
import { RouterLink } from "vue-router";
import Button from "../components/Button.vue";
import Img from "../assets/front.jpeg";
import fa from "../assets/fa.png";

const arr = [
  "increment & decrement",
  "Reset Counter",
  "Set Counter",
  "Vuex",
  "Composables",
];
</script>

<template>
  <main
    class="w-full pb-10 flex-vertical h-auto md:h-screen bg-black text-white"
  >
    <nav class="mt-3 h-10 py-4">
      <h2 class="font-extrabold text-2xl pl-6 md:pl-10">Counter App</h2>
    </nav>
    <header
      data-aos="zoom-in"
      class="w-full h-auto md:h-5/6 mt-5 md:mt-3 grid grid-cols-2"
    >
      <div
        class="col-span-2 md:col-span-1 flex flex-col justify-between items-center text-center gap-8 md:justify-center md:items-start md:pl-10 md:text-start py-4"
      >
        <h1 class="w-9/12 h1">
          A better way to build counter apps
        </h1>
        <p class="text-gray-300 w-10/12">
          My name is MERCY, a student of Altschool Africa. This is a counter app built using vue, implementing routers, stores and composition api. Enjoy!!!
        </p>
        <RouterLink to="/counter">
          <Button text="Counter" class="btn" />
        </RouterLink>
      </div>

      <div class="col-span-1 hidden md:block">
        <img :src="Img" alt="girl smiling" class="img" />
      </div>
    </header>

    <div
      class="w-full md:hidden flex flex-col justify-center mt-4 px-6 items-start"
    >
      <h2 class="font-bold text-gray-400 text-2xl my-2">Functionalities</h2>
      <div class="px-2 py-3 flex flex-col gap-4">
        <div
          v-for="text in arr"
          :key="text"
          class="flex justify-start items-center gap-2"
        >
          <img :src="fa" width="30" />
          <h3 class="text-xl font-bold">
            {{ text }}
          </h3>
        </div>
      </div>
    </div>
    <div class="hidden w-10/12 mx-auto md:block">
      <div class="h-40 flex justify-center items-center">
        <h2 class="text-2xl text-gray-400 mx-3">Increment and Decrement</h2>
        <h2 class="text-2xl text-gray-400 mx-3">Reset</h2>
        <h2 class="text-2xl text-gray-400 mx-3">Set Values</h2>
        <h2 class="text-2xl text-gray-400 mx-3">Vuex</h2>
      </div>
    </div>
    <div class="h-20"></div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,700&display=swap");

.wrapper {
  font-family: "Alegreya", serif;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 40% 0;
  padding: 40px;
}
</style>
