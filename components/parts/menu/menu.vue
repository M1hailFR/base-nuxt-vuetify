<script setup lang="ts">
	import { ref } from 'vue';
	import { navigationConfig } from '~/config/navigation';
	import { useTranslation } from '~/composables/useTranslation';

	const { t } = useTranslation();
	const navigation = navigationConfig;
	const drawer = ref(false);
</script>

<template>
	<nav class="d-flex align-center w-100 py-0">
		<div class="d-none d-md-flex ga-1">
			<v-btn
				v-for="item in navigation.navigation"
				:key="item.path"
				:to="item.path"
				density="compact"
				variant="text"
				class="px-1"
			>
				<p class="text-caption">{{ t(item.title) }}</p>
			</v-btn>
		</div>

		<v-btn icon class="d-md-none" @click="drawer = !drawer">
			<v-icon>mdi-menu</v-icon>
		</v-btn>
	</nav>

	<!-- Мобильное меню -->
	<v-navigation-drawer v-model="drawer" location="right" temporary>
		<v-list>
			<v-list-item
				v-for="item in navigation.navigation"
				:key="item.path"
				:to="item.path"
				:title="item.title"
			/>
		</v-list>
	</v-navigation-drawer>
</template>
