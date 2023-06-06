<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <RouterLink to="/globalShow" class="bg-[#101118] rounded-3xl h-[350px] w-[250px] grid grid-cols-1 items-center">
        <div class="grid justify-center text-center gap-y-4 mt-[15px]">
            <div class="flex justify-center"><img class="rounded-full w-[100px]" src="@/img/Profil.png" alt="pp profil"></div>
            <p class="text-red font-Anton text-[22px]">DSTRY Diamond</p>
            <div>
                <p class="font-Ubuntu text-[18px] font-bold text-white">TOP</p>
                <p class="font-Ubuntu text-[18px] font-bold text-white">#20578</p>
            </div>
        </div>
        <p class="font-Ubuntu text-[16px] font-light text-white opacity-50 text-center">VALORANT</p>
    </RouterLink>
</template>