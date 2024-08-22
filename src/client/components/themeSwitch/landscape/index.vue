<script setup lang="ts">
import type { Props } from './types'
import './styles.scss'

const props = defineProps<Props>()
</script>

<template>
  <div class="landscape" :class="{ active: props.isActive }">
    <div class="cloud" id="first-cloud">
      <div class="cloudContent" />
    </div>
    <div class="cloud" id="second-cloud">
      <div class="cloudContent" />
    </div>
    <div class="cloud" id="third-cloud">
      <div class="cloudContent" />
    </div>
    <div class="cloud" id="fourth-cloud">
      <div class="cloudContent" />
    </div>
    <div class="cloud" id="fifth-cloud">
      <div class="cloudContent" />
    </div>
    <div class="cloud" id="sixth-cloud">
      <div class="cloudContent" />
    </div>
    <div class="star" id="first-star" />
    <div class="star" id="second-star" />
    <div class="star" id="third-star" />
    <div class="star" id="fourth-star" />
    <div class="star" id="fifth-star" />
    <div class="star" id="sixth-star" />
    <div class="star" id="seventh-star" />
    <div class="star" id="eighth-star" />
    <div class="star" id="ninth-star" />
    <div class="star" id="tenth-star" />
    <div class="star" id="eleventh-star" />
  </div>
</template>
