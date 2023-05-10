<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <li>
    <RouterLink to="/global" class="px-10">global</RouterLink>
  </li>
</template>
