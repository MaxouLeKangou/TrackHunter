<script setup lang="ts">
    import { getOverview } from '@/backend';
    import { player } from '../../pages/index.vue';

    const identifiant = await player;
    const overview = await getOverview(identifiant);
</script>

<template>
    <header class="h-[0px]">
        <div class="grid grid-cols-2 translate-y-[10px] px-5 xl:px-10 xl:pt-3 pt-0 items-center">
            <p class="text-[10px] xl:text-[20px] font-bold text-left text-white">
                OVERVIEW
            </p>
            <div class="w-[70.12px] h-[19.48px] xl:w-[180px] xl:h-[50px] ml-auto rounded-md border border-white/10">
                <p class="text-[8px] xl:text-[16px] font-bold ml-2 translate-y-[2px] xl:translate-y-[11px] xl:ml-5 text-white/75">E6:ACT2</p>
            </div>
        </div>
    </header>
    <main class="grid grid-cols-2 items-center justify-center h-auto p-[60px] rounded-[24px] bg-[#101118] xl:flex-col xl:h-[580px]">
        <div class="grid grid-cols-1 gap-y-[35px] translate-y-[35px] xl:translate-y-[-115px] xl:gap-x-[70px] xl:grid-cols-2">
            <div class="translate-x-[-40px] xl:translate-x-[150px]">
                <h3 class="absolute text-[10px] xl:text-[20px] top-[4px] xl:w-[100px] xl:top-[8px] left-2 xl:left-5 z-10 font-ubuntu text-white font-bold">{{ overview[0].win }} WINS</h3>
                <div class="absolute w-[90px] h-[24px] xl:w-[180px] xl:h-[50px] bg-gradient-to-r from-[#2bb299]/50 to-[#101118]/10"></div>
                <div class="absolute w-[2.34px] h-[24px] xl:h-[50px] xl:w-[6px] rounded-tr-3xl rounded-br-3xl bg-[#2bb299]"></div>
            </div>
            <div class="translate-x-[-40px] xl:translate-x-[150px]">
                <h3 class="absolute text-[10px] xl:text-[20px] top-[4px] xl:w-[100px] xl:top-[8px] left-2 xl:left-5 z-10 font-ubuntu text-white font-bold">{{ overview[0].loses }} LOSES</h3>
                <div class="absolute w-[90px] h-[24px] xl:w-[180px] xl:h-[50px] bg-gradient-to-r from-[#ea5a60]/50 to-[#101118]/10"></div>
                <div class="absolute w-[2.34px] h-[24px] xl:h-[50px] xl:w-[6px] rounded-tr-3xl rounded-br-3xl bg-[#ea5a60]"></div>
            </div>
        </div>
        <div class="grid grid-cols-2 xl:grid-cols-3 translate-x-[-40px] translate-y-[10px] xl:translate-x-[-300px] UHD:translate-x-[-350px] xl:translate-y-[140px] gap-x-[120px] gap-y-[60px] xl:gap-y-[100px] xl:gap-x-[200px] UHD:gap-x-[250px]">
            <div class="relative top-[-20px] left-[0px]">
                <p class="absolute text-[10px] xl:text-[16px] top-[3px] xl:top-[13px] left-2 xl:left-7 z-10 text-white font-light">Damage/Round</p>
                <h3 class="absolute text-[12px] xl:text-[20px] top-[17px] xl:top-[32px] left-2 xl:left-7 z-10 font-ubuntu text-white font-bold">{{ overview[0].damage_per_round }}</h3>
                <div class="absolute w-[2.43px] h-10 xl:h-[80px] xl:w-[6px] rounded-tr-3xl rounded-br-3xl bg-[#2492b1]"></div>
                <div class="absolute w-[97px] h-10 xl:w-[200px] xl:h-[80px] bg-gradient-to-r from-[#2492b1]/50 to-[#101118]/10"></div>
            </div>
            <div class="relative top-[-20px] left-[0px]">
                <p class="absolute text-[10px] xl:text-[16px] top-[3px] xl:top-[13px] left-2 xl:left-7 z-10 text-white font-light">Kills</p>
                <h3 class="absolute text-[12px] xl:text-[20px] top-[17px] xl:top-[32px] left-2 xl:left-7 z-10 font-ubuntu text-white font-bold">{{ overview[0].kills }}</h3>
                <div class="absolute w-[2.43px] h-10 xl:h-[80px] xl:w-[6px] rounded-tr-3xl rounded-br-3xl bg-[#2492b1]"></div>
                <div class="absolute w-[97px] h-10 xl:h-[80px] xl:w-[200px] bg-gradient-to-r from-[#2492b1]/50 to-[#101118]/10"></div>
            </div>
            <div class="relative top-[-20px] left-[0px]">
                <p class="absolute text-[10px] xl:text-[16px] top-[3px] xl:top-[13px] left-2 xl:left-7 z-10 text-white font-light">Death</p>
                <h3 class="absolute text-[12px] xl:text-[20px] top-[17px] xl:top-[32px] left-2 xl:left-7 z-10 font-ubuntu text-white font-bold">{{ overview[0].deaths }}</h3>
                <div class="absolute w-[2.43px] h-10 xl:h-[80px] xl:w-[6px] rounded-tr-3xl rounded-br-3xl bg-[#2492b1]"></div>
                <div class="absolute w-[97px] h-10 xl:h-[80px] xl:w-[200px] bg-gradient-to-r from-[#2492b1]/50 to-[#101118]/10"></div>
            </div>
            <div class="relative top-[-20px] left-[0px]">
                <p class="absolute text-[10px] xl:text-[16px] top-[3px] xl:top-[13px] left-2 xl:left-7 z-10 text-white font-light">Assists</p>
                <h3 class="absolute text-[12px] xl:text-[20px] top-[17px] xl:top-[32px] left-2 xl:left-7 z-10 font-ubuntu text-white font-bold">{{ overview[0].assists }}</h3>
                <div class="absolute w-[2.43px] h-10 xl:h-[80px] xl:w-[6px] rounded-tr-3xl rounded-br-3xl bg-[#2492b1]"></div>
                <div class="absolute w-[97px] h-10 xl:h-[80px] xl:w-[200px] bg-gradient-to-r from-[#2492b1]/50 to-[#101118]/10"></div>
            </div>
            <div class="relative top-[-20px] left-[0px]">
                <p class="absolute text-[10px] xl:text-[16px] top-[3px] xl:top-[13px] left-2 xl:left-7 z-10 text-white font-light">K/D</p>
                <h3 class="absolute text-[12px] xl:text-[20px] top-[17px] xl:top-[32px] left-2 xl:left-7 z-10 font-ubuntu text-white font-bold">{{ overview[0].kd }}</h3>
                <div class="absolute w-[2.43px] h-10 xl:h-[80px] xl:w-[6px] rounded-tr-3xl rounded-br-3xl bg-[#2492b1]"></div>
                <div class="absolute w-[97px] h-10 xl:h-[80px] xl:w-[200px] bg-gradient-to-r from-[#2492b1]/50 to-[#101118]/10"></div>
            </div>
            <div class="relative top-[-20px] left-[0px]">
                <p class="absolute text-[10px] xl:text-[16px] top-[3px] xl:top-[13px] left-2 xl:left-7 z-10 text-white font-light">Headshot</p>
                <h3 class="absolute text-[12px] xl:text-[20px] top-[17px] xl:top-[32px] left-2 xl:left-7 z-10 font-ubuntu text-white font-bold">{{ overview[0].headshot }}</h3>
                <div class="absolute w-[2.43px] h-10 xl:h-[80px] xl:w-[6px] rounded-tr-3xl rounded-br-3xl bg-[#2492b1]"></div>
                <div class="absolute w-[97px] h-10 xl:h-[80px] xl:w-[200px] bg-gradient-to-r from-[#2492b1]/50 to-[#101118]/10"></div>
            </div>
        </div>
    </main>
</template>