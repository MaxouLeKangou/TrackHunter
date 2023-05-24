<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import IconAreas from '@/components/icons/area.vue'
  import IconCharacters from '@/components/icons/character.vue'
  import IconShots from '@/components/icons/target.vue'
  import IconGlobal from '@/components/icons/global.vue'
  import IconProfil from '@/components/icons/profil.vue'

  import { ref } from 'vue'
  const state = ref(1);
</script>

<template>
  <RouterView />
  <nav class="fixed bottom-0 bg-black-75 w-full h-20 flex justify-content space-x-[1%] place-content-center items-center rounded-tl-[24px] rounded-tr-[24px] ">
    <RouterLink to="/characters"><IconCharacters class="h-6" :class="{ 'fill-blue': state == 0 }" /></RouterLink>
    <RouterLink to="/shots"><IconShots class="h-6" :class="{ 'fill-blue': state == 0 }"/></RouterLink>
    <RouterLink to="/global"><IconGlobal class="h-6" :class="{ 'fill-blue': state == 0 }" /></RouterLink>
    <RouterLink to="/maps"><IconAreas class="h-6" :class="{ 'fill-blue': state == 0 }" /></RouterLink>
    <RouterLink to="/profil"><IconProfil class="h-6" :class="{ 'fill-blue': state == 0 }" /></RouterLink>
  </nav>
  
</template>
