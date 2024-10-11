<script setup lang="ts">
import type { Props } from './types'
import './styles.scss'
import { typeToColor } from '@/client/components/typeToColor'
import { onMounted, ref } from 'vue'

const props = defineProps<Props>()
const constrain = 20
const contentRef = ref<HTMLElement | null>(null)

function transforms(x: number, y: number, el: HTMLElement) {
  const box = el.getBoundingClientRect()
  const calcX = (y - box.y - box.height / 2) / constrain
  const calcY = -(x - box.x - box.width / 2) / constrain

  return `perspective(1000px) rotateX(${calcX}deg) rotateY(${calcY}deg)`
}

function transformElement(el: HTMLElement, xyEl: [number, number]) {
  el.style.transform = transforms(xyEl[0], xyEl[1], el)
}

onMounted(() => {
  const contentElement = contentRef.value
  if (contentElement) {
    contentElement.addEventListener('mousemove', (e: MouseEvent) => {
      const xy: [number, number] = [e.clientX, e.clientY]

      window.requestAnimationFrame(() => {
        if (contentElement) {
          transformElement(contentElement, xy)
        }
      })
    })

    contentElement.addEventListener('mouseleave', () => {
      if (contentElement) {
        contentElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      }
    })
  }
})
</script>

<template>
  <div class="card">
    <div
      ref="contentRef"
      class="content"
      :class="{ isSelected: props.isSelected }"
      :style="{
        backgroundImage: `url(${props.pokemon.images.large})`,
        filter: props.isLastSelected
          ? `drop-shadow(1px 1px 4px ${props.pokemon.types ? typeToColor.get(props.pokemon.types[0]) : typeToColor.get('Colorless')})
          drop-shadow(-1px 1px 4px ${props.pokemon.types ? typeToColor.get(props.pokemon.types[0]) : typeToColor.get('Colorless')})
          drop-shadow(1px -1px 4px ${props.pokemon.types ? typeToColor.get(props.pokemon.types[0]) : typeToColor.get('Colorless')})
          drop-shadow(-1px -1px 4px ${props.pokemon.types ? typeToColor.get(props.pokemon.types[0]) : typeToColor.get('Colorless')})`
          : 'none'
      }"
    >
      <!--      <div class="cell" v-for="n in 400" v-bind:key="n" />-->
    </div>
  </div>
</template>
