<script setup lang="ts">
import type { Props } from './types'
import './styles.scss'

const props = defineProps<Props>()
</script>

<template>
  <div class="card">
    <div
      class="content"
      :class="{ selected: props.isSelected }"
      :style="{
        backgroundImage: `url(${props.pokemon.images.large})`
      }"
    >
      <div class="cell" />
      <div class="cell" />
      <div class="cell" />
      <div class="cell" />
      <div class="cell" />
      <div class="cell" />
      <div class="cell" />
      <div class="cell" />
      <div class="cell" />
    </div>
  </div>
</template>
