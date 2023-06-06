<script setup lang="ts">
    import MiniCard from '@/components/cards/miniperso.vue'
    import MiniCard2 from '@/components/cards/miniperso2.vue'
    import MiniCard3 from '@/components/cards/miniperso3.vue'
</script>

<script lang="ts">
    import { requestPlayer } from '@/backend';
    export const name = 'UC DracotiuM#2TAPS';
    export const player = await requestPlayer(name);
</script>
<template>
    <main class="screen">
        <div class="h-full grid grid-cols-4 grid-rows-4">
            <div class="col-span-1 row-span-1 grid-cols-1 flex justify-center">
                <img class="left-0 top-0 w-[200px]" src="../assets/logoapp.svg" alt="logo site">
            </div>
            <div class="lg:col-start-2 col-span-4 lg:col-span-2 row-start-2 row-span-1 content-center grid">
                <div class="relative h-[60px] rounded-3xl bg-white">
                    <input class="absolute pl-[50px] top-[13px] w-full text-[22px] rounded-3xl font-Ubuntu opacity-50" placeholder="SEARCH A PLAYER">
                </div>
            </div>
            <div class="lg:col-start-2 col-start-2 col-span-4 lg:col-span-2 row-span-2 flex lg:grid lg:grid-cols-2 xl:grid-cols-3 content-center items-center">
                <MiniCard />
                <MiniCard2 class="hidden xl:grid" />
                <MiniCard3 class="hidden lg:grid" />
            </div>
        </div>
        <div class="fixed z-30 bg-black w-full h-[100px] bottom-0"></div>
    </main>
</template>