<script setup>
import { RouterView } from 'vue-router'
import NavBar from './_components/navbar.vue'


</script>

<template>
  <NavBar />
  <div style="margin-top: 90px;">
    <RouterView />
  </div>
  
</template>

