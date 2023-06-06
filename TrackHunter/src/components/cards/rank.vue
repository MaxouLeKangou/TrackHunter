<script setup lang="ts">
import { getRank } from '@/backend';
import { player } from '../../pages/index.vue';


const identifiant = await player;
const rank = await getRank(identifiant);

</script>

<template>
  <main class="flex gap-2 items-center justify-center h-[80px] rounded-[24px] bg-gradient-to-r from-[#101118] to-[#2D3743] xl:flex-col xl:h-[280px] xl:w-[257px]">
    <img class="h-10 xl:h-20" :src="rank[0]" alt="">
    <div class="font-Ubuntu text-center">
      <h3 class="text-[12px] text-white text-bold xl:text-[20px]">{{ rank[1] }}</h3>
      <p class="text-[10px] text-white-75 text-light xl:text-[16px]">{{ rank[2] }}</p>
    </div>
  </main>
</template>
