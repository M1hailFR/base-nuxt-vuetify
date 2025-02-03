<script setup lang="ts">
const { t } = useTranslation()
</script>
<template>
	<div class="w-100">
		<v-container class="dvh-100 border">
			<div class=" ">
				qwer
			</div>
		</v-container>
		<v-container class="dvh-100 border">
			<div class=" ">
				{{ t('test.hello') }}
			</div>
		</v-container>
		<v-container class="dvh-100 border">
			<div class=" ">
				qwer
			</div>
		</v-container>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
	.dvh-100 {
		height: 100dvh;
	}
</style>
