<script setup lang="ts">
import { useIncrementStore, useRetrieveCountsStore } from '@core'
import type { Props } from './types'
import './styles.scss'

const incrementStore = useIncrementStore()
const countsStore = useRetrieveCountsStore()
const props = defineProps<Props>()

countsStore.retrieveCounts()
</script>

<template>
  <div class="home">home page</div>
  <p>{{ props.message }}</p>
  <p>increment: {{ incrementStore.count }}</p>
  <p>increment: {{ incrementStore.isRequestPending }}</p>
  <p>increment: {{ incrementStore.isRequestSuccess }}</p>
  <p>increment: {{ incrementStore.isRequestFailure }}</p>
  <button @click="incrementStore.increment">Increment</button>
  <p>Counts: {{ countsStore.isRequestPending }}</p>
  <p>Counts: {{ countsStore.isRequestSuccess }}</p>
  <p>Counts: {{ countsStore.isRequestFailure }}</p>
  <li v-for="(number, index) in countsStore.counts" :key="index">
    {{ number }}
  </li>
</template>
