<script setup>
import useCounter from '../composable/useCount.js'
import {useState} from 'vuex-composition-helpers/dist'
import { useStore } from 'vuex';
import Button from '../components/Button.vue';

const store = useStore()
const {number} = useState(['number'])
console.log(number.value)

// v-model updates this variable
let num = ''

const {increment,decrement,reset,setValue} = useCounter(num,store)
</script>

<template>
    <div class="h-screen counter w-full flex flex-col gap-5 justify-center bg-black text-white items-center">
        <!-- <h1 class="text-4xl font-bold text-blue-500 ">Counter Page</h1>  -->

        <div class="">
            <h1 class="text-8xl font-bold text-blue-500"> {{ number }}</h1>
        </div>

        <div class="">
            <input type="text" class=" border text-black border-sltae-200 rounded-md h-10 py-6 outline-none px-3 shadow-md shadow-slate-200" placeholder="set value" v-model="num" />
            <button @click="setValue(num)" class="bg-blue-500 text-white border border-blue-500 px-3 py-3 rounded-md font-extrabold text-xl">Set</button>
        </div>
        

        
        <div class="mt-5">
            <div class="flex justify-center items-center gap-5">
                    <button @click="decrement()" class="bg-blue-500 text-white px-2 rounded-ms  py-3 text-xl font-bold">Minus</button>
                    <button @click="reset()" class="bg-red-500 text-white px-2 rounded-ms  py-3 text-xl font-bold">Reset</button>
                    <button @click="increment()" class="bg-blue-500 text-white px-2 rounded-ms  py-3 text-xl font-bold">Add</button>
            </div>
        </div> 

            <router-link to='/' class="mt-7" >
                    <Button text="Home"  class="btn"/>

            </router-link>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,700&family=Kanit:wght@400;700&display=swap');
    .counter{
    

    }
    h1{
    font-family: 'Kanit', sans-serif;
}    

</style>