<script setup lang="ts">
	import { siteConfig } from '~/config/site';
	import { useAppStore } from '~/stores/app';
	import { useLanguageSwitch } from '~/composables/useTranslation';

	const appStore = useAppStore();
	const { switchLanguage } = useLanguageSwitch();
</script>

<template>
	<header
		dark
		class="header bg-surface position-fixed top-0 left-0 right-0 z-10 elevation-1"
	>
		<v-container class="align-center d-flex py-2">
			<div
				class="cursor-pointer d-flex align-center ga-2 pr-10"
				@click="navigateTo('/')"
			>
				<v-icon icon="$logo" /> {{ siteConfig.name }}
			</div>
			<v-spacer class="d-flex d-md-none" />
			<div>
				<slot />
			</div>
			<v-spacer class="d-none d-md-flex" />
			<div class="d-none d-md-flex align-center ga-2" >
				<v-switch
					v-model="appStore.localeLang"
					:true-value="'ru'"
					:false-value="'en'"
					hide-details
					density="compact"
					color="primary"
					:label="appStore.localeLang.toUpperCase()"
					@update:model-value="(value) => value && switchLanguage(value)"
				/>
				<v-btn icon @click="appStore.toggleTheme" density="compact" variant="text">
					<v-icon size="small">
						{{
							appStore.theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'
						}}
					</v-icon>
				</v-btn>
				<VBtnOutlined density="compact" >
					<h5>qwer</h5>
				</VBtnOutlined>
			</div>
		</v-container>
	</header>
</template>
