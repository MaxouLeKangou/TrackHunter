<script setup lang="ts">
    import iconSearch from '@/components/icons/search.vue'
    import next from '@/components/icons/next.vue'
    import mapCard from '@/components/cards/Cardmaps.vue'
    import Matchs from '@/components/cards/LastMatch.vue'
    import IconAreas from '@/components/icons/area.vue'
    import IconCharacters from '@/components/icons/character.vue'
    import IconShots from '@/components/icons/target.vue'
    import IconGlobal from '@/components/icons/global.vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { ref } from 'vue'
    const state = ref(1);
    
</script>
<template>
    <main class="h-screen w-screen bg-blue-25 text-white text-center items-center px-[30px] flex flex-col justify-center gap-4 xl:hidden">
        <h1 class="font-Anton text-2xl">ERROR</h1>
        <p class="font-Ubuntu">Once upon a time the page which appears on mobile</p>
    </main>
    <main class="h-screen hidden xl:grid">
        <div class="h-full grid grid-cols-7 grid-rows-9 gap-4">
            <div class="grid-cols-3 row-span-5 grid">
                <div class="bg-[#101118] col-span-2 grid grid-rows-5">
                    <img class="h-[70px] mt-[30px] row-span-1" src="../assets/logoapp.svg" alt="logo site">
                    <div class="row-span-3 grid justify-center content-center items-center">
                        <div class="w-[60px] h-[60px] rounded-[15px] border m-4 mb-[80px]"><iconSearch class="h-8 mt-[14px] -ml-[5px]" :class="{ 'fill-blue': state == 0 }"/></div>
                        <div class="w-[60px] h-[60px] rounded-[15px] border m-4"><RouterLink to="/globalShow"><IconGlobal class="h-8 mt-[14px] -ml-[5px]" :class="{ 'fill-blue': state == 0 }" /></RouterLink></div>
                        <div class="w-[60px] h-[60px] rounded-[15px] border m-4"><RouterLink to="/shots"><IconShots class="h-8 mt-[14px] -ml-[5px]" :class="{ 'fill-blue': state == 0 }"/></RouterLink></div>
                        <div class="w-[60px] h-[60px] rounded-[15px] border m-4"><RouterLink to="/characters"><IconCharacters class="h-8 mt-[14px] -ml-[5px]" :class="{ 'fill-blue': state == 0 }" /></RouterLink></div>
                        <div class="w-[60px] h-[60px] rounded-[15px] border m-4"><RouterLink to="/maps"><IconAreas class="h-8 mt-[14px] -ml-[5px]" :class="{ 'fill-blue': state == 0 }" /></RouterLink></div>
                    </div>
                    <div class="row-span-1 grid justify-center items-center">
                        <RouterLink to="/profil"><img class="h-[80px] rounded-full" src="../img/Profil.png" alt=""></RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-span-4 row-span-1 text-white grid content-end">
                <div class="rounded-3xl bg-[#101118] h-[80px] grid grid-cols-5 content-center text-center font-Ubuntu text-[22px] font-bold">
                    <div class="rounded-2xl bg-white/[0.03] h-[50px] grid content-center ml-[15px]"><p>COMPETITIVE</p></div>
                    <div class="h-[50px] grid content-center opacity-70"><p>UNRATED</p></div>
                    <div class="h-[50px] grid content-center opacity-70"><p>DEATHMATCH</p></div>
                    <div class="h-[50px] grid content-center opacity-70"><p>SWIFTPLAY</p></div>
                    <div class="h-[50px] grid content-center opacity-70 mr-[10px]"><p>SPIKE RUSH</p></div>
                </div>
            </div>
            <div class="col-span-2 row-span-1">
                <div class="flex items-center font-bold gap-2 text-[20px] justify-end mt-[50px] mr-[40px]">
                    <p class="text-white">UC DRACOTIUM</p>
                    <p class="text-white-75">#DESTR</p>
                    <img class="h-[80px] rounded-full" src="../img/Profil.png" alt="">
                </div>
            </div>
            <div class="relative col-span-4 row-span-1 grid items-center">
                <div class="h-[60px] rounded-md border border-white/10 grid grid-cols-9 text-white font-Ubuntu font-bold content-center">
                    <next class="h-[24px] rotate-180 ml-[20px]" />
                    <p>ALL ACT</p>
                    <p>EP6:ACT2</p>
                    <p>EP6:ACT1</p>
                    <p>EP5:ACT3</p>
                    <p>EP5:ACT2</p>
                    <p>EP5:ACT1</p>
                    <p>EP4:ACT3</p>
                    <next class="h-[24px]" />
                </div>
            </div>
            <div class="rounded-3xl bg-[#101118] col-span-2 row-span-4 mr-[40px] ml-[15px] mt-[15px]">
                <Matchs />
            </div>
            <div class="col-span-4 row-span-3 grid grid-rows-4 mt-[5px]">
                <mapCard />
                <mapCard />
                <mapCard />
                <mapCard />
            </div>
        </div>
    </main>
</template>