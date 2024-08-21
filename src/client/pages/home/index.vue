<script setup lang="ts">
import { useCounterStore } from '@core/counter'
import type { Props } from './types'
import './styles.scss'

const counterStore = useCounterStore()

const props = defineProps<Props>()
</script>

<template>
  <div class="home">home page</div>
  <p>{{ props.message }}</p>
  <p>Count: {{ counterStore.count }}</p>
  <p>Double Count: {{ counterStore.doubleCount }}</p>
  <button @click="counterStore.increment">Increment</button>
</template>
