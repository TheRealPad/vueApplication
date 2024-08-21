<script setup lang="ts">
import type { Props } from './types'
import './styles.scss'

const props = defineProps<Props>()
</script>

<template>
  <div class="user">user page</div>
  <p>{{ props.message }}</p>
</template>
