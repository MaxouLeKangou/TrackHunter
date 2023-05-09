<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <li>
    <RouterLink to="/global">global</RouterLink>
  </li>
</template>
