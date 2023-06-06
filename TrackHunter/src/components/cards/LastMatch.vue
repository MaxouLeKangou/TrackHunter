<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { getMatches } from '@/backend';
    import type { MatchData } from '@/types';
    import { player } from '../../pages/index.vue'

    const matches = ref<MatchData[]>([]);

    const identifiant = await player;

  onMounted(async () => {
    try {

      const matchesData = await getMatches(identifiant);
      matches.value = matchesData.map((match: any) => ({
        agent: match[0],
        map: match[1],
        roundswin: match[2],
        roundsloose: match[3],
        kills: match[4],
        deaths: match[5],
        assists: match[6],
        rank: match[7],
        result: match[8],
      }));

    } catch (error) {
      console.error(error);
    }
  });
</script>

<template>

<main class="relative bg-[#101118] rounded-3xl w-full h-full text-white border-box">
    <div class="flex justify-between px-8 items-center pt-12">
        <p class="font-bold text-[22px]">LAST MATCH</p>
        <p class="text-[16px] opacity-50">View All Matches</p>
    </div>
    
    <div class="relative left-[20px] ml-2 mt-8 border-l border-white h-[80%] overflow-y-auto">
        <p class=" font-Ubuntu text-[20px] text-white ml-7 mb-[20px]">TODAY</p>
        <div v-for="match in matches" class="relative mb-2 flex items-center w-[95%] p-4 font-Ubuntu text-[18px] font-500 border-r-[6px]" :class="match.result" :style="`border-color: ${match.result}; background: linear-gradient(to right, #1011181A, ${match.result}80);`">
            <img class="h-12 w-12 rounded-full" :src="match.agent" alt="">
            <div class="text-white pl-2">
                <p class="uppercase">{{ match.map }}</p>
                <div class="flex">
                    <p><span class="text-green">{{ match.roundswin }}</span> / <span class="text-red">{{ match.roundsloose }}</span></p>
                </div>
            </div>
            <div class="absolute top-1/2 transform -translate-y-1/2 left-[50%]">
                <p class="text-white-75">K / D / A</p>
                <p class="text-white">{{ match.kills }} / {{ match.deaths }} / {{ match.assists }}</p>
            </div>
            <img class="h-10 w-10 absolute top-1/2 transform -translate-y-1/2 right-4" :src="match.rank" alt="">
        </div>
    </div>
</main>





    <!-- <main class="grid grid-cols-1 grid-rows-6 box-content rounded-3xl bg-[#101118]">
        <div class="grid-cols-2 text-white font-Ubuntu flex justify-center row-span-1 items-center gap-x-[80px] UHD:gap-x-[200px]">
            <p class="font-bold text-[22px]">LAST MATCH</p>
            <p class="text-[16px] opacity-50">View All Matches</p>
        </div>
        <div class="row-span-5 h-full">
            <div class="absolute mt-3 z-10 ml-[34px] w-3 h-3 rounded-full bg-[#E4AA65]">
                <p class="font-Ubuntu text-[20px] text-white ml-7 -mt-[9px] mb-[20px]">TODAY</p>
                <div v-for="match in matches" class="relative mb-[10px] flex items-center w-[400px] h-[100px] p-4 font-Ubuntu text-[18px] font-semibold border-r-[6px]" :style="`border-color: ${match.result}; background: linear-gradient(to right, #1011181A, ${match.result}80);`">
                    <img class="ml-4 h-[50px] rounded-full" :src="match.agent" alt="">
                    <div class="text-white pl-[20px]">
                    <p class="uppercase">{{ match.map }}</p>
                    <div class="flex">
                        <p><span class="text-green">{{ match.roundswin }}</span> / <span class="text-red">{{ match.roundsloose }}</span></p>
                    </div>
                    </div>
                    <div class="absolute top-1/2 transform -translate-y-1/2 left-[220px]">
                    <p class="text-white-75">K / D / A</p>
                    <p class="text-white">{{ match.kills }} / {{ match.deaths }} / {{ match.assists }}</p>
                    </div>
                    <img class="h-[40px] absolute top-1/2 transform -translate-y-1/2 right-4" :src="match.rank" alt="">
                </div>
            </div>
            <span class="block h-[750px] w-[1px] bg-white ml-10"></span>
        </div>
    </main> -->
</template>