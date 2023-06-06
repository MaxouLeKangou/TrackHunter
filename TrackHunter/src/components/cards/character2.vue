<script setup lang="ts">
    import { getAgent } from '@/backend';
    import { player } from '../../pages/index.vue';

    const identifiant = player;
    const agent = await getAgent(identifiant, 1);
</script>

<template>
    <main class="relative flex gap-2 items-center justify-between h-[80px] rounded-[24px] bg-gradient-to-r from-[#101118] to-[#432D42] xl:flex-col xl:h-[280px] xl:w-[257px] xl:justify-center">
        <div class="z-40 text-left flex flex-col pl-5 gap-[4px] xl:w-[280px] xl:pl-[40px]">
            <h3 class="text-[12px] font-Anton text-white tracking-wider xl:text-[30px]">{{ agent?.[0] }}</h3>
            <div class="text-[8px] font-Ubuntu">
                <p class="text-white-50 text-light xl:text-[20px]">Win Ratio</p>
                <p class="text-white-75 font-bold xl:text-[20px]">{{ agent?.[2] }}</p>
            </div>
        </div>
        <div class="absolute inset-0 rounded-[24px] overflow-hidden xl:overflow-visible">
            <img class="h-[80%] object-cover pt-[40px] pl-[100px] m-0" :src="agent?.[1]" alt="">
        </div>
    </main>
</template>