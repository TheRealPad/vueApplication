<script setup lang="ts">
import { ref } from 'vue'

import Landscape from './landscape/index.vue'
import './styles.scss'

const isToggled = ref(false)

const toggleButton = () => {
  isToggled.value = !isToggled.value
}
</script>

<template>
  <div class="themeSwitch">
    <div class="button" :class="{ activeButton: isToggled }" @click="toggleButton">
      <div class="light">
        <div class="light">
          <div class="light">
            <div class="sphere sun">
              <div class="sphere moon" :class="{ activeMoon: isToggled }">
                <div class="holes" id="first" />
                <div class="holes" id="second" />
                <div class="holes" id="third" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Landscape :isActive="isToggled" />
    </div>
  </div>
</template>
