<script setup lang="ts">
    import { createAccount } from '../backend'
    import { ref } from 'vue'

    const pseudo = ref('')
    const email = ref('')
    const password = ref('')
</script>

<template>
    <main class="h-[90vh] px-4 flex flex-col justify-center">
        <h1 class="text-white text-3xl text-center my-10">Account Creation</h1>
        <form class="flex flex-col items-center gap-4">
            <input type="text" v-model="pseudo" placeholder="pseudo" class="bg-black-75 text-white h-12 w-full rounded-[6px] px-4 focus:outline-none focus:ring focus:ring-white-10 ease-in-out duration-300 md:w-1/3">
            <input type="email" v-model="email" placeholder="email" class="bg-black-75 text-white h-12 w-full rounded-[6px] px-4 focus:outline-none focus:ring focus:ring-white-10 ease-in-out duration-300 md:w-1/3">
            <input type="password" v-model="password" placeholder="password" class="bg-black-75 text-white h-12 w-full rounded-[6px] px-4 focus:outline-none focus:ring focus:ring-white-10 ease-in-out duration-300 md:w-1/3">
        </form>
        
        <div class="flex justify-center my-10"><button class="text-white bg-blue-25 w-[180px] h-[40px] rounded-[6px]" type="submit" @pointerdown="createAccount(pseudo, email, password)">Create</button></div>

    </main>
</template>