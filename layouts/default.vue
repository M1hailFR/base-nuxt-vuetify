<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import { siteConfig } from '~/config/site'
import Header from '~/components/base/header.vue';
import Footer from '~/components/base/footer.vue';
import Menu from '~/components/parts/menu/menu.vue';

const appStore = useAppStore()
</script>

<template>
  <v-app :theme="appStore.theme">
    <Header>
      <Menu />
    </Header>
    <v-spacer class="py-6"/>
    <v-main>
      <v-container class="">
        <slot />
      </v-container>
    </v-main>
    <v-spacer class="py-6"/>
    <Footer />
  </v-app>
</template>
