<script setup lang="ts">
    import iconSearch from '@/components/icons/search.vue'
    import Rank from '@/components/cards/rank.vue'
    import Character from '@/components/cards/character.vue'
    import Character2 from '@/components/cards/character2.vue'
    import Gun from '@/components/cards/gun.vue'
    import Overview from '@/components/cards/overview.vue'
    import Matchs from '@/components/cards/LastMatch.vue'
    import IconAreas from '@/components/icons/area.vue'
    import IconCharacters from '@/components/icons/character.vue'
    import IconShots from '@/components/icons/target.vue'
    import IconGlobal from '@/components/icons/global.vue'
    import Search from '@/components/cards/SearchPopup.vue'

    import { RouterLink, RouterView } from 'vue-router'
    import { ref } from 'vue'

    import { name } from './index.vue'
    const open = ref(false);
    
    const text = name.split('#');

</script>

<template>
    <main class="h-screen">
        <div class="relative h-full grid grid-cols-7 grid-rows-9 gap-4">
            <div v-show="open" class="absolute inset-0 flex">
                <div class="absolute inset-0 flex justify-center items-center w-auto h-auto">
                    <Search class="z-30"/>
                </div>
                <div @click="open =! open" class="bg-black fixed inset-0 flex bg-opacity-70 z-20 w-full h-full"></div>
            </div>
            <div class="grid-cols-3 row-span-5 grid">
                <div class="bg-[#101118] col-span-2 grid grid-rows-5">
                    <img class="h-[70px] mt-[30px] row-span-1" src="../assets/logoapp.svg" alt="logo site">
                    <div class="row-span-3 grid justify-center content-center items-center">
                        <div class="w-[60px] h-[60px] rounded-[15px] border m-4 mb-[80px]"><iconSearch @click="open =! open" class="h-8 mt-[14px] -ml-[5px] cursor-pointer"/></div>
                        <div class="w-[60px] h-[60px] rounded-[15px] border m-4"><RouterLink to="/globalShow"><IconGlobal class="h-8 mt-[14px] -ml-[5px]" /></RouterLink></div>
                        <div class="w-[60px] h-[60px] rounded-[15px] border m-4"><RouterLink to="/shots"><IconShots class="h-8 mt-[14px] -ml-[5px]"/></RouterLink></div>
                        <div class="w-[60px] h-[60px] rounded-[15px] border m-4"><RouterLink to="/characters"><IconCharacters class="h-8 mt-[14px] -ml-[5px]" /></RouterLink></div>
                        <div class="w-[60px] h-[60px] rounded-[15px] border m-4"><RouterLink to="/maps"><IconAreas class="h-8 mt-[14px] -ml-[5px]" /></RouterLink></div>
                    </div>
                    <div class="row-span-1 grid justify-center items-center">
                        <RouterLink to="/auth"><img class="h-[80px] rounded-full" src="../img/Profil.png" alt=""></RouterLink>
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
                    <p class="text-white">{{ text[0] }}</p>
                    <p class="text-white-75">#{{ text[1] }}</p>
                    <img class="h-[80px] rounded-full" src="../img/Profil.png" alt="">
                </div>
            </div>
            <div class="relative col-span-4 row-span-1 grid grid-cols-2 xl:grid-cols-3 UHD:grid-cols-4 items-center">
                <rank class="ml-3" />
                <Character class="ml-3"/>
                <Character2 class="hidden ml-3 xl:flex"/>
            </div>
            <div class=" col-span-2 row-span-4 mr-[40px] ml-[15px] mt-[15px]">
                <Matchs />
            </div>
            <div class="col-span-3 row-span-3 mt-[5px]">
                <Overview />
            </div>
            <div class="relative col-span-1 row-span-3 grid justify-center">
                <Gun />
                <Gun />
            </div>
        </div>
    </main>
    <router-view />
</template>