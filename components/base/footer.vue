<script setup lang="ts">
import { useAppStore } from "~/stores/app";
import { siteConfig } from "~/config/site";
const appStore = useAppStore();
</script>

<template>
  <v-container class="">
    <span>&copy; {{ new Date().getFullYear() }} {{ siteConfig.name }}</span>
  </v-container>
</template>
