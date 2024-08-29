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
  <p>increment: {{ incrementStore.state.count }}</p>
  <p>increment: {{ incrementStore.state.request.isRequestPending }}</p>
  <p>increment: {{ incrementStore.state.request.isRequestSuccess }}</p>
  <p>increment: {{ incrementStore.state.request.isRequestFailure }}</p>
  <button @click="incrementStore.increment">Increment</button>
  <p>Counts: {{ countsStore.state.request.isRequestPending }}</p>
  <p>Counts: {{ countsStore.state.request.isRequestSuccess }}</p>
  <p>Counts: {{ countsStore.state.request.isRequestFailure }}</p>
  <li v-for="(number, index) in countsStore.state.counts" :key="index">
    {{ number }}
  </li>
</template>
