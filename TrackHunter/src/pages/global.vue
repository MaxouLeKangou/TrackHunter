<script setup lang="ts">
    import iconSearch from '@/components/icons/search.vue'
    import Rank from '@/components/cards/rank.vue'
    import Character from '@/components/cards/character.vue'
    import Gun from '@/components/cards/gun.vue'
</script>

<template>
    <header class="flex h-20 items-center justify-between mx-4 font-Ubuntu">
        <iconSearch class="h-6 w-6" />
        <div class="flex items-center gap-2 font-bold text-[12px]">
            <p class="text-white">UC DRACOTIUM</p>
            <p class="text-white-75">#DESTR</p>
            <img class="h-10 rounded-full" src="../img/Profil.png" alt="">
        </div>
    </header>

    <main class="mx-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Rank />
        <Character />
        <Gun />
        <Gun />
    </main>
    <router-view />
</template>