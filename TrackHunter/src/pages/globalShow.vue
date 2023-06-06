<script setup lang="ts">
    import PC from '@/pages/globalPC.vue'
    import Mobile from '@/pages/globalMobile.vue'
</script>

<template>
    <div class="hidden xl:grid">
        <PC />
    </div>
    <div class="xl:hidden pb-[100px]">
        <Mobile />
    </div>
    <router-view />
</template>