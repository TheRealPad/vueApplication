<script setup lang="ts">
import type { Pokemon } from '@dto'
import { pokemon } from '@dto'
import data from '../../../../public/data/cards.json'
import Card from './card/index.vue'
import type { Props } from './types'
import './styles.scss'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<Props>()
const container = ref<HTMLElement | null>(null)
const pokemonList = data as Pokemon[]
const selectedPokemon = ref<string | null>(null)

const selectPokemon = (pokemon: Pokemon) => {
  if (!selectedPokemon.value || selectedPokemon.value !== pokemon.id) {
    selectedPokemon.value = pokemon.id
  } else {
    selectedPokemon.value = null
  }
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.className.includes('content')) {
    selectedPokemon.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="pokemon">
    <div class="list">
      <div
        ref="container"
        v-for="(pokemon, index) in pokemonList"
        :key="index"
        @click="selectPokemon(pokemon)"
      >
        <Card :pokemon="pokemon" :is-selected="selectedPokemon === pokemon.id" />
      </div>
    </div>
  </div>
</template>
