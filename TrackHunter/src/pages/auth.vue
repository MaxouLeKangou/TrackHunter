<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import { authAccount, checkUp, leaveAccount, userData } from '@/backend'
    import { ref } from 'vue'

    const email = ref('')
    const password = ref('')
</script>

<template>
    <main class="">
        <RouterLink to="/globalShow" class="text-white-50 absolute top-4 left-10">Back</RouterLink>
        <section class="h-[90vh] px-4 flex flex-col justify-center" v-if="checkUp == false">
            <h1 class="text-white text-3xl text-center my-10">Authentification</h1>
            <form class="flex flex-col items-center gap-4">
                <input type="email" v-model="email" placeholder="email" class="bg-black-75 text-white h-12 w-full rounded-[6px] px-4 focus:outline-none focus:ring focus:ring-white-10 ease-in-out duration-300 md:w-1/3">
                <input type="password" v-model="password" placeholder="password" class="bg-black-75 text-white h-12 w-full rounded-[6px] px-4 focus:outline-none focus:ring focus:ring-white-10 ease-in-out duration-300 md:w-1/3">
                <a class="w-full my-0 text-white-50 text-right md:w-1/3">Forgot your password</a>
            </form>
            
            <div class="flex justify-center my-10"><button class="text-white bg-blue-25 w-[180px] h-[40px] rounded-[6px]" type="submit" @pointerdown="authAccount(email, password)">Connection</button></div>
            <RouterLink to="/createaccount" class="text-white-50 text-center">Create Account</RouterLink>
        </section>

        <section class="h-[90vh] px-4 flex flex-col justify-center" v-else="checkUp == true">
            <h1 class="text-white text-3xl text-center my-10">Account</h1>
            <div>
                <p class="text-white text-center">Pseudo : {{ userData.username }}</p>
                <p class="text-white text-center">Email : {{ userData.email }}</p>
            </div>
            <div class="mt-10">
                <p class="text-white text-center">Link Account : One day maybe !</p>
            </div>
            <div class="flex justify-center my-10"><button class="text-white bg-blue-25 w-[180px] h-[40px] rounded-[6px]" type="submit" @pointerdown="leaveAccount()">Disconnect</button></div>
        </section>

    </main>
</template>